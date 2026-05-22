import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { alerts, assignees, incidents, shifts, statusUpdates } from "./mockData";
import type { Incident, IncidentPriority, IncidentStatus, WorkloadHint } from "./types";
import "./styles.css";

const priorityOrder: Record<IncidentPriority, number> = { critical: 0, high: 1, medium: 2, low: 3 };
const statusLabels: Record<IncidentStatus, string> = { new: "New", triage: "In triage", assigned: "Assigned", in_progress: "In progress", blocked: "Blocked", resolved: "Resolved" };
const assigneeNamesById = Object.fromEntries(assignees.map((assignee) => [assignee.id, assignee.name]));

type AssignmentOverrides = Record<string, string>;

function applyAssignments(rows: Incident[], assignments: AssignmentOverrides) {
  return rows.map((incident) => {
    const assigneeId = assignments[incident.id];
    if (!assigneeId) return incident;
    return { ...incident, assignee: assigneeNamesById[assigneeId] || incident.assignee, status: "assigned" as IncidentStatus };
  });
}

function buildWorkloadHints(rows: Incident[]): WorkloadHint[] {
  const activeByAssignee = new Map<string, number>();
  for (const incident of rows) {
    if (incident.status === "resolved") continue;
    activeByAssignee.set(incident.assignee, (activeByAssignee.get(incident.assignee) || 0) + 1);
  }
  let lowestActive = Infinity;
  for (const assignee of assignees.filter((entry) => entry.name !== "Unassigned")) {
    lowestActive = Math.min(lowestActive, activeByAssignee.get(assignee.name) || 0);
  }
  return assignees.filter((assignee) => assignee.name !== "Unassigned").map((assignee) => {
    const activeCount = activeByAssignee.get(assignee.name) || 0;
    const riskLevel = activeCount >= 4 ? "near_capacity" : activeCount >= 2 ? "balanced" : "available";
    return {
      assigneeId: assignee.id,
      name: assignee.name,
      role: assignee.role,
      activeCount,
      capacity: assignee.capacity,
      riskLevel,
      suggested: activeCount === lowestActive
    };
  });
}

const messages = {
  dashboardTitle: { key: "operations.dashboard.title", text: "Operations Dashboard" },
  intakeTitle: { key: "operations.intake.title", text: "Intake Queue" },
  incidentTitle: { key: "operations.incident.title", text: "Incident Detail" },
  assignmentTitle: { key: "operations.assignments.title", text: "Assignment Board" },
  scheduleTitle: { key: "operations.schedule.title", text: "Schedule" },
  settingsTitle: { key: "operations.settings.title", text: "Settings" },
  dataGridLabel: { key: "operations.widgets.data_grid.label", text: "Incident table" },
  filterPanelLabel: { key: "operations.widgets.filter_panel.label", text: "Incident filters" },
  commandToolbarLabel: { key: "operations.widgets.command_toolbar.label", text: "Screen commands" },
  workloadHintLabel: { key: "operations.widgets.workload_hints.label", text: "Reviewer workload hints" },
  kpiCardsLabel: { key: "operations.widgets.kpi_cards.label", text: "Operations summary cards" },
  detailPanelLabel: { key: "operations.widgets.detail_panel.label", text: "Incident detail" },
  statusBoardLabel: { key: "operations.widgets.status_board.label", text: "Assignment status board" },
  timelineLabel: { key: "operations.widgets.timeline.label", text: "Incident timeline" },
  scheduleLabel: { key: "operations.widgets.schedule.label", text: "Schedule calendar" },
  alertLabel: { key: "operations.widgets.alert.label", text: "Live alerts" },
  settingsLabel: { key: "operations.widgets.settings.label", text: "Settings panel" }
} as const;

type Message = (typeof messages)[keyof typeof messages];

type WidgetMarker = {
  widget: string;
  componentRef: string;
  mapping: string;
  message: Message;
  role?: React.AriaRole;
  live?: "off" | "polite" | "assertive";
  keyboardModel?: string;
  focusModel?: string;
};

function topogramRoot() {
  return {
    "data-topogram-surface": "surface_operations_web_react",
    "data-topogram-semantic-surface": "surface_operations_ui",
    "data-topogram-design-language": "design_operations_product_ui",
    "data-topogram-component-map": "component_map_operations_widgets"
  };
}

function screenAttrs(screen: string, layout: string, message: Message) {
  return {
    "data-topogram-screen": screen,
    "data-topogram-layout": layout,
    "data-topogram-message-key": message.key,
    "data-topogram-accessibility-target": "screen:" + screen,
    role: "main" as React.AriaRole,
    "aria-label": message.text
  };
}

function regionAttrs(region: string, contract: string, slot: string) {
  return {
    "data-topogram-region": region,
    "data-topogram-region-contract": contract,
    "data-topogram-slot": slot
  };
}

function widgetAttrs(marker: WidgetMarker) {
  return {
    "data-topogram-widget": marker.widget,
    "data-topogram-component-ref": marker.componentRef,
    "data-topogram-widget-mapping": marker.mapping,
    "data-topogram-message-key": marker.message.key,
    "data-topogram-accessibility-target": "widget:" + marker.widget,
    "data-topogram-keyboard-model": marker.keyboardModel || "standard",
    "data-topogram-focus-model": marker.focusModel || "visible",
    role: marker.role,
    "aria-label": marker.message.text,
    "aria-live": marker.live
  };
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell" {...topogramRoot()}>
        <aside className="global-nav" aria-label="Primary" {...regionAttrs("nav", "region_global_navigation", "nav")}>
          <div className="brand-block" {...regionAttrs("header", "region_app_header", "header")}><span className="brand-mark">OC</span><div><strong>Ops Control</strong><span>North Region</span></div></div>
          <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/intake">Intake Queue</NavLink>
            <NavLink to="/assignments">Assignment Board</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </nav>
        </aside>
        <div className="main-panel">
          <header className="top-bar" {...regionAttrs("header", "region_app_header", "header")}><div><p className="eyebrow">Live operations</p><h1>Operations Control Room</h1></div><div className="top-actions"><span className="live-dot" aria-hidden="true" /><span>{alerts.length} active alerts</span></div></header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/intake" element={<IntakeQueue />} />
            <Route path="/incidents/:incidentId" element={<IncidentDetail />} />
            <Route path="/assignments" element={<AssignmentBoard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Dashboard() {
  const openIncidents = incidents.filter((incident) => incident.status !== "resolved");
  const critical = openIncidents.filter((incident) => incident.priority === "critical");
  const blocked = openIncidents.filter((incident) => incident.status === "blocked");
  const slaRisk = openIncidents.filter((incident) => incident.slaMinutes <= 60);
  return (
    <main className="screen-grid dashboard-screen" {...screenAttrs("operations_dashboard", "layout_dashboard_overview", messages.dashboardTitle)}>
      <section className="kpi-grid" {...regionAttrs("results", "region_dashboard_summary", "results")} {...widgetAttrs({ widget: "widget_kpi_summary_cards", componentRef: "ops.web.kpiSummaryCards", mapping: "kpi_summary_web", message: messages.kpiCardsLabel, role: "region" })}>
        <MetricCard label="Open incidents" value={openIncidents.length} tone="neutral" />
        <MetricCard label="Critical" value={critical.length} tone="danger" />
        <MetricCard label="Blocked" value={blocked.length} tone="warning" />
        <MetricCard label="SLA under 60m" value={slaRisk.length} tone="accent" />
      </section>
      <section className="panel span-2" {...regionAttrs("results", "region_dashboard_summary", "results")}>
        <PanelHeader title="Highest priority intake" action={<Link to="/intake">View queue</Link>} />
        <IncidentTable incidents={incidents.slice().sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]).slice(0, 5)} />
      </section>
      <section className="panel" {...regionAttrs("live_alerts", "region_live_alerts", "live_alerts")} {...widgetAttrs({ widget: "widget_alert_banner", componentRef: "ops.web.liveAlertBanner", mapping: "alert_banner_web", message: messages.alertLabel, role: "status", live: "polite" })}>
        <PanelHeader title="Live alerts" />
        <div className="alert-list">{alerts.map((alert) => <article className="alert-card" key={alert.id}><strong>{alert.title}</strong><p>{alert.summary}</p><span>{alert.severity}</span></article>)}</div>
      </section>
    </main>
  );
}

function IntakeQueue() {
  const [query, setQuery] = React.useState("");
  const [priority, setPriority] = React.useState<IncidentPriority | "all">("all");
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [targetAssignee, setTargetAssignee] = React.useState(assignees[0].id);
  const [assignments, setAssignments] = React.useState<AssignmentOverrides>({});
  const [assignmentMessage, setAssignmentMessage] = React.useState("No assignment changes yet.");
  const assignedRows = applyAssignments(incidents, assignments);
  const filtered = assignedRows.filter((incident) => {
    const matchesQuery = (incident.title + " " + incident.location + " " + incident.summary).toLowerCase().includes(query.toLowerCase());
    const matchesPriority = priority === "all" || incident.priority === priority;
    return matchesQuery && matchesPriority;
  });
  const workloadHints = buildWorkloadHints(assignedRows);
  function toggleIncident(id: string) {
    setSelectedIds((current) => current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]);
  }
  function assignSelected() {
    if (selectedIds.length === 0) return;
    setAssignments((current) => {
      const next = { ...current };
      for (const id of selectedIds) next[id] = targetAssignee;
      return next;
    });
    const assigneeName = assigneeNamesById[targetAssignee] || "selected reviewer";
    setAssignmentMessage(selectedIds.length + " incidents assigned to " + assigneeName + ".");
    setSelectedIds([]);
  }
  return (
    <main className="queue-layout queue-layout-with-hints" {...screenAttrs("intake_queue", "layout_queue_workspace", messages.intakeTitle)}>
      <aside className="panel filter-panel" {...regionAttrs("filters", "region_filter_panel", "filters")} {...widgetAttrs({ widget: "widget_filter_panel", componentRef: "ops.web.filterPanel", mapping: "filter_panel_web", message: messages.filterPanelLabel, role: "search", keyboardModel: "form" })}>
        <PanelHeader title="Filters" />
        <label>Search<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Incident, location, team" /></label>
        <label>Priority<select value={priority} onChange={(event) => setPriority(event.target.value as IncidentPriority | "all")}><option value="all">All priorities</option><option value="critical">Critical</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></label>
      </aside>
      <section className="panel queue-panel" {...regionAttrs("results", "region_work_queue", "results")}>
        <CommandToolbar label={filtered.length + " results - " + selectedIds.length + " selected"} />
        <IncidentTable incidents={filtered} selectable selectedIds={selectedIds} onToggle={toggleIncident} />
      </section>
      <WorkloadHintPanel hints={workloadHints} targetAssignee={targetAssignee} setTargetAssignee={setTargetAssignee} selectedCount={selectedIds.length} onAssign={assignSelected} assignmentMessage={assignmentMessage} />
    </main>
  );
}

function IncidentDetail() {
  const params = useParams();
  const incident = incidents.find((entry) => entry.id === params.incidentId) || incidents[0];
  const updates = statusUpdates.filter((update) => update.incidentId === incident.id);
  return (
    <main className="detail-layout" {...screenAttrs("incident_detail", "layout_incident_detail", messages.incidentTitle)}>
      <section className="panel detail-summary" {...regionAttrs("summary", "region_detail_summary", "summary")} {...widgetAttrs({ widget: "widget_detail_panel", componentRef: "ops.web.incidentInspector", mapping: "detail_panel_web", message: messages.detailPanelLabel, role: "region" })}>
        <Link to="/intake" className="back-link">Back to intake</Link><div className="detail-heading"><div><p className="eyebrow">{incident.id}</p><h2>{incident.title}</h2></div><PriorityPill priority={incident.priority} /></div><p>{incident.summary}</p><dl className="detail-grid"><div><dt>Status</dt><dd><StatusPill status={incident.status} /></dd></div><div><dt>Location</dt><dd>{incident.location}</dd></div><div><dt>Team</dt><dd>{incident.team}</dd></div><div><dt>Assignee</dt><dd>{incident.assignee}</dd></div><div><dt>SLA</dt><dd>{incident.slaMinutes} minutes</dd></div></dl>
      </section>
      <section className="panel timeline-panel" {...regionAttrs("timeline", "region_activity_timeline", "timeline")} {...widgetAttrs({ widget: "widget_activity_timeline", componentRef: "ops.web.activityTimeline", mapping: "activity_timeline_web", message: messages.timelineLabel, role: "list" })}>
        <PanelHeader title="Timeline" /><ol className="timeline">{updates.map((update) => <li key={update.id}><span>{update.time}</span><strong>{update.label}</strong><p>{update.note}</p></li>)}</ol>
      </section>
    </main>
  );
}

function AssignmentBoard() {
  return (
    <main className="board-screen" {...screenAttrs("assignment_board", "layout_assignment_board", messages.assignmentTitle)} {...regionAttrs("board", "region_assignment_board", "board")} {...widgetAttrs({ widget: "widget_status_board", componentRef: "ops.web.assignmentBoard", mapping: "status_board_web", message: messages.statusBoardLabel, role: "grid", keyboardModel: "roving_tabindex", focusModel: "roving_tabindex" })}>
      {assignees.map((assignee) => { const assigned = incidents.filter((incident) => incident.assignee === assignee.name && incident.status !== "resolved"); return <section className="panel board-column" key={assignee.id}><PanelHeader title={assignee.name} action={<span>{assigned.length} active</span>} /><p className="muted">{assignee.role} - {assignee.capacity} capacity</p>{assigned.map((incident) => <Link className="incident-card" to={"/incidents/" + incident.id} key={incident.id}><PriorityPill priority={incident.priority} /><strong>{incident.title}</strong><span>{incident.location}</span></Link>)}</section>; })}
    </main>
  );
}

function Schedule() {
  return (
    <main className="panel" {...screenAttrs("schedule", "layout_schedule_calendar", messages.scheduleTitle)} {...regionAttrs("calendar", "region_schedule_calendar", "calendar")} {...widgetAttrs({ widget: "widget_schedule_calendar", componentRef: "ops.web.scheduleCalendar", mapping: "schedule_calendar_web", message: messages.scheduleLabel, role: "grid", keyboardModel: "arrow_keys", focusModel: "roving_tabindex" })}>
      <PanelHeader title="Field Schedule" /><div className="schedule-grid">{shifts.map((shift) => <article className="shift-card" key={shift.id}><span>{shift.window}</span><strong>{shift.team}</strong><p>{shift.coverage}</p></article>)}</div>
    </main>
  );
}

function Settings() {
  return (
    <main className="panel settings-panel" {...screenAttrs("settings", "layout_settings_page", messages.settingsTitle)} {...regionAttrs("summary", "region_settings_panel", "summary")} {...widgetAttrs({ widget: "widget_settings_panel", componentRef: "ops.web.settingsPanel", mapping: "settings_panel_web", message: messages.settingsLabel, role: "form", keyboardModel: "form" })}>
      <PanelHeader title="Preferences" /><div className="settings-grid"><label><input type="checkbox" defaultChecked /> Show SLA risk on queue rows</label><label><input type="checkbox" defaultChecked /> Use compact density for operations screens</label><label><input type="checkbox" /> Announce new critical alerts with a live region</label></div>
    </main>
  );
}

function WorkloadHintPanel({ hints, targetAssignee, setTargetAssignee, selectedCount, onAssign, assignmentMessage }: { hints: WorkloadHint[]; targetAssignee: string; setTargetAssignee: (value: string) => void; selectedCount: number; onAssign: () => void; assignmentMessage: string }) {
  return (
    <aside className="panel workload-hint-panel" data-topogram-capability="cap_view_reviewer_workload_hints" {...regionAttrs("assignment_hints", "region_assignment_hints", "assignment_hints")} {...widgetAttrs({ widget: "widget_workload_hint_panel", componentRef: "ops.web.workloadHintPanel", mapping: "workload_hint_panel_web", message: messages.workloadHintLabel, role: "region", live: "polite", keyboardModel: "form" })}>
      <PanelHeader title="Assignment guidance" action={<span>{selectedCount} selected</span>} />
      <label className="assignment-target">Assign to<select value={targetAssignee} onChange={(event) => setTargetAssignee(event.target.value)}>{hints.map((hint) => <option value={hint.assigneeId} key={hint.assigneeId}>{hint.name}</option>)}</select></label>
      <button className="primary-action" type="button" data-topogram-action="cap_bulk_assign_incidents" onClick={onAssign} disabled={selectedCount === 0}>Assign selected</button>
      <p className="assignment-message">{assignmentMessage}</p>
      <div className="hint-list">{hints.map((hint) => <article className={"hint-card risk-" + hint.riskLevel + (hint.suggested ? " suggested" : "")} key={hint.assigneeId}><div><strong>{hint.name}</strong><span>{hint.role}</span></div><p>{hint.activeCount} active - {hint.capacity}</p>{hint.suggested ? <em>Suggested target</em> : null}</article>)}</div>
    </aside>
  );
}

function CommandToolbar({ label }: { label: string }) {
  return <div className="command-toolbar" {...regionAttrs("command_bar", "region_command_bar", "command_bar")} {...widgetAttrs({ widget: "widget_command_toolbar", componentRef: "ops.web.commandToolbar", mapping: "command_toolbar_web", message: messages.commandToolbarLabel, role: "toolbar" })}><PanelHeader title="Intake Queue" action={<span>{label}</span>} /></div>;
}

function MetricCard({ label, value, tone }: { label: string; value: number; tone: "neutral" | "danger" | "warning" | "accent" }) {
  return <article className={"metric-card tone-" + tone}><span>{label}</span><strong>{value}</strong></article>;
}

function PanelHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return <div className="panel-header"><h2>{title}</h2>{action ? <div className="panel-action">{action}</div> : null}</div>;
}

function IncidentTable({ incidents: rows, selectable = false, selectedIds = [], onToggle }: { incidents: Incident[]; selectable?: boolean; selectedIds?: string[]; onToggle?: (id: string) => void }) {
  return <div className="table-wrap" {...widgetAttrs({ widget: "widget_data_grid", componentRef: "ops.web.incidentDataGrid", mapping: "data_grid_web_wide", message: messages.dataGridLabel, role: "grid", keyboardModel: "data_grid", focusModel: "roving_tabindex" })}><table><thead><tr>{selectable ? <th className="select-column">Select</th> : null}<th>Incident</th><th>Priority</th><th>Status</th><th>Assignee</th><th>SLA</th></tr></thead><tbody>{rows.map((incident) => <tr key={incident.id}>{selectable ? <td className="select-column"><input type="checkbox" aria-label={"Select " + incident.title} checked={selectedIds.includes(incident.id)} onChange={() => onToggle?.(incident.id)} /></td> : null}<td><Link to={"/incidents/" + incident.id}>{incident.title}</Link><span>{incident.location}</span></td><td><PriorityPill priority={incident.priority} /></td><td><StatusPill status={incident.status} /></td><td>{incident.assignee}</td><td>{incident.slaMinutes}m</td></tr>)}</tbody></table></div>;
}

function PriorityPill({ priority }: { priority: IncidentPriority }) {
  return <span className={"pill priority-" + priority}>{priority}</span>;
}

function StatusPill({ status }: { status: IncidentStatus }) {
  return <span className={"pill status-" + status}>{statusLabels[status]}</span>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

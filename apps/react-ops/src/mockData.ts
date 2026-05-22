import type { Alert, Assignee, Incident, Shift, StatusUpdate } from "./types";

export const incidents: Incident[] = [
  { id: "INC-1042", title: "Inbound shipment blocked at Gate 4", priority: "critical", status: "triage", team: "Logistics", assignee: "Maya Chen", submittedAt: "08:10", location: "North Yard", summary: "Driver credentials are valid, but the dock assignment is missing from the handheld queue.", slaMinutes: 28, tags: ["gate", "shipment", "dock"] },
  { id: "INC-1043", title: "Cold storage sensor drift", priority: "high", status: "assigned", team: "Facilities", assignee: "Jon Bell", submittedAt: "08:26", location: "Cold Bay 2", summary: "Temperature readings have diverged from the redundant probe for 17 minutes.", slaMinutes: 52, tags: ["sensor", "temperature"] },
  { id: "INC-1044", title: "Packing line label printer offline", priority: "medium", status: "in_progress", team: "Production", assignee: "Priya Nair", submittedAt: "08:42", location: "Line B", summary: "The printer accepts jobs but stays offline after the maintenance restart.", slaMinutes: 94, tags: ["printer", "line-b"] },
  { id: "INC-1045", title: "Field team request for alternate route", priority: "low", status: "new", team: "Field Ops", assignee: "Unassigned", submittedAt: "09:05", location: "Route 18", summary: "Road closure requires an alternate route before the 10:30 dispatch window.", slaMinutes: 145, tags: ["field", "routing"] },
  { id: "INC-1046", title: "Escalated parts shortage for repair queue", priority: "high", status: "blocked", team: "Maintenance", assignee: "Maya Chen", submittedAt: "09:13", location: "Repair Cell 3", summary: "Two work orders need a shared component that is not visible in the local inventory screen.", slaMinutes: 41, tags: ["parts", "blocked"] },
  { id: "INC-1047", title: "Resolved access badge sync issue", priority: "medium", status: "resolved", team: "Security", assignee: "Jon Bell", submittedAt: "07:58", location: "South Entrance", summary: "Badge sync completed after manually replaying the failed integration job.", slaMinutes: 0, tags: ["security", "resolved"] }
];

export const assignees: Assignee[] = [
  { id: "asg-1", name: "Maya Chen", role: "Operations Lead", capacity: "4 of 6" },
  { id: "asg-2", name: "Jon Bell", role: "Facilities Coordinator", capacity: "3 of 5" },
  { id: "asg-3", name: "Priya Nair", role: "Production Support", capacity: "2 of 4" },
  { id: "asg-4", name: "Unassigned", role: "Needs triage", capacity: "1 waiting" }
];

export const shifts: Shift[] = [
  { id: "shift-1", team: "Logistics", window: "08:00-12:00", coverage: "Gate, dock, and inbound queue support" },
  { id: "shift-2", team: "Facilities", window: "09:00-17:00", coverage: "Sensor checks and building systems" },
  { id: "shift-3", team: "Field Ops", window: "10:00-18:00", coverage: "Dispatch route adjustments and field escalations" },
  { id: "shift-4", team: "Production", window: "06:00-14:00", coverage: "Packing line and repair cell support" }
];

export const alerts: Alert[] = [
  { id: "alert-1", title: "SLA breach risk", severity: "critical", summary: "Gate 4 blockage needs assignment before 08:45." },
  { id: "alert-2", title: "Weather delay", severity: "medium", summary: "Route 18 dispatch windows may shift by 20 minutes." }
];

export const statusUpdates: StatusUpdate[] = [
  { id: "u1", incidentId: "INC-1042", time: "08:10", label: "Submitted", note: "Gate agent created the incident from the intake form." },
  { id: "u2", incidentId: "INC-1042", time: "08:16", label: "Triage started", note: "Operations lead reviewed shipment and dock assignment data." },
  { id: "u3", incidentId: "INC-1042", time: "08:31", label: "Escalation", note: "Dock coordinator requested manual override approval." },
  { id: "u4", incidentId: "INC-1043", time: "08:27", label: "Assigned", note: "Facilities coordinator accepted ownership." },
  { id: "u5", incidentId: "INC-1044", time: "08:45", label: "Work started", note: "Production support restarted the printer queue." }
];

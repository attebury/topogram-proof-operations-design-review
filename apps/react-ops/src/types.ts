export type IncidentPriority = "critical" | "high" | "medium" | "low";
export type IncidentStatus = "new" | "triage" | "assigned" | "in_progress" | "blocked" | "resolved";

export interface Incident {
  id: string;
  title: string;
  priority: IncidentPriority;
  status: IncidentStatus;
  team: string;
  assignee: string;
  submittedAt: string;
  location: string;
  summary: string;
  slaMinutes: number;
  tags: string[];
}

export interface Assignee {
  id: string;
  name: string;
  role: string;
  capacity: string;
}

export interface Shift {
  id: string;
  team: string;
  window: string;
  coverage: string;
}

export interface Alert {
  id: string;
  title: string;
  severity: string;
  summary: string;
}

export interface StatusUpdate {
  id: string;
  incidentId: string;
  time: string;
  label: string;
  note: string;
}

export interface WorkloadHint {
  assigneeId: string;
  name: string;
  role: string;
  activeCount: number;
  capacity: string;
  riskLevel: "available" | "balanced" | "near_capacity";
  suggested: boolean;
}

# Context Slice: screen `intake_queue` — Intake Queue

## Summary
- Type: context_slice
- Description: UI screen 'intake_queue' in surface 'surface_operations_web_react'.

## Review Boundary
- Automation class: review_required
- Reasons: `ui_screen_surface`

## Slice Manifest
- Detail level: compact
- Read order: `focus`, `summary`, `agent_guidance`, `standing_rules`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`, `verification`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 3
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 4
- `agent_guidance` (must_read) — Agent Guidance
  - Mode, read order, follow-up queries, and required proof commands.
  - Items: 10
- `standing_rules` (must_read) — Standing Rules
  - Repo-level laws that should shape implementation choices.
  - Items: 3
- `review_boundary` (must_read) — Review Boundary
  - Automation and human-review expectations for this scope.
  - Items: 2
- `ownership_boundary` (must_read) — Ownership Boundary
  - Generated, maintained, and human-owned boundaries that constrain edits.
  - Items: 4
- `write_scope` (must_read) — Write Scope
  - Files and surfaces that are safe, risky, or out of bounds to edit.
  - Items: 4
- `ui_agent_packet` (must_read) — UI Agent Packet
  - Screen, layout, region, widget, accessibility, i18n, design-token, and UI proof context for UI slices.
  - Items: 21
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 5
- `related_summary` (reference) — Related Summary
  - Compact counts and IDs for related records omitted from compact detail.
  - Items: 4
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4
- `verification` (proof) — Verification Records
  - Verification records directly linked to this slice.
  - Items: 1

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `standing_rules`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `standing_rules`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --surface surface_operations_web_react --screen intake_queue --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --surface surface_operations_web_react --screen intake_queue --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## UI Work Map
### Readiness
- Status: ready_with_review
- Ready to edit: true
- Human review needed:
  - Widget 'widget_command_toolbar' has no android design realization in 'design_operations_product_ui'.
  - Widget 'widget_command_toolbar' has no ios design realization in 'design_operations_product_ui'.
  - Realization 'command_toolbar_mobile' is 'contract_only'.
  - Behavior 'bulk_action' is 'contract_only'.
  - Behavior 'keyboard_navigation' is 'contract_only'.
  - Behavior 'keyboard_navigation' is 'contract_only'.
  - Realization 'command_toolbar_mobile' does not declare 'loading' state coverage.
  - Realization 'command_toolbar_mobile' does not declare 'error' state coverage.
  - ... 20 more
- Change targets:
  - `screen:intake_queue`
    - Focused UI work-map node.
  - `widget_binding:intake_queue_command_bar_widget_command_toolbar` widget `widget_command_toolbar`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
  - `widget_binding:intake_queue_filters_widget_filter_panel` widget `widget_filter_panel`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
  - `widget_binding:intake_queue_results_widget_data_grid` widget `widget_data_grid`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
  - `widget_binding:intake_queue_assignment_hints_widget_workload_hint_panel` widget `widget_workload_hint_panel`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
### Work Map Chain
- Surface: `surface_operations_web_react` (web)
- Screen: `intake_queue` — Intake Queue (list)
- Route: `/intake`
- Layout: `layout_queue_workspace` — Queue Workspace Layout
  - Inherits: `layout_standard_app_shell` -> `layout_queue_workspace`
- Regions:
  - `header` pattern `app_header` uses `region_app_header`
  - `nav` pattern `primary_navigation` uses `region_global_navigation`
  - `content` pattern `data_grid_view` uses `region_work_queue`
  - `command_bar` pattern `action_bar` uses `region_command_bar`
  - `filters` pattern `filter_panel` uses `region_filter_panel`
  - `results` pattern `data_grid_view` uses `region_work_queue`
  - `assignment_hints` pattern `resource_cards` uses `region_assignment_hints`
### Widget Bindings
- `intake_queue_command_bar_widget_command_toolbar`: widget `widget_command_toolbar` in region `command_bar`
  - Data: `actions from capability cap_bulk_assign_incidents`
  - Events: `primary_action action cap_bulk_assign_incidents`, `escalation action cap_escalate_priority_alert`
- `intake_queue_filters_widget_filter_panel`: widget `widget_filter_panel` in region `filters`
  - Data: `filters from capability cap_list_intake_items`
  - Events: `filter_change action cap_list_intake_items`
- `intake_queue_results_widget_data_grid`: widget `widget_data_grid` in region `results`
  - Data: `rows from capability cap_list_intake_items`
  - Events: `row_select navigate incident_detail`
- `intake_queue_assignment_hints_widget_workload_hint_panel`: widget `widget_workload_hint_panel` in region `assignment_hints`
  - Data: `hints from capability cap_view_reviewer_workload_hints`
  - Events: `assign action cap_bulk_assign_incidents`
### Design Review
- Status: review_required
- Gaps: missing_platforms: 6, missing_states: 8, behavior_review_items: 11
- Review rows:
  - Widget 'widget_command_toolbar' has no android design realization in 'design_operations_product_ui'.
  - Widget 'widget_command_toolbar' has no ios design realization in 'design_operations_product_ui'.
  - Realization 'command_toolbar_mobile' is 'contract_only'.
  - Behavior 'bulk_action' is 'contract_only'.
  - Behavior 'keyboard_navigation' is 'contract_only'.
  - Behavior 'keyboard_navigation' is 'contract_only'.
  - ... 22 more
- Design proof commands:
  - `topogram query ui-design-coverage ./topo --surface surface_operations_web_react --json`
  - `topogram query ui-design-coverage ./topo --surface surface_operations_web_react --format markdown`
  - `topogram emit ui-realization-report ./topo --surface surface_operations_web_react --json`
### Accessibility And I18n
- Accessibility: authored_contract
  - Obligations: `screen:intake_queue main`, `widget:widget_data_grid grid`, `widget:widget_filter_panel search`, `widget:widget_command_toolbar region`, `widget:widget_workload_hint_panel region`
- I18n: authored_contract
  - Message keys: `operations.intake.title`, `operations.intake.empty.title`, `operations.intake.empty.body`, `operations.widgets.data_grid.label`, `operations.widgets.filter_panel.label`, `operations.widgets.command_toolbar.label`, `operations.widgets.workload_hints.label`, `operations.actions.bulk_assign`

## Standing Rules
- `rule_maintainable_security_focused_code` — Maintainable Security Focused Code
  - severity: error, status: enforced
  - Code must be organized, maintainable, security-focused, tested, and testable for long-lived intermittent maintenance.
- `rule_stateful_workflow_mutations_use_cli` — Stateful Workflow Mutations Use CLI
  - severity: error, status: enforced
  - Status, history, trust, provenance, generated sentinels, archives, release state, and rollout state should be changed through canonical commands.
- `rule_tests_prove_consumer_value` — Tests Prove Consumer Value
  - severity: error, status: enforced
  - Tests should prove behavior that consumers, maintainers, or agents rely on; compile, run, validate, or inspect real outputs where practical.

## Depends On
- surfaces: `surface_operations_web_react`
- capabilities: `cap_bulk_assign_incidents`, `cap_escalate_priority_alert`, `cap_list_intake_items`, `cap_view_incident_detail`
- shapes: `shape_output_incident_row`
- widgets: `widget_command_toolbar`, `widget_data_grid`, `widget_filter_panel`, `widget_workload_hint_panel`
- verifications: `verification_slice_guided_bulk_assignment`

## Verification Targets
- Rationale: Screen slices should prove UI contract, realization coverage, widget behavior, and generated/maintained app checks for the selected surface.
- Verifications: `verification_slice_guided_bulk_assignment`
- Generated checks: `compile-check`, `runtime-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`

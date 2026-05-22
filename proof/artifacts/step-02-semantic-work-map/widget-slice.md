# Context Slice: widget `widget_data_grid` — Data Grid

## Summary
- Type: context_slice
- Status: active
- Description: High-density incident table for queue and team review.

## Review Boundary
- Automation class: review_required
- Reasons: `widget_surface`

## Slice Manifest
- Detail level: compact
- Read order: `focus`, `summary`, `agent_guidance`, `standing_rules`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 4
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 18
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
  - Items: 13
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 6
- `related_summary` (reference) — Related Summary
  - Compact counts and IDs for related records omitted from compact detail.
  - Items: 2
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `standing_rules`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `standing_rules`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --surface surface_operations_web_react --widget widget_data_grid --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --surface surface_operations_web_react --widget widget_data_grid --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## UI Work Map
### Readiness
- Status: ready
- Ready to edit: true
- Change targets:
  - `widget:widget_data_grid`
    - Focused UI work-map node.
  - `widget_binding:intake_queue_results_widget_data_grid` widget `widget_data_grid`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
### Work Map Chain
### Design Review
- Status: unmapped
- Design proof commands:
  - `topogram query ui-design-coverage ./topo --surface surface_operations_web_react --widget widget_data_grid --json`
  - `topogram query ui-design-coverage ./topo --surface surface_operations_web_react --widget widget_data_grid --format markdown`
  - `topogram emit ui-realization-report ./topo --surface surface_operations_web_react --json`
### Accessibility And I18n
- Accessibility: semantic_context_only
- I18n: semantic_context_only

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
- shapes: `shape_output_incident_row`
- surfaces: `surface_operations_ui`, `surface_operations_web_react`

## Verification Targets
- Rationale: Widget changes affect every related surface, so verification should follow the widget contract closure.
- Generated checks: `compile-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`

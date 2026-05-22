# Step 05 Slice-Guided UI Change

The Intake Queue packet exposed the command toolbar and alert feedback region as the safe work leaves for a priority escalation change.

## Topogram First

- Added `cap_escalate_priority_alert`.
- Added a message and accessibility action obligation for `operations.actions.escalate_priority`.
- Updated the `intake_queue` command-bar widget binding to include an `escalation` action event.
- Added the corresponding widget event to `widget_command_toolbar`.

## React Second

- Added an escalation action button to the maintained React command toolbar.
- Added a polite live-region status message for escalated priority incidents.
- Aligned maintained React component markers with the Acme component refs from `component_map_operations_widgets`.

## Proof Artifacts

- `before-screen-slice.md`
- `after-screen-slice.md`
- `work-map.md`
- `check.json`


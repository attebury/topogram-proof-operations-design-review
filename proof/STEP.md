# Step 01: React Component System

> Establish a running operations SaaS React app before Topogram is introduced.

Status: current

Audience: designers, front-end leads, and coding agents.

Use when: inspecting the baseline UI and component vocabulary before reading any Topogram records.

## What Changed

- Added a Vite React operations control room app with mock incidents, assignees, shifts, alerts, and status updates.
- Kept the UI component refs intentionally stable: `acme.dataGrid`, `acme.filterRail`, `acme.commandBar`, `acme.alertBanner`, `acme.timeline`, `acme.statusBoard`, and `acme.detailPanel`.
- Added static Storybook-style files as component-system evidence.
- Confirmed there is no `topo/` workspace in this baseline checkpoint.

## Proof

```sh
npm ci
npm run verify
```


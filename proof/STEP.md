# Step 03: Design Language And Component Map

> Add design-language tokens, style intent, stable component refs, and explicit review rows.

Status: current

Audience: designers, front-end leads, and coding agents.

Use when: reviewing how a designer/front-end lead maps the semantic work map to Acme Operations UI components.

## What Changed

- Added `design_language design_operations_product_ui` for platform scope, token mappings, and Acme Operations UI identity.
- Added `component_map component_map_operations_widgets` with widget mappings across web, iOS, and Android.
- Included rendered, contract-only, implementation-owned, unsupported, missing-platform, missing-state, style-ref, token, a11y, and i18n review cases.
- Captured design coverage, realization report, work-map report, and widget slice artifacts.

## Proof

```sh
npm ci
npm run verify
```

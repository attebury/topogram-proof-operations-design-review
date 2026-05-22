# Step 07: Published CLI Refresh

> Refresh the proof artifacts with published `@topogram/cli@0.3.118`.

Status: current

Audience: designers, front-end leads, maintainers, and coding agents.

Use when: confirming the designer packet no longer depends on local Topogram CLI output.

## What Changed

- Updated the proof baseline to `@topogram/cli@0.3.118`.
- Regenerated work-map, design coverage, realization, screen slice, and widget slice artifacts from the published package.
- Kept the previous designer closeout artifacts as the accepted/deferred review record.
- Kept `npm run verify` as the single canonical proof command.

## Proof

```sh
npm ci
npm run verify
```

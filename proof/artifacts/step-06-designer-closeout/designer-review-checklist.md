# Designer Review Checklist

## Accepted

- The report starts with a designer-readable `Designer Review Packet`, not raw `.tg`.
- Screen inventory makes the operations app size and navigation clear.
- Layout and region map explains where UI work belongs.
- Widget binding work leaves show the practical change targets for agents.
- Component map matrix shows stable Acme component refs such as `acme.dataGrid`, `acme.filterRail`, `acme.commandBar`, and `acme.alertBanner`.
- The slice-guided escalation change updated Topogram first and React second.

## Deferred

- Canonical `style_refs` should be reintroduced into this proof after the next CLI patch is published.
- Static HTML work-map explorer remains future work.
- Automated accessibility audits remain outside this proof; current proof carries semantic ARIA obligations and markers only.

## Unsupported Or Review Needed

- Android and iOS component mappings are semantic placeholders, not native generated apps.
- Contract-only narrow-web command and data-grid mappings need implementation review.
- Missing platform and missing state rows are intentionally visible as review work.

## Agent Handoff

Agents should start with:

```sh
topogram query work-map ./topo --format markdown
topogram query slice ./topo --screen intake_queue --surface surface_operations_web_react --detail compact --format markdown
topogram query ui-design-coverage ./topo --surface surface_operations_web_react --format markdown
```


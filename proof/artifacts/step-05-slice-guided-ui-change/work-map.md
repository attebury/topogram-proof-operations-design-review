# Work Map

A readable map of where UI work belongs. This is a report, not a renderer.

## Designer Review Packet

Status: review_needed
Screens: 6
Widget bindings: 15
Component mappings: 15
Review rows: 70

Component coverage:
- rendered: 11
- contract-only: 2
- implementation-owned: 1
- unsupported: 1

Style and obligation coverage:
- style intents: actionable, audit_friendly, brand, chronological, collapsible, configuration, decision_support, drag_ready, executive, focused, non_blocking, noticeable, operational, orienting, persistent, persistent_when_active, prioritized, priority_ordered, queue_focused, readable, scannable, secondary, summary, time_oriented, time_sensitive, workload_balanced
- style refs: (none)
- token mapped rows: 35
- accessibility authored rows: 35
- i18n authored rows: 35

## Executive Summary

Surfaces: 1
Screens: 6
Layouts: 7
Regions: 13
Widgets: 11
Widget bindings: 15
Component maps: 1
Gaps: 70

Highest-priority gaps:
- review: component_mapping_status_review for `widget_command_toolbar` - Realization 'command_toolbar_mobile' is 'contract_only'.
- review: component_mapping_status_review for `widget_data_grid` - Realization 'data_grid_android' is 'unsupported'.
- review: component_mapping_status_review for `widget_data_grid` - Realization 'data_grid_web_narrow' is 'contract_only'.
- review: design_behavior_review_required for `widget_command_toolbar` - Behavior 'bulk_action' is 'contract_only'.
- review: design_behavior_review_required for `widget_command_toolbar` - Behavior 'keyboard_navigation' is 'contract_only'.

## Screen Inventory

| Screen | Surface | Route | Layout | Regions | Widget Bindings |
| --- | --- | --- | --- | --- | --- |
| `operations_dashboard` | `surface_operations_web_react` | / | `layout_dashboard_overview` | header, nav, content, command_bar, results, live_alerts | operations_dashboard_command_bar_widget_command_toolbar: widget_command_toolbar, operations_dashboard_results_widget_kpi_summary_cards: widget_kpi_summary_cards, operations_dashboard_live_alerts_widget_alert_banner: widget_alert_banner |
| `intake_queue` | `surface_operations_web_react` | /intake | `layout_queue_workspace` | header, nav, content, command_bar, filters, results, assignment_hints | intake_queue_command_bar_widget_command_toolbar: widget_command_toolbar, intake_queue_filters_widget_filter_panel: widget_filter_panel, intake_queue_results_widget_data_grid: widget_data_grid, intake_queue_assignment_hints_widget_workload_hint_panel: widget_workload_hint_panel |
| `incident_detail` | `surface_operations_web_react` | /incidents/:incidentId | `layout_incident_detail` | header, nav, content, summary, timeline, command_bar | incident_detail_summary_widget_detail_panel: widget_detail_panel, incident_detail_timeline_widget_activity_timeline: widget_activity_timeline, incident_detail_command_bar_widget_command_toolbar: widget_command_toolbar |
| `assignment_board` | `surface_operations_web_react` | /assignments | `layout_assignment_board` | header, nav, content, command_bar, board | assignment_board_command_bar_widget_command_toolbar: widget_command_toolbar, assignment_board_board_widget_status_board: widget_status_board |
| `schedule` | `surface_operations_web_react` | /schedule | `layout_schedule_calendar` | header, nav, content, command_bar, calendar | schedule_command_bar_widget_command_toolbar: widget_command_toolbar, schedule_calendar_widget_schedule_calendar: widget_schedule_calendar |
| `settings` | `surface_operations_web_react` | /settings | `layout_settings_page` | header, nav, content, summary | settings_summary_widget_settings_panel: widget_settings_panel |

## Layout And Region Map

### Layouts

| Layout | Pattern | Slots | Screens |
| --- | --- | --- | --- |
| `layout_assignment_board` |  | command_bar, board | assignment_board |
| `layout_dashboard_overview` |  | command_bar, results, live_alerts | operations_dashboard |
| `layout_incident_detail` |  | summary, timeline, command_bar | incident_detail |
| `layout_queue_workspace` |  | command_bar, filters, results, assignment_hints | intake_queue |
| `layout_schedule_calendar` |  | command_bar, calendar | schedule |
| `layout_settings_page` |  | summary | settings |
| `layout_standard_app_shell` |  | header, nav, content | operations_dashboard, intake_queue, incident_detail, assignment_board, schedule, settings |

### Regions

| Region | Pattern | Slot Roles | Style Intent | Widget Bindings |
| --- | --- | --- | --- | --- |
| `region_activity_timeline` | activity_feed |  | audit_friendly, chronological, secondary | incident_detail_timeline_widget_activity_timeline: widget_activity_timeline |
| `region_app_header` | app_header |  | brand, operational, persistent |  |
| `region_assignment_board` | board_view |  | drag_ready, scannable, workload_balanced | assignment_board_board_widget_status_board: widget_status_board |
| `region_assignment_hints` | resource_cards |  | decision_support, scannable, workload_balanced | intake_queue_assignment_hints_widget_workload_hint_panel: widget_workload_hint_panel |
| `region_command_bar` | action_bar |  | actionable, priority_ordered, scannable | operations_dashboard_command_bar_widget_command_toolbar: widget_command_toolbar, intake_queue_command_bar_widget_command_toolbar: widget_command_toolbar, incident_detail_command_bar_widget_command_toolbar: widget_command_toolbar, assignment_board_command_bar_widget_command_toolbar: widget_command_toolbar, schedule_command_bar_widget_command_toolbar: widget_command_toolbar |
| `region_dashboard_summary` | summary_stats |  | executive, scannable, summary | operations_dashboard_results_widget_kpi_summary_cards: widget_kpi_summary_cards |
| `region_detail_summary` | detail_panel |  | decision_support, focused, readable | incident_detail_summary_widget_detail_panel: widget_detail_panel |
| `region_filter_panel` | filter_panel |  | collapsible, persistent_when_active, scannable | intake_queue_filters_widget_filter_panel: widget_filter_panel |
| `region_global_navigation` | primary_navigation |  | orienting, persistent, scannable |  |
| `region_live_alerts` | activity_feed |  | non_blocking, noticeable, time_sensitive | operations_dashboard_live_alerts_widget_alert_banner: widget_alert_banner |
| `region_schedule_calendar` | calendar_view |  | scannable, time_oriented | schedule_calendar_widget_schedule_calendar: widget_schedule_calendar |
| `region_settings_panel` | settings_section |  | configuration, readable | settings_summary_widget_settings_panel: widget_settings_panel |
| `region_work_queue` | data_grid_view |  | actionable, prioritized, queue_focused | intake_queue_results_widget_data_grid: widget_data_grid, intake_queue_results_widget_data_grid: widget_data_grid |

## Widget Binding Work Leaves

| Binding | Screen | Region | Widget | Data Sources | Actions | Style Intent |
| --- | --- | --- | --- | --- | --- | --- |
| `operations_dashboard_command_bar_widget_command_toolbar` | `operations_dashboard` | `region_command_bar` | `widget_command_toolbar` | actions:capability:cap_acknowledge_alert | primary_action:action:cap_acknowledge_alert | actionable, scannable, priority_ordered |
| `operations_dashboard_results_widget_kpi_summary_cards` | `operations_dashboard` | `region_dashboard_summary` | `widget_kpi_summary_cards` | items:capability:cap_list_intake_items | card_select:navigate:intake_queue | summary, scannable, executive |
| `operations_dashboard_live_alerts_widget_alert_banner` | `operations_dashboard` | `region_live_alerts` | `widget_alert_banner` | alerts:capability:cap_acknowledge_alert | alert_select:navigate:incident_detail | time_sensitive, noticeable, non_blocking |
| `intake_queue_command_bar_widget_command_toolbar` | `intake_queue` | `region_command_bar` | `widget_command_toolbar` | actions:capability:cap_bulk_assign_incidents | primary_action:action:cap_bulk_assign_incidents, escalation:action:cap_escalate_priority_alert | actionable, scannable, priority_ordered |
| `intake_queue_filters_widget_filter_panel` | `intake_queue` | `region_filter_panel` | `widget_filter_panel` | filters:capability:cap_list_intake_items | filter_change:action:cap_list_intake_items | collapsible, scannable, persistent_when_active |
| `intake_queue_results_widget_data_grid` | `intake_queue` | `region_work_queue` | `widget_data_grid` | rows:capability:cap_list_intake_items | row_select:navigate:incident_detail | prioritized, actionable, queue_focused |
| `intake_queue_assignment_hints_widget_workload_hint_panel` | `intake_queue` | `region_assignment_hints` | `widget_workload_hint_panel` | hints:capability:cap_view_reviewer_workload_hints | assign:action:cap_bulk_assign_incidents | decision_support, workload_balanced, scannable |
| `incident_detail_summary_widget_detail_panel` | `incident_detail` | `region_detail_summary` | `widget_detail_panel` | item:capability:cap_view_incident_detail | edit_requested:action:cap_change_incident_status | focused, readable, decision_support |
| `incident_detail_timeline_widget_activity_timeline` | `incident_detail` | `region_activity_timeline` | `widget_activity_timeline` | timeline_items:capability:cap_view_incident_detail |  | chronological, secondary, audit_friendly |
| `incident_detail_command_bar_widget_command_toolbar` | `incident_detail` | `region_command_bar` | `widget_command_toolbar` | actions:capability:cap_change_incident_status | primary_action:action:cap_change_incident_status | actionable, scannable, priority_ordered |
| `assignment_board_command_bar_widget_command_toolbar` | `assignment_board` | `region_command_bar` | `widget_command_toolbar` | actions:capability:cap_bulk_assign_incidents | primary_action:action:cap_bulk_assign_incidents | actionable, scannable, priority_ordered |
| `assignment_board_board_widget_status_board` | `assignment_board` | `region_assignment_board` | `widget_status_board` | columns:capability:cap_view_assignment_board | item_select:navigate:incident_detail | workload_balanced, scannable, drag_ready |
| `schedule_command_bar_widget_command_toolbar` | `schedule` | `region_command_bar` | `widget_command_toolbar` | actions:capability:cap_view_schedule | primary_action:action:cap_view_schedule | actionable, scannable, priority_ordered |
| `schedule_calendar_widget_schedule_calendar` | `schedule` | `region_schedule_calendar` | `widget_schedule_calendar` | items:capability:cap_view_schedule | item_select:action:cap_view_schedule | time_oriented, scannable |
| `settings_summary_widget_settings_panel` | `settings` | `region_settings_panel` | `widget_settings_panel` | value:capability:cap_list_intake_items | submit:action:cap_change_incident_status | configuration, readable |

## Widgets

| Widget | Patterns | Bindings | Component Refs | Style Intent |
| --- | --- | --- | --- | --- |
| `widget_activity_timeline` | activity_feed | incident_detail_timeline_widget_activity_timeline@incident_detail | acme.timeline:rendered | audit_friendly, chronological, secondary |
| `widget_alert_banner` | activity_feed | operations_dashboard_live_alerts_widget_alert_banner@operations_dashboard | acme.alertBanner:rendered | non_blocking, noticeable, time_sensitive |
| `widget_command_toolbar` | action_bar | operations_dashboard_command_bar_widget_command_toolbar@operations_dashboard, intake_queue_command_bar_widget_command_toolbar@intake_queue, incident_detail_command_bar_widget_command_toolbar@incident_detail, assignment_board_command_bar_widget_command_toolbar@assignment_board, schedule_command_bar_widget_command_toolbar@schedule | acme.mobileCommandBar:contract_only, acme.commandBar:rendered | actionable, priority_ordered, scannable |
| `widget_data_grid` | data_grid_view | intake_queue_results_widget_data_grid@intake_queue | acme.android.incidentRecycler:unsupported, acme.ios.incidentList:implementation_owned, acme.cardList:contract_only, acme.dataGrid:rendered | actionable, prioritized, queue_focused |
| `widget_detail_panel` | detail_panel | incident_detail_summary_widget_detail_panel@incident_detail | acme.detailPanel:rendered | decision_support, focused, readable |
| `widget_filter_panel` | filter_panel | intake_queue_filters_widget_filter_panel@intake_queue | acme.filterRail:rendered | collapsible, persistent_when_active, scannable |
| `widget_kpi_summary_cards` | summary_stats | operations_dashboard_results_widget_kpi_summary_cards@operations_dashboard | acme.kpiCards:rendered | executive, scannable, summary |
| `widget_schedule_calendar` | calendar_view | schedule_calendar_widget_schedule_calendar@schedule | acme.scheduleCalendar:rendered | scannable, time_oriented |
| `widget_settings_panel` | settings_section | settings_summary_widget_settings_panel@settings | acme.settingsPanel:rendered | configuration, readable |
| `widget_status_board` | board_view | assignment_board_board_widget_status_board@assignment_board | acme.statusBoard:rendered | drag_ready, scannable, workload_balanced |
| `widget_workload_hint_panel` | resource_cards | intake_queue_assignment_hints_widget_workload_hint_panel@intake_queue | acme.workloadHints:rendered | decision_support, scannable, workload_balanced |

## Component Map Matrix Summary

| Component Map | Design Language | Platforms | Component Refs | Mappings |
| --- | --- | --- | --- | --- |
| `component_map_operations_widgets` | `design_operations_product_ui` | android, ios, web | acme.alertBanner, acme.android.incidentRecycler, acme.cardList, acme.commandBar, acme.dataGrid, acme.detailPanel, acme.filterRail, acme.ios.incidentList, acme.kpiCards, acme.mobileCommandBar, acme.scheduleCalendar, acme.settingsPanel, acme.statusBoard, acme.timeline, acme.workloadHints | widget_activity_timeline/web/rendered, widget_alert_banner/web/rendered, widget_command_toolbar/web/contract_only, widget_command_toolbar/web/rendered, widget_data_grid/android/unsupported, widget_data_grid/ios/implementation_owned, widget_data_grid/web/contract_only, widget_data_grid/web/rendered, widget_detail_panel/web/rendered, widget_filter_panel/web/rendered, widget_kpi_summary_cards/web/rendered, widget_schedule_calendar/web/rendered, widget_settings_panel/web/rendered, widget_status_board/web/rendered, widget_workload_hint_panel/web/rendered |

## Style, Token, A11y, And I18n Gaps

| Severity | Code | Widget | Platform | Message |
| --- | --- | --- | --- | --- |
| review | component_mapping_status_review | widget_command_toolbar | web | Realization 'command_toolbar_mobile' is 'contract_only'. |
| review | component_mapping_status_review | widget_data_grid | android | Realization 'data_grid_android' is 'unsupported'. |
| review | component_mapping_status_review | widget_data_grid | web | Realization 'data_grid_web_narrow' is 'contract_only'. |
| review | design_behavior_review_required | widget_command_toolbar | web | Behavior 'bulk_action' is 'contract_only'. |
| review | design_behavior_review_required | widget_command_toolbar | web | Behavior 'keyboard_navigation' is 'contract_only'. |
| review | design_behavior_review_required | widget_command_toolbar | web | Behavior 'keyboard_navigation' is 'contract_only'. |
| review | design_behavior_review_required | widget_data_grid | android | Behavior 'filtering' is 'unsupported'. |
| review | design_behavior_review_required | widget_data_grid | android | Behavior 'keyboard_navigation' is 'unsupported'. |
| review | design_behavior_review_required | widget_data_grid | android | Behavior 'selection' is 'unsupported'. |
| review | design_behavior_review_required | widget_data_grid | android | Behavior 'sorting' is 'unsupported'. |
| review | design_behavior_review_required | widget_data_grid | web | Behavior 'filtering' is 'contract_only'. |
| review | design_behavior_review_required | widget_data_grid | web | Behavior 'sorting' is 'contract_only'. |
| review | design_behavior_review_required | widget_data_grid | web | Behavior 'keyboard_navigation' is 'contract_only'. |
| review | design_behavior_review_required | widget_data_grid | web | Behavior 'sorting' is 'contract_only'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'bulk_action' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'bulk_action' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'bulk_action' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'bulk_action' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'bulk_action' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_data_grid | web | Widget 'widget_data_grid' behavior 'sorting' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_data_grid | web | Widget 'widget_data_grid' behavior 'keyboard_navigation' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_data_grid | web | Widget 'widget_data_grid' behavior 'filtering' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_behavior_review_required | widget_data_grid | web | Widget 'widget_data_grid' behavior 'sorting' is 'contract_only' for 'surface_operations_web_react'. |
| review | design_coverage_widget_unmapped | widget_activity_timeline | web | Widget 'widget_activity_timeline' on 'surface_operations_web_react' has no component mapping. |
| review | design_coverage_widget_unmapped | widget_detail_panel | web | Widget 'widget_detail_panel' on 'surface_operations_web_react' has no component mapping. |
| review | design_missing_platform | widget_activity_timeline | android | Widget 'widget_activity_timeline' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_activity_timeline | ios | Widget 'widget_activity_timeline' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_alert_banner | android | Widget 'widget_alert_banner' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_alert_banner | ios | Widget 'widget_alert_banner' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_command_toolbar | android | Widget 'widget_command_toolbar' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_command_toolbar | ios | Widget 'widget_command_toolbar' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_detail_panel | android | Widget 'widget_detail_panel' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_detail_panel | ios | Widget 'widget_detail_panel' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_filter_panel | android | Widget 'widget_filter_panel' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_filter_panel | ios | Widget 'widget_filter_panel' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_kpi_summary_cards | android | Widget 'widget_kpi_summary_cards' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_kpi_summary_cards | ios | Widget 'widget_kpi_summary_cards' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_schedule_calendar | android | Widget 'widget_schedule_calendar' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_schedule_calendar | ios | Widget 'widget_schedule_calendar' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_settings_panel | android | Widget 'widget_settings_panel' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_settings_panel | ios | Widget 'widget_settings_panel' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_status_board | android | Widget 'widget_status_board' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_status_board | ios | Widget 'widget_status_board' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_workload_hint_panel | android | Widget 'widget_workload_hint_panel' has no android design realization in 'design_operations_product_ui'. |
| review | design_missing_platform | widget_workload_hint_panel | ios | Widget 'widget_workload_hint_panel' has no ios design realization in 'design_operations_product_ui'. |
| review | design_missing_state | widget_alert_banner | web | Realization 'alert_banner_web' does not declare 'loading' state coverage. |
| review | design_missing_state | widget_alert_banner | web | Realization 'alert_banner_web' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_alert_banner | web | Realization 'alert_banner_web' does not declare 'error' state coverage. |
| review | design_missing_state | widget_command_toolbar | web | Realization 'command_toolbar_mobile' does not declare 'loading' state coverage. |
| review | design_missing_state | widget_command_toolbar | web | Realization 'command_toolbar_mobile' does not declare 'error' state coverage. |
| review | design_missing_state | widget_command_toolbar | web | Realization 'command_toolbar_web' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_data_grid | android | Realization 'data_grid_android' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_data_grid | android | Realization 'data_grid_android' does not declare 'error' state coverage. |
| review | design_missing_state | widget_data_grid | ios | Realization 'data_grid_ios' does not declare 'error' state coverage. |
| review | design_missing_state | widget_data_grid | web | Realization 'data_grid_web_narrow' does not declare 'loading' state coverage. |
| review | design_missing_state | widget_data_grid | web | Realization 'data_grid_web_narrow' does not declare 'error' state coverage. |
| review | design_missing_state | widget_detail_panel | web | Realization 'detail_panel_web' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_schedule_calendar | web | Realization 'schedule_calendar_web' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_schedule_calendar | web | Realization 'schedule_calendar_web' does not declare 'error' state coverage. |
| review | design_missing_state | widget_status_board | web | Realization 'status_board_web' does not declare 'error' state coverage. |

## Accepted, Deferred, And Unsupported Review Rows

| Type | Count |
| --- | --- |
| contract_only | 28 |
| unsupported | 5 |
| diagnostic | 2 |
| design_missing_platform | 20 |
| missing_state | 15 |

## Agent Handoff Commands

- `topogram query work-map ./topo --format markdown`
- `topogram query work-map ./topo --json`
- `topogram query slice ./topo --detail compact --format markdown`
- `topogram query ui-design-coverage ./topo --format markdown`
- `topogram emit ui-realization-report ./topo --json`
- `topogram emit work-map-report ./topo --format markdown --write --out-dir ./artifacts`

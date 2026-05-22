# UI Design Coverage

Surfaces: 1
Design matrix rows: 35
Review rows: 49

## Design Matrix

| Widget | Platform | Viewport | Density | Component | Status | Style | Style Refs | States | Review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| widget_activity_timeline | android | any | unspecified | (missing) | missing_platform | chronological, secondary, audit_friendly | (none) | (none) | review_required |
| widget_activity_timeline | ios | any | unspecified | (missing) | missing_platform | chronological, secondary, audit_friendly | (none) | (none) | review_required |
| widget_activity_timeline | web | wide | compact | acme.timeline | rendered | chronological, secondary, audit_friendly | (none) | loading, empty, error | mapped |
| widget_alert_banner | android | any | unspecified | (missing) | missing_platform | time_sensitive, noticeable, non_blocking | (none) | (none) | review_required |
| widget_alert_banner | ios | any | unspecified | (missing) | missing_platform | time_sensitive, noticeable, non_blocking | (none) | (none) | review_required |
| widget_alert_banner | web | wide | compact | acme.alertBanner | rendered | time_sensitive, noticeable, non_blocking | (none) | success | review_required |
| widget_command_toolbar | android | any | unspecified | (missing) | missing_platform | actionable, scannable, priority_ordered | (none) | (none) | review_required |
| widget_command_toolbar | ios | any | unspecified | (missing) | missing_platform | actionable, scannable, priority_ordered | (none) | (none) | review_required |
| widget_command_toolbar | web | narrow | comfortable | acme.mobileCommandBar | contract_only | actionable, scannable, priority_ordered | (none) | empty | review_required |
| widget_command_toolbar | web | wide | compact | acme.commandBar | rendered | actionable, scannable, priority_ordered | (none) | loading, error | review_required |
| widget_data_grid | android | any | comfortable | acme.android.incidentRecycler | unsupported | prioritized, actionable, queue_focused | (none) | loading | review_required |
| widget_data_grid | ios | any | comfortable | acme.ios.incidentList | implementation_owned | prioritized, actionable, queue_focused | (none) | loading, empty | review_required |
| widget_data_grid | web | narrow | comfortable | acme.cardList | contract_only | prioritized, actionable, queue_focused | (none) | empty | review_required |
| widget_data_grid | web | wide | compact | acme.dataGrid | rendered | prioritized, actionable, queue_focused | (none) | loading, empty, error | review_required |
| widget_detail_panel | android | any | unspecified | (missing) | missing_platform | focused, readable, decision_support | (none) | (none) | review_required |
| widget_detail_panel | ios | any | unspecified | (missing) | missing_platform | focused, readable, decision_support | (none) | (none) | review_required |
| widget_detail_panel | web | wide | compact | acme.detailPanel | rendered | focused, readable, decision_support | (none) | loading, error | review_required |
| widget_filter_panel | android | any | unspecified | (missing) | missing_platform | collapsible, scannable, persistent_when_active | (none) | (none) | review_required |
| widget_filter_panel | ios | any | unspecified | (missing) | missing_platform | collapsible, scannable, persistent_when_active | (none) | (none) | review_required |
| widget_filter_panel | web | wide | compact | acme.filterRail | rendered | collapsible, scannable, persistent_when_active | (none) | loading, empty, error | mapped |
| widget_kpi_summary_cards | android | any | unspecified | (missing) | missing_platform | summary, scannable, executive | (none) | (none) | review_required |
| widget_kpi_summary_cards | ios | any | unspecified | (missing) | missing_platform | summary, scannable, executive | (none) | (none) | review_required |
| widget_kpi_summary_cards | web | wide | compact | acme.kpiCards | rendered | summary, scannable, executive | (none) | loading, empty, error | mapped |
| widget_schedule_calendar | android | any | unspecified | (missing) | missing_platform | time_oriented, scannable | (none) | (none) | review_required |
| widget_schedule_calendar | ios | any | unspecified | (missing) | missing_platform | time_oriented, scannable | (none) | (none) | review_required |
| widget_schedule_calendar | web | wide | comfortable | acme.scheduleCalendar | rendered | time_oriented, scannable | (none) | loading | review_required |
| widget_settings_panel | android | any | unspecified | (missing) | missing_platform | configuration, readable | (none) | (none) | review_required |
| widget_settings_panel | ios | any | unspecified | (missing) | missing_platform | configuration, readable | (none) | (none) | review_required |
| widget_settings_panel | web | wide | comfortable | acme.settingsPanel | rendered | configuration, readable | (none) | loading, empty, error | mapped |
| widget_status_board | android | any | unspecified | (missing) | missing_platform | workload_balanced, scannable, drag_ready | (none) | (none) | review_required |
| widget_status_board | ios | any | unspecified | (missing) | missing_platform | workload_balanced, scannable, drag_ready | (none) | (none) | review_required |
| widget_status_board | web | wide | compact | acme.statusBoard | rendered | workload_balanced, scannable, drag_ready | (none) | loading, empty | review_required |
| widget_workload_hint_panel | android | any | unspecified | (missing) | missing_platform | decision_support, workload_balanced, scannable | (none) | (none) | review_required |
| widget_workload_hint_panel | ios | any | unspecified | (missing) | missing_platform | decision_support, workload_balanced, scannable | (none) | (none) | review_required |
| widget_workload_hint_panel | web | wide | compact | acme.workloadHints | rendered | decision_support, workload_balanced, scannable | (none) | loading, empty, error | mapped |

## Review Work

| Code | Widget | Platform | Component | Message |
| --- | --- | --- | --- | --- |
| design_missing_platform | widget_activity_timeline | android | (missing) | Widget 'widget_activity_timeline' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_activity_timeline | ios | (missing) | Widget 'widget_activity_timeline' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_alert_banner | android | (missing) | Widget 'widget_alert_banner' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_alert_banner | ios | (missing) | Widget 'widget_alert_banner' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_state | widget_alert_banner | web | acme.alertBanner | Realization 'alert_banner_web' does not declare 'loading' state coverage. |
| design_missing_state | widget_alert_banner | web | acme.alertBanner | Realization 'alert_banner_web' does not declare 'empty' state coverage. |
| design_missing_state | widget_alert_banner | web | acme.alertBanner | Realization 'alert_banner_web' does not declare 'error' state coverage. |
| design_missing_platform | widget_command_toolbar | android | (missing) | Widget 'widget_command_toolbar' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_command_toolbar | ios | (missing) | Widget 'widget_command_toolbar' has no ios design realization in 'design_operations_product_ui'. |
| component_mapping_status_review | widget_command_toolbar | web | acme.mobileCommandBar | Realization 'command_toolbar_mobile' is 'contract_only'. |
| design_behavior_review_required | widget_command_toolbar | web | acme.mobileCommandBar | Behavior 'bulk_action' is 'contract_only'. |
| design_behavior_review_required | widget_command_toolbar | web | acme.mobileCommandBar | Behavior 'keyboard_navigation' is 'contract_only'. |
| design_behavior_review_required | widget_command_toolbar | web | acme.commandBar | Behavior 'keyboard_navigation' is 'contract_only'. |
| design_missing_state | widget_command_toolbar | web | acme.mobileCommandBar | Realization 'command_toolbar_mobile' does not declare 'loading' state coverage. |
| design_missing_state | widget_command_toolbar | web | acme.mobileCommandBar | Realization 'command_toolbar_mobile' does not declare 'error' state coverage. |
| design_missing_state | widget_command_toolbar | web | acme.commandBar | Realization 'command_toolbar_web' does not declare 'empty' state coverage. |
| component_mapping_status_review | widget_data_grid | android | acme.android.incidentRecycler | Realization 'data_grid_android' is 'unsupported'. |
| design_behavior_review_required | widget_data_grid | android | acme.android.incidentRecycler | Behavior 'filtering' is 'unsupported'. |
| design_behavior_review_required | widget_data_grid | android | acme.android.incidentRecycler | Behavior 'keyboard_navigation' is 'unsupported'. |
| design_behavior_review_required | widget_data_grid | android | acme.android.incidentRecycler | Behavior 'selection' is 'unsupported'. |
| design_behavior_review_required | widget_data_grid | android | acme.android.incidentRecycler | Behavior 'sorting' is 'unsupported'. |
| design_missing_state | widget_data_grid | android | acme.android.incidentRecycler | Realization 'data_grid_android' does not declare 'empty' state coverage. |
| design_missing_state | widget_data_grid | android | acme.android.incidentRecycler | Realization 'data_grid_android' does not declare 'error' state coverage. |
| design_missing_state | widget_data_grid | ios | acme.ios.incidentList | Realization 'data_grid_ios' does not declare 'error' state coverage. |
| component_mapping_status_review | widget_data_grid | web | acme.cardList | Realization 'data_grid_web_narrow' is 'contract_only'. |
| design_behavior_review_required | widget_data_grid | web | acme.cardList | Behavior 'filtering' is 'contract_only'. |
| design_behavior_review_required | widget_data_grid | web | acme.cardList | Behavior 'sorting' is 'contract_only'. |
| design_behavior_review_required | widget_data_grid | web | acme.dataGrid | Behavior 'keyboard_navigation' is 'contract_only'. |
| design_behavior_review_required | widget_data_grid | web | acme.dataGrid | Behavior 'sorting' is 'contract_only'. |
| design_missing_state | widget_data_grid | web | acme.cardList | Realization 'data_grid_web_narrow' does not declare 'loading' state coverage. |
| design_missing_state | widget_data_grid | web | acme.cardList | Realization 'data_grid_web_narrow' does not declare 'error' state coverage. |
| design_missing_platform | widget_detail_panel | android | (missing) | Widget 'widget_detail_panel' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_detail_panel | ios | (missing) | Widget 'widget_detail_panel' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_state | widget_detail_panel | web | acme.detailPanel | Realization 'detail_panel_web' does not declare 'empty' state coverage. |
| design_missing_platform | widget_filter_panel | android | (missing) | Widget 'widget_filter_panel' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_filter_panel | ios | (missing) | Widget 'widget_filter_panel' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_kpi_summary_cards | android | (missing) | Widget 'widget_kpi_summary_cards' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_kpi_summary_cards | ios | (missing) | Widget 'widget_kpi_summary_cards' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_schedule_calendar | android | (missing) | Widget 'widget_schedule_calendar' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_schedule_calendar | ios | (missing) | Widget 'widget_schedule_calendar' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_state | widget_schedule_calendar | web | acme.scheduleCalendar | Realization 'schedule_calendar_web' does not declare 'empty' state coverage. |
| design_missing_state | widget_schedule_calendar | web | acme.scheduleCalendar | Realization 'schedule_calendar_web' does not declare 'error' state coverage. |
| design_missing_platform | widget_settings_panel | android | (missing) | Widget 'widget_settings_panel' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_settings_panel | ios | (missing) | Widget 'widget_settings_panel' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_status_board | android | (missing) | Widget 'widget_status_board' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_status_board | ios | (missing) | Widget 'widget_status_board' has no ios design realization in 'design_operations_product_ui'. |
| design_missing_state | widget_status_board | web | acme.statusBoard | Realization 'status_board_web' does not declare 'error' state coverage. |
| design_missing_platform | widget_workload_hint_panel | android | (missing) | Widget 'widget_workload_hint_panel' has no android design realization in 'design_operations_product_ui'. |
| design_missing_platform | widget_workload_hint_panel | ios | (missing) | Widget 'widget_workload_hint_panel' has no ios design realization in 'design_operations_product_ui'. |

## Next Commands

- `topogram query ui-design-coverage ./topo --json`
- `topogram widget check ./topo --json`

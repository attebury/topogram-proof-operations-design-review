export default {
  title: "Acme Operations UI/DataGrid",
  parameters: {
    topogram: {
      widget: "widget_data_grid",
      designContract: "design_operations_product_ui",
      realizationSet: "component_map_operations_widgets",
      componentRef: "acme.dataGrid",
      platform: "web",
      viewport: "wide",
      pattern: "data_grid_view",
      status: "rendered",
      density: "compact",
      stateCoverage: ["loading", "empty", "error"],
      styleRefs: ["acme.dataGrid.compact", "acme.focus.visibleRing"]
    }
  }
};

export const Default = {};


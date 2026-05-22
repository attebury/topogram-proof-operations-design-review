export default {
  title: "Acme Operations UI/CommandBar",
  parameters: {
    topogram: {
      widget: "widget_command_toolbar",
      designContract: "design_operations_product_ui",
      realizationSet: "component_map_operations_widgets",
      componentRef: "acme.commandBar",
      platform: "web",
      viewport: "wide",
      pattern: "action_bar",
      status: "contract_only",
      density: "compact",
      behaviorsContractOnly: ["bulk_action"]
    }
  }
};

export const Default = {};


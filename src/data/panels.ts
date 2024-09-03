import {
  desktopIcon,
  exportIcon,
  jsonIcon,
  layerIcon,
  mobileIcon,
  styleIcon,
  traitIcon,
} from "./icons";

export const panels = [
  { id: "panel-top", el: "#top-panel" },
  {
    id: "basic-actions",
    el: "#panel-basic-actions",
    buttons: [
      {
        id: "export",
        className: "btn-open-export",
        label: exportIcon,
        command: "export-template",
        context: "export-template", // For grouping context of buttons from the same panel
      },
      {
        id: "show-json",
        className: "btn-show-json",
        label: jsonIcon,
        context: "show-json",
        command: "show-template-json",
      },
    ],
  },
  {
    id: "layers",
    el: "#right-panel",
    resizable: {
      maxDim: 350,
      minDim: 200,
      tc: false,
      cl: true,
      cr: false,
      bc: false,
      keyWidth: "flex-basis",
    },
  },
  {
    id: "panel-switcher",
    el: "#panel-switcher",
    buttons: [
      {
        id: "show-layers",
        active: true,
        label: layerIcon,
        command: "show-layers",
        togglable: false,
      },
      {
        id: "show-style",
        active: true,
        label: styleIcon,
        command: "show-styles",
        togglable: false,
      },
      {
        id: "show-traits",
        active: true,
        label: traitIcon,
        command: "show-traits",
        togglable: false,
      },
      {
        id: "open-blocks",
        active: true,
        label: traitIcon,
        command: "open-blocks",
        togglable: false,
      },
    ],
  },

  {
    id: "panel-devices",
    el: "#panel-devices",
    buttons: [
      {
        id: "device-desktop",
        label: desktopIcon,
        command: "set-device-desktop",
        active: true,
        togglable: false,
      },
      {
        id: "device-mobile",
        label: mobileIcon,
        command: "set-device-mobile",
        togglable: false,
      },
    ],
  },
];

import { Editor } from "grapesjs";

export const addPanels = ({ editor }: { editor: Editor }) => {
  editor.Panels.addPanel({
    id: "panel-top",
    el: "#top-panel",
    buttons: [
      {
        id: "delete",
        label: "Trash",
        command: "delete-selected",
        attributes: { title: "Delete selected component" },
      },
    ],
  });
};

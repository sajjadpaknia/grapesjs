import { Editor } from "grapesjs";
import { panels } from "../../data";

export const addPanels = ({ editor }: { editor: Editor }) => {
  panels.forEach((panel) => editor.Panels.addPanel(panel));
};

import grapesjs, { Editor } from "grapesjs";
import { addCommands, addPanels } from "../utils";

interface IProps {
  container: HTMLElement;
}

export const grapesJSConfig = ({ container }: IProps): Editor => {
  const editor: Editor = grapesjs.init({
    container,
    fromElement: true,
    height: "calc(100vh - 40px)",
    width: "100%",
    panels: {
      defaults: [],
    },
    storageManager: false,
    // plugins: [blocksBasic, gjsForms],
    // pluginsOpts: {
    //   [blocksBasic]: {},
    //   [gjsForms]: {},
    // },
  });

  addPanels({ editor: editor });
  addCommands({ editor: editor });

  return editor;
};

import grapesjs, { Editor } from "grapesjs";
import { addCommands, addPanels } from "../utils";
import blocksBasic from "grapesjs-blocks-basic";
import gjsForms from "grapesjs-plugin-forms";

interface IProps {
  container: HTMLElement;
}

export const grapesJSConfig = ({ container }: IProps) => {
  const editor: Editor = grapesjs.init({
    container,
    fromElement: true,
    height: "calc(100vh - 40px)",
    width: "auto",
    layerManager: {
      appendTo: "#layers-container",
    },
    selectorManager: {
      appendTo: "#styles-container",
    },
    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "", // default size
        },
        {
          name: "Mobile",
          width: "320px", // this value will be used on canvas width
          widthMedia: "480px", // this value will be used in CSS @media
        },
      ],
    },
    styleManager: {
      appendTo: "#styles-container",
      sectors: [
        {
          name: "Dimension",
          open: false,
          // Use built-in properties
          buildProps: ["width", "min-height", "padding"],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: "integer",
              name: "The width", // Label for the property
              property: "width", // CSS property (if buildProps contains it will be extended)
              units: ["px", "%"], // Units, available only for 'integer' types
              defaults: "auto", // Default value
              min: 0, // Min value, available only for 'integer' types
            },
          ],
        },
        {
          name: "Extra",
          open: false,
          buildProps: ["background-color", "box-shadow", "custom-prop"],
          properties: [
            {
              id: "custom-prop",
              name: "Custom Label",
              property: "font-size",
              type: "select",
              defaults: "32px",
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { id: "0", value: "12px", name: "Tiny" },
                { id: "1", value: "18px", name: "Medium" },
                { id: "2", value: "32px", name: "Big" },
              ],
            },
          ],
        },
      ],
    },
    panels: {
      defaults: [],
    },
    storageManager: {
      type: "local", // Type of the storage, available: 'local' | 'remote'
      autosave: true, // Store data automatically
      autoload: true, // Autoload stored data on init
      stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      options: {
        local: {
          // Options for the `local` type
          key: "gjsProject", // The key for the local storage
        },
      },
    },
    plugins: [blocksBasic, gjsForms],
    pluginsOpts: {
      "gjs-blocks-basic": {},
      "grapesjs-plugin-forms": {},
    },
  });

  addPanels({ editor: editor });
  addCommands({ editor: editor });
  console.log(editor.Commands.getAll());
};

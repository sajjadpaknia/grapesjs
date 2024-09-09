import grapesjs, { Editor, Sectors, StyleManagerConfig } from "grapesjs";
import { addCommands, addPanels } from "../utils";
import blocksBasic from "grapesjs-blocks-basic";
import gjsForms from "grapesjs-plugin-forms";
import presetWebPage from "grapesjs-preset-webpage";

interface IProps {
  container: HTMLElement;
}

export const grapesJSConfig = ({ container }: IProps) => {
  const editor: Editor = grapesjs.init({
    container,
    fromElement: true,
    height: "calc(100vh - 40px)",
    width: "auto",
    // layerManager: {
    //   appendTo: "#layers-container",
    // },
    // selectorManager: {
    //   appendTo: "#styles-container",
    // },
    // deviceManager: {
    //   devices: [
    //     {
    //       name: "Desktop",
    //       width: "", // default size
    //     },
    //     {
    //       name: "Mobile",
    //       width: "320px", // this value will be used on canvas width
    //       widthMedia: "480px", // this value will be used in CSS @media
    //     },
    //   ],
    // },
    // styleManager: {
    //   appendTo: "#styles-container",
    //   sectors: [
    //     {
    //       name: "Dimension",
    //       open: false,
    //       // Use built-in properties
    //       buildProps: ["width", "min-height", "padding"],
    //       // Use `properties` to define/override single property
    //       properties: [
    //         {
    //           // Type of the input,
    //           // options: integer | radio | select | color | slider | file | composite | stack
    //           type: "integer",
    //           name: "The width", // Label for the property
    //           property: "width", // CSS property (if buildProps contains it will be extended)
    //           units: ["px", "%"], // Units, available only for 'integer' types
    //           defaults: "auto", // Default value
    //           min: 0, // Min value, available only for 'integer' types
    //         },
    //       ],
    //     },
    //     {
    //       name: "Extra",
    //       open: false,
    //       buildProps: ["background-color", "box-shadow", "custom-prop"],
    //       properties: [
    //         {
    //           id: "custom-prop",
    //           name: "Custom Label",
    //           property: "font-size",
    //           type: "select",
    //           defaults: "32px",
    //           // List of options, available only for 'select' and 'radio'  types
    //           options: [
    //             { id: "0", value: "12px", name: "Tiny" },
    //             { id: "1", value: "18px", name: "Medium" },
    //             { id: "2", value: "32px", name: "Big" },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // panels: {
    //   defaults: [],
    // },

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
    plugins: [blocksBasic, gjsForms, presetWebPage],
    pluginsOpts: {
      "gjs-blocks-basic": {},
      "grapesjs-plugin-forms": {},
      "grapesjs-preset-webpage": {},
    },
  });

  // addPanels({ editor: editor });
  // addCommands({ editor: editor });

  editor.StyleManager.addSector(
    "animation",
    {
      name: "Animation",
      open: false,
      properties: [
        {
          id: "animation-type",
          name: "Type",
          type: "select",
          full: true,
          options: [
            {
              id: "none",
              label: "none",
            },
            {
              id: "loop",
              label: "loop",
            },
            {
              id: "ease",
              label: "ease",
            },
            {
              id: "linear",
              label: "linear",
            },

            {
              id: "opacity",
              label: "opacity",
            },
          ],
          onChange(data) {
            if (!data.value) return;
            console.log(data.value);

            const selectedComponent = editor.getSelected();
            if (!selectedComponent) return;
            // selectedComponent.setStyle({
            //   color: "red", // Example: Set text color to red
            //   "font-size": "20px", // Example: Set font size to 20px
            //   "background-color": "blue", // Example: Set background color to blue
            //   animation: "fadein 3s infinite",
            // });
            const el = selectedComponent.getEl();
            if (!el) return;

            // Add custom animation using JS
            el.style.transition = "opacity .5s ease-in-out";

            const interval = setInterval(() => {
              el.style.opacity = "0"; // Start fading out
              setTimeout(() => {
                el.style.opacity = "1"; // Fade back in
              }, 2000); // Wait for the fade-out to complete before starting fade-in
            }, 4000); // 2 seconds fade-out + 2 seconds fade-in = 4 seconds total cycle
            if (data.value === "none") {
              clearInterval(interval);
            }
          },
        },
      ],
    },
    { at: 0 }
  );
  // editor.on("component:selected", (model) => {
  //   // model.setAttributes({ style: "animation: fadein 2s linear infinite;" })
  //   const selectedComponent = editor.getSelected();

  //   if (selectedComponent) {
  //     selectedComponent.setStyle({
  //       color: "red", // Example: Set text color to red
  //       "font-size": "20px", // Example: Set font size to 20px
  //       "background-color": "blue", // Example: Set background color to blue
  //     });
  //   }
  // });
  const foo = editor.StyleManager.getProperty("animation", "animation-type");
  console.log(foo);
};

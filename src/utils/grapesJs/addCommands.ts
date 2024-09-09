import { Editor } from "grapesjs";

export const addCommands = ({ editor }: { editor: Editor }) => {
  editor.Commands.add("delete-selected", {
    run(editor) {
      const selected = editor.getSelected();
      if (selected) {
        selected.remove();
      }
    },
  });
  editor.Commands.add("show-layers", {
    getRowEl(editor) {
      return editor.getContainer().closest("#editor-row");
    },
    getLayersEl(row) {
      return row.querySelector("#layers-container");
    },

    run(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "";
    },
    stop(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "none";
    },
  });
  editor.Commands.add("show-styles", {
    getRowEl(editor) {
      return editor.getContainer().closest("#editor-row");
    },
    getStyleEl(row) {
      return row.querySelector("#styles-container");
    },

    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "";
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "none";
    },
  });
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  });
  editor.Commands.add("show-template-json", {
    run: (editor) =>
      editor.Modal.setTitle("Components JSON")
        .setContent(
          `<textarea style="width:100%; height: 250px;">
        ${JSON.stringify(editor.getComponents())}
      </textarea>`
        )
        .open(),
  });
};

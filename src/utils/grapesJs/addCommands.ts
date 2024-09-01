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
};

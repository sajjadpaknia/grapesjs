import grapesjs, { Editor } from "grapesjs";

interface IProps {
  el: HTMLElement;
}

export const grapesJSConfig = ({ el }: IProps): Editor => {
  const editor = grapesjs.init({
    container: el,
    fromElement: true,
    height: "300px",
    width: "auto",
    storageManager: false,
    panels: { defaults: [] },
  });
  return editor;
};

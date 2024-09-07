import { useEffect, useRef } from "react";
import { grapesJSConfig } from "../config";
import "../style/Builder.css";
const Builder = () => {
  const grapesJSContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (grapesJSContainer.current) {
      grapesJSConfig({ container: grapesJSContainer.current });
    }
  }, []);
  return (
    <div className="w-full h-full">
      {/* <div
        id="top-panel"
        className="flex justify-between w-full p-0"
        style={{ position: "initial" }}
      >
        <div
          id="panel-basic-actions"
          className="flex"
          style={{ position: "initial" }}
        ></div>
        <div id="panel-devices" style={{ position: "initial" }}></div>
        <div
          id="panel-switcher"
          className="flex"
          style={{ position: "initial" }}
        ></div>
      </div> */}
      <div className="flex justify-start items-stretch" id="editor-row">
        <div className="grow" id="editor-canvas">
          <div ref={grapesJSContainer}></div>
        </div>
        <div id="right-panel" className="relative overflow-y-auto">
          {/* <div id="layers-container"></div>
          <div id="styles-container"></div>
          <div id="traits-container"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Builder;

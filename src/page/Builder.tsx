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
      <div id="top-panel"></div>
      <div ref={grapesJSContainer}></div>
    </div>
  );
};

export default Builder;

import { useEffect, useRef } from "react";
import { grapesJSConfig } from "../config";

const Builder = () => {
  const grapesJSContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (grapesJSContainer.current) {
      grapesJSConfig({ el: grapesJSContainer.current });
    }
  }, []);
  return (
    <div className="w-full h-ful">
      <h1 className="text-center my-4 font-bold">Builder Page</h1>
      <div style={{ width: "1200px", height: "500px", margin: "0 auto" }}>
        <div ref={grapesJSContainer} className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default Builder;

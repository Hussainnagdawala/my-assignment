import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";

const Component = () => {
  useEffect(() => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holder: "editorjs",
    });
  }, []);
  return <div id="editorjs" style={{border: "1px solid"}}>Component</div>;
};

export default Component;

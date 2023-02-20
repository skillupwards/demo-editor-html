import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/theme/mdn-like.css";
import {Controlled as ControlledEditor} from "react-codemirror2";
import "../Editor/Editor.scss";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/theme/cobalt.css";

export default function Editor(props) {
  
  const {language, value, onChange} = props;

  function handleChange(Editor, data, value) {
    onChange(value);
  }

  return (
    <ControlledEditor
      onBeforeChange={handleChange}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: "material",
        lineNumbers: true,
        autoCloseTags: true,
      }}
    />
  );
}

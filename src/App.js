import React from "react";
import "./App.scss";
import CustomEditorHTML from "./components/CustomEditorHTML/CustomEditorHTML";
import Example1 from '!!raw-loader!./example1.c';

function App() {

  return (
    <CustomEditorHTML>{Example1}</CustomEditorHTML>
  );
}

export default App;

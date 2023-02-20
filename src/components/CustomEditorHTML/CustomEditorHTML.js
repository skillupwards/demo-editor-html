import React, {useState} from "react";
import Editor from "./Editor";
import "./CustomEditorHTML.css";

function CustomEditorHTML(props) {
  const {htmlCode} = props;
  const [isRun, setIsRun] = useState(false);
  const [html, setHtml] = useState(htmlCode);
  const [srcDoc, setSrcDoc] = useState("");

  let run = () => {
    setIsRun(true);
    setSrcDoc(`
       <html>
         <body>${html}</body>
       </html>
     `);
  };

  return (
    <div className="appContainer">
      <div className="appWrapper">
        <div className="childWrapper">
          <div className="paneTop">
            <Editor language="xml" value={html} onChange={setHtml} />
          </div>
          <div className="btnContainer">
            <button className="btn" onClick={run}>
              Run
            </button>
          </div>
          <div className="paneBottom">
            {isRun ? (
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                className="outputBx"
              />
            ) : (
              <div className="outputContainer">
                <span className="outputTxt">Output :</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomEditorHTML;

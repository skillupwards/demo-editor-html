import React, {useState} from "react";
import "./App.scss";
import Editor from "../Editor/Editor";
function App() {
  const [isRun, setIsRun] = useState(false);
  const [html, setHtml] = useState(`<!DOCTYPE html>
     <html>
     <body>
     
     <h1>My First JavaScript</h1>
     
     <p>JavaScript can change the content of an HTML element:</p>
     
     <button type="button" onclick="myFunction()">Click Me!</button>
     
     <p id="demo">This is a demonstration.</p>
     
     <script>
     function myFunction() { 
       document.getElementById("demo").innerHTML = "Hello JavaScript!";
     }
     </script>
     
     </body>
     </html>
     `);
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
                className="outpuBx"
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

export default App;

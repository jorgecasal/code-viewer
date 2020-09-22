import React, { useState, useEffect } from 'react';
import Editor from './Editor';

function App() {
  const [html, setHTML] = useState('');
  const [css, setCSS] = useState('');
  const [js, setJS] = useState('');
  const [srcDoc, setSrcDoc] = useState('');


  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [html, css, js])


  return (
    <panes>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHTML}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCSS}/>
        <Editor language="javascript" displayName="JS" value={js} onChange={setJS}/>

      </div>
      <div className="pane">
      <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%"/>
      </div>
    </panes>
  );
}

export default App;

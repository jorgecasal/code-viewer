import React, { useState, useEffect }, [input]) }from 'react';
import Editor from './Editor';

function App() {
  const [html, setHTML] = useState('');
  const [css, setCSS] = useState('');
  const [js, setJS] = useState('');
  

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 250)
  }, [html, css, js])

  const srcDoc = 

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

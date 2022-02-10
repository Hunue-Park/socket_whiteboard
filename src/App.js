import React from 'react';
import PaintingBoard from './Components/PaintingBoard/PaintingBoard';
import './App.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Canvas from './Components/Canvas/Canvas';

function App() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  
  return (
    <div className="App">
      <Canvas />
      <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        width: window.innerWidth * 0.5,
        zIndex: 1,
        fontSize: 12,
        backgroundColor: "aqua",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
    <div>
      
    </div>
      
      
    </div>
  );
}

export default App;
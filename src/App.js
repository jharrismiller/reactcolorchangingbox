import './App.css';
import ColorBox from './ColorBox';
import SetColor from './SetColor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorBox color={color} />
      <SetColor color={color} setColor={setColor} />
    </div>
  );
}

export default App;

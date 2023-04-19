import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";
import React, { useState } from 'react';

function App() {
  const [click, setClick] = useState(0);

  const onChange = () => {
    setClick(click + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={onChange}>click</button>
      <p id="id">{click}</p>

      </header>
    </div>
  );
}


export default App;

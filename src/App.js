import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";
import React, { useState } from 'react';


let clicks = 0

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}


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

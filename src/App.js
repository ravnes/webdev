import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";
import React, { useState } from 'react';
import {values} from './values'

// function Histogram() {
//   const histo = d3.histogram([d3.min(values), d3.median(values), d3.max(values)])
//   console.log(histo)

//   return <div>
//     {histo.}
//   </div>
// }

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
      <div id="histo">
        <Histogram />
      </div>
      </header>
    </div>
  );
}


export default App;

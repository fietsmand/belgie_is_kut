import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import logo from './logo.svg';
import MapChart from './Components/MapChart';
import './App.css';

function App() {
  const [content, setContent] = useState("");

  return (
    <div className="App">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>

    </div>
  );
}

export default App;

import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Switch from "react-switch";
import MapChart from './Components/MapChart';
import './App.css';

function App() {
  const [content, setContent] = useState("");

  const [language, setLanguage] = useState<'NL' | 'FR'>('NL');
  console.log('🚀: App -> language', language);
  
  const handleChange = (checked: Boolean): void => {
    console.log('🚀: App -> checked', checked);
    setLanguage(!checked ? 'FR' : 'NL');
    console.log('🚀: App -> language', language);
  }

  return (
    <div className="App">
      <div>
        <span role="img" aria-label="💩">
          🇫🇷
        </span>
        <Switch onChange={handleChange} checked={language === 'NL'} />
        <span role="img" aria-label="Nederlands">
          🇳🇱
        </span>
      </div>

      <MapChart 
        setTooltipContent={setContent}
        language={language}
      />
      <ReactTooltip>{content}</ReactTooltip>

    </div>
  );
}

export default App;

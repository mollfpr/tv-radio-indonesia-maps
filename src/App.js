import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import logo from './logo.svg';
import './App.css';
import MapChart from './MapChart';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div className="App">
      <div className="App-header">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
};

export default App;

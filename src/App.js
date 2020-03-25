import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import logo from './logo.svg';
import './sass/App.scss';
import MapChart from './components/MapChart';
import Header from './components/Header';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div className="site-wrapper">
      <Header></Header>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import MinerGrid from './MinerGrid';
import './App.css';
import minersData from './data/data.json';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(minersData['19']['values']);
  }, []);

  return (
    <div className="App">
      <h1>Miner Status Visualization</h1>
      <MinerGrid data={data} />
    </div>
  );
};

export default App;

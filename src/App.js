import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./page/Home";
import './globalstyles.css'
import { Routes } from './utils/routes';
function App() {

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;

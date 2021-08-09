import React from 'react';

import './globalstyles.css'
import { Routes } from './utils/routes';
import { MovieContext } from './context/Movie'
function App() {

  return (
    <div className="App">
      <MovieContext>
        <Routes/>
      </MovieContext>
     
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./page/Home";
import './globalstyles.css'
import { Header } from './components/Header';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Home/>  
      </BrowserRouter>    
    </div>
  );
}

export default App;

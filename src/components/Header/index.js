import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import logo from "../../img/fitak7.png";


export const Header = () => {
  return (
    <div class="header">
   
       <Link to="/" className="link-icon" ><img className="icon" src={logo}/></Link>
   
      <div class="header-right">
     
        <input className="search-bar" type="text" placeholder="buscar"></input>
        <button type="submit" className="btn-search"><i className="fas fa-search"></i></button>
        
        <Link to="/watched">Assistidos</Link>
        <Link to="/mustwatch">Quero Assistir</Link>
      </div>
    </div>
  );
};

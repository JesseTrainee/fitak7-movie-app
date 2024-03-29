import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";
import logo from "../../img/fitak7.png";


export const Header = () => {
  return (
    <div className="header">
   
       <Link to="/" className="link-icon" ><img className="icon" src={logo}/></Link>
   
      <div className="header-right">
        <Link to="/watched">Assistidos</Link>
        <Link to="/mustwatch">Quero Assistir</Link>
      </div>
    </div>
  );
};

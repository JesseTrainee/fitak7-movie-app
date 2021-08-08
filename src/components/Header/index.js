import React from "react";
import "./styles.css";
import logo from "../../img/fitak7.png";

export const Header = () => {
  return (
    <div class="header">
   
       <img className="icon" src={logo}/>
   
      <div class="header-right">
        <a href="#search">Assistidos</a>
        <a href="#about">Quero Assistir</a>
      </div>
    </div>
  );
};

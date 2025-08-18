import React from "react";
import Navbar from "../Navbar/Navbar";
import HamburguesaMenu from "./HamburguesaMenu/HamburguesaMenu";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img 
          src={logo} 
          alt="Zoom TV Canal 10 Megacable" 
          className="logo" 
          loading="lazy"
        />
        <h1>ℤ𝕠𝕠𝕞 𝕋𝕍 ℂ𝕒𝕟𝕒𝕝 𝟙𝟘 𝕄𝕖𝕘𝕒𝕔𝕒𝕓𝕝𝕖</h1>
        
        <div className="mobile-menu">
          <HamburguesaMenu />
        </div>
      </div>
      
      <div className="desktop-nav">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
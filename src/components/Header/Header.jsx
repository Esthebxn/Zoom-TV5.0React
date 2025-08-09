import React from 'react';
import Navbar from '../Navbar';
import HamburguesaMenu from '../../pages/HamburguesaMenu/HamburguesaMenu';
import './Header.css';
import logo from '../../assets/images/WhatsApp Image 2025-07-30 at 1.03.23 PM.jpeg';

const Header = () => {
  console.log('HamburguesaMenu component:', HamburguesaMenu); // Debug

  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Zoom TV Canal 10 Megacable" className="logo" />
        <h1>ℤ𝕠𝕠𝕞 𝕋𝕍 ℂ𝕒𝕟𝕒𝕝 𝟙𝟘 𝕄𝕖𝕘𝕒𝕔𝕒𝕓𝕝𝕖</h1>
        {/* Menú hamburguesa solo visible en móviles */}
        <div className="mobile-menu">
          <HamburguesaMenu />
        </div>
      </div>
      {/* Navbar solo visible en desktop */}
      <div className="desktop-nav">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
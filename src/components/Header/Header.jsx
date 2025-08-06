import React from 'react';
import Navbar from '../Navbar';
import HamburguesaMenu from '../../pages/HamburguesaMenu/HamburguesaMenu';
import './Header.css';
import logo from '../../assets/images/logo-zoomtv.png';

const Header = () => {
  console.log('HamburguesaMenu component:', HamburguesaMenu); // Debug

  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Zoom TV Canal 10" className="logo" />
        <h1>Zoom TV Canal 10</h1>
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
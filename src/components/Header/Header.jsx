import React from 'react';
import Navbar from '../Navbar';
import './Header.css';
import logo from '../../assets/images/logo-zoomtv.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Zoom TV Canal 10" className="logo" />
        <h1>Zoom TV Canal 10</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
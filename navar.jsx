// Navbar.js
import React from 'react';
import './navar.css.';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">Zoom Tv</div>
      <div className="navbar-links">
        <a href="#">Inicio</a>
        <a href="#">Conócenos</a>
        <a href="#">Contacto</a>
        <a href="#">Nuestras Redes Sociales</a>
        <a href="#">Zoom Tv canal 10</a>
      </div>
    </div>
  );
};

export default Navbar;

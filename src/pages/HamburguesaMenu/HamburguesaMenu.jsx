import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburguesaMenu.css';

const HamburguesaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="simple-menu">
      {/* Botón hamburguesa simple */}
      <button 
        className={`menu-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú simple */}
      {isOpen && (
        <div className="menu-panel">
          <div className="menu-header">
            <h3>Menú</h3>
            <button onClick={closeMenu} className="close-btn">×</button>
          </div>
          <div className="menu-items">
            <Link to="/" onClick={closeMenu}>Inicio</Link>
            <Link to="/nosotros" onClick={closeMenu}>Nosotros</Link>
            <Link to="/actualidad" onClick={closeMenu}>Actualidad</Link>
            <Link to="/zoom-tv-canal-10" onClick={closeMenu}>Programación</Link>
            <Link to="/live" onClick={closeMenu}>En Vivo</Link>
            <Link to="/anunciantes" onClick={closeMenu}>Anunciantes</Link>
            <Link to="/redes-sociales" onClick={closeMenu}>Redes Sociales</Link>
          </div>
        </div>
      )}

      {/* Overlay simple */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default HamburguesaMenu; 
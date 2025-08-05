import React, { useState } from 'react';
import './HamburguesaMenu.css';

const HamburguesaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      {/* Botón del menú hamburguesa */}
      <button 
        className={`hamburguesa-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menú principal"
      >
        <span className="hamburguesa-line"></span>
        <span className="hamburguesa-line"></span>
        <span className="hamburguesa-line"></span>
      </button>

      {/* Menú desplegable */}
      <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/programacion">Programación</a></li>
          <li><a href="/noticias">Noticias</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/en-vivo">En Vivo</a></li>
        </ul>
      </nav>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isOpen && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default HamburguesaMenu; 
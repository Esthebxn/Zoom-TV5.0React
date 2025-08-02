import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Zoom TV
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/inicio" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/nosotros" className="navbar-link">Nosotros</Link>
          </li>
          <li className="navbar-item dropdown">
            <Link to="/actualidad" className="navbar-link">Actualidad</Link>
            <div className="dropdown-content">
              <Link to="/actualidad/deportes" className="dropdown-link">Deportes</Link>
              <Link to="/actualidad/nacionales" className="dropdown-link">Nacionales</Link>
              <Link to="/actualidad/regionales" className="dropdown-link">Regionales</Link>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/programacion" className="navbar-link">Programación</Link>
          </li>
          <li className="navbar-item">
            <Link to="/anunciantes" className="navbar-link">Anunciantes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/redes-sociales" className="navbar-link">Redes Sociales</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 
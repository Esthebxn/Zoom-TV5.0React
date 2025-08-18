import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS específico para este navbar

const ZoomAppNavbar = () => {
  return (
    <nav className="zoom-navbar">
      <div className="zoom-navbar-container">
        <Link to="/zoom-app" className="zoom-navbar-logo">
          <span className="zoom-logo-text">ZOOM</span>
          <span className="app-logo-text">APP</span>
        </Link>

        <ul className="zoom-navbar-links">
          <li className="zoom-nav-item">
            <Link to="/zoom-app" className="zoom-nav-link">Inicio</Link>
          </li>

          <li className="zoom-nav-item">
            <Link to="/zoom-app/features" className="zoom-nav-link">Características</Link>
          </li>

          <li className="zoom-nav-item dropdown">
            <Link to="/zoom-app/download" className="zoom-nav-link">Descargar</Link>
            <div className="zoom-dropdown-menu">
              <Link to="/zoom-app/download/android" className="zoom-dropdown-item">Android</Link>
              <Link to="/zoom-app/download/ios" className="zoom-dropdown-item">iOS</Link>
              <Link to="/zoom-app/download/tv" className="zoom-dropdown-item">TV</Link>
            </div>
          </li>

          <li className="zoom-nav-item">
            <Link to="/zoom-app/support" className="zoom-nav-link">Soporte</Link>
          </li>

          <li className="zoom-nav-item highlight">
            <Link to="/live" className="zoom-nav-link highlight-link">Ver en Vivo</Link>
          </li>

          <li className="zoom-nav-item">
            <Link to="/zoom-tv-canal-10" className="zoom-nav-link">Programación</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ZoomAppNavbar; 
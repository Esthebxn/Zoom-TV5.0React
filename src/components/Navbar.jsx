import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">ZOOM TV</Link>

        <ul className="navbar-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>

          <li className="nav-item">
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
          </li>

          <li className="nav-item dropdown">
            <Link to="/actualidad" className="nav-link">Actualidad</Link>
            <div className="dropdown-menu">
              <Link to="/actualidad/deportes" className="dropdown-item">Deportes</Link>
              <Link to="/actualidad/nacionales" className="dropdown-item">Nacionales</Link>
              <Link to="/actualidad/regionales" className="dropdown-item">Regionales</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/zoom-tv-canal-10" className="nav-link">Programación</Link>
          </li>

          <li className="nav-item">
            <Link to="/live" className="nav-link">En Vivo</Link>
          </li>

          <li className="nav-item">
            <Link to="/anunciantes" className="nav-link">Anunciantes</Link>
          </li>

          <li className="nav-item">
            <Link to="/redes-sociales" className="nav-link">Redes Sociales</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 
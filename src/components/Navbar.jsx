import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/zoom-tv-canal-10">Zoom TV Canal 10</Link>
        </li>
        <li>
          <Link to="/redes-sociales">Redes Sociales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
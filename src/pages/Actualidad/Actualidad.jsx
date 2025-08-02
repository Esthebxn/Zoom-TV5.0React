import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Deportes from './Deportes.jsx ';
import Nacionales from './Nacionales.jsx';
import Regionales from './Regionales.jsx'; 

import './Actualidad.css';

function Actualidad() {
  return (
    <div className="actualidad-container">
      <h1> Actualidad</h1>
      
      <nav className="submenu-actualidad">
        <Link to="deportes" className="submenu-link">Deportes</Link>
        <Link to="nacionales" className="submenu-link">Nacionales</Link>
        <Link to="regionales" className="submenu-link">Regionales</Link>
        <Link to="regionales" className="submenu-link">Regionales</Link>
        <Link to="regionales" className="submenu-link">Regionales</Link>
         
      
      
      </nav>
      
      <div className="subcontenido-actualidad">
        <Outlet />
        
        <Routes>
          <Route path="deportes" element={<Deportes />} />
          <Route path="nacionales" element={<Nacionales />} />
          <Route path="regionales" element={<Regionales />} />
          <Route index element={<div className="mensaje-default">Seleccione una categoría de actualidad</div>} />
        </Routes>
      </div>
    </div>
  );
}  

export default Actualidad; 
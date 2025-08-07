import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Inicio from '../pages/Inicio/Inicio';
import Nosotros from '../pages/Nosotros/Nosotros';
import Actualidad from '../pages/Actualidad/Actualidad';
import Deportes from '../pages/Actualidad/Deportes';
import Nacionales from '../pages/Actualidad/Nacionales';
import Regionales from '../pages/Actualidad/Regionales';
import Musica from '../pages/Actualidad/Musica'; // Added new import

import RedesSociales from '../pages/RedesSociales/RedesSociales';
import Programacion12 from "../pages/Programacion/Programacion12.jsx";
import Anunciantes from '../pages/Anunciantes/Anunciantes.jsx';
import Live from '../pages/Live9/Live9';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes> 
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          
          <Route path="/actualidad" element={<Actualidad />}>
            <Route path="deportes" element={<Deportes />} />
            <Route path="nacionales" element={<Nacionales />} />
            <Route path="regionales" element={<Regionales />} />
            <Route path="musica" element={<Musica />} /> {/* Added new route */}
          </Route>
          
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/zoom-tv-canal-10" element={<Programacion12 />} />
          <Route path="/anunciantes" element={<Anunciantes />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </div>
    </Router>
  );     
}

export default App; 
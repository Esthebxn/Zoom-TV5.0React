import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Inicio from '../pages/Inicio/Inicio';
import Nosotros from '../pages/Nosotros/Nosotros';
import Actualidad from '../pages/Actualidad/Actualidad';
import Deportes from '../pages/Actualidad/Deportes';
import Nacionales from '../pages/Actualidad/Nacionales';
import Regionales from '../pages/Actualidad/Regionales';
import RedesSociales from '../pages/RedesSociales/RedesSociales';
import Programacion from '../pages/Programacion/Programacion';
import Anunciantes from '../pages/Anunciantes/Anunciantes';
import Live from '../pages/Live/Live';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Ruta raíz que redirige a Inicio */}
          <Route path="/" element={<Inicio />} />
          
          {/* Ruta alternativa para inicio (opcional) */}
          <Route path="/inicio" element={<Inicio />} />
          
          <Route path="/nosotros" element={<Nosotros />} />
          
          {/* Rutas anidadas de Actualidad */}
          <Route path="/actualidad" element={<Actualidad />}>
            <Route path="deportes" element={<Deportes />} />
            <Route path="nacionales" element={<Nacionales />} />
            <Route path="regionales" element={<Regionales />} />
          </Route>
          
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/Programacion" element={<Programacion />} />
          <Route path="/anunciantes" element={<Anunciantes />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </div>
    </Router>
  );     
}

export default App;
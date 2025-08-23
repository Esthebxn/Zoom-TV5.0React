import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Inicio from '../pages/Inicio/Inicio';
import Nosotros from '../pages/Nosotros/Nosotros';
import Actualidad from '../pages/Actualidad/Actualidad';
import Deportes from '../pages/Actualidad/Deportes';
import Nacionales from '../pages/Actualidad/Nacionales';
import Regionales from '../pages/Actualidad/Regionales';
import Musica from '../pages/Actualidad/Musica';
import RedesSociales from '../pages/RedesSociales/RedesSociales';
import Programacion12 from '../pages/Programacion/Programacion12';
import Anunciantes from '../pages/Anunciantes/Anunciantes';
import Live9 from '../pages/Live9/Live9';
import ZoomApp from '../pages/ZoomApp/ZoomApp';
import Chatbot from './Chatbot/Chatbot';
import HamburguesaMenu from '../pages/HamburguesaMenu/HamburguesaMenu';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <HamburguesaMenu />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          
          {/* Ruta principal de Actualidad */}
          <Route path="/actualidad" element={<Actualidad />} />
          
          {/* Rutas hijas de Actualidad */}
          <Route path="/actualidad/deportes/*" element={<Deportes />} />
          <Route path="/actualidad/nacionales" element={<Nacionales />} />
          <Route path="/actualidad/regionales" element={<Regionales />} />
          <Route path="/actualidad/musica" element={<Musica />} />
          
          {/* Ruta de Programación (corregida para coincidir con navbar) */}
          <Route path="/programacion" element={<Programacion12 />} />
          
          {/* Ruta En Vivo (añadida para coincidir con navbar) */}
          <Route path="/envivo" element={<Live9 />} />
          
          <Route path="/anunciantes" element={<Anunciantes />} />
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/zoom-app" element={<ZoomApp />} />
          
          {/* Ruta alternativa para Live (se mantiene por compatibilidad) */}
          <Route path="/live" element={<Live9 />} />
          
          {/* Ruta alternativa para Programación (se mantiene por compatibilidad) */}
          <Route path="/zoom-tv-canal-10" element={<Programacion12 />} />
        </Routes>
        
        {/* Chatbot component */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App; 
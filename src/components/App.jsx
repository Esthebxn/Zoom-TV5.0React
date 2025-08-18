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
import HamburguesaMenu from './HamburguesaMenu/HamburguesaMenu';

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
          
          {/* Nested routes for Actualidad section */}
          <Route path="/actualidad" element={<Actualidad />}>
            <Route index element={<Actualidad />} />
            <Route path="deportes" element={<Deportes />} />
            <Route path="nacionales" element={<Nacionales />} />
            <Route path="regionales" element={<Regionales />} />
            <Route path="musica" element={<Musica />} />
          </Route>
          
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/zoom-tv-canal-10" element={<Programacion12 />} />
          <Route path="/anunciantes" element={<Anunciantes />} />
          <Route path="/live" element={<Live9 />} />
          <Route path="/zoom-app" element={<ZoomApp />} />
        </Routes>
        
        {/* Chatbot component */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App; 
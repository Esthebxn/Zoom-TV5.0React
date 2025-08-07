import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Asegúrate que las rutas sean exactamente así (sin mayúsculas innecesarias)
import Nosotros from '../pages/Nosotros/Nosotros';
import Actualidad from '../pages/Actualidad/Actualidad';
import Deportes from '../pages/Deportes/Deportes';
import Nacionales from '../pages/Nacionales/Nacionales';
import Regionales from '../pages/Regionales/Regionales'; 

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
            <Route path="musica" element={<Musica />} />
          </Route>
          
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/programacion" element={<Programacion12 />} />
          <Route path="/anunciantes" element={<Anunciantes />} />
          <Route path="/live" element={<Live9 />} />
        </Routes>
      </div>
    </Router>
  );     
}

export default App; 
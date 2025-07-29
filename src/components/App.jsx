import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Inicio from './pages/Inicio/Inicio';
import Nosotros from './pages/Nosotros/Nosotros';
import RedesSociales from './pages/RedesSociales/RedesSociales';
import ZoomTVCanal10 from './pages/ZoomTVCanal10/ZoomTVCanal10';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/zoom-tv-canal-10" element={<ZoomTVCanal10 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
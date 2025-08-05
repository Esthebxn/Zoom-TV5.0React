import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Actualidad.css';

// Datos de noticias deportivas de ejemplo
const noticiasDeportes = [
  {
    id: 'seleccion-copa-america',
    title: 'Selección peruana anuncia nómina para Copa América',
    date: '15 junio 2023',
    summary: 'Ricardo Gareca presenta lista de 23 jugadores para el torneo continental.',
    content: 'El entrenador de la selección peruana, Ricardo Gareca, ha anunciado hoy la lista definitiva de 23 jugadores que representarán al Perú en la próxima Copa América. La nómina incluye a veteranos como Paolo Guerrero y jóvenes promesas como Pedro Aquino. El equipo comenzará su preparación la próxima semana en Lima antes de viajar al país sede del torneo.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    sourceUrl: 'https://ejemplo.com/noticia1'
  },
  {
    id: 'liga1-resultados',
    title: 'Liga 1: Resultados de la fecha 15',
    date: '14 junio 2023',
    summary: 'Alianza Lima se mantiene en la cima tras empate de Universitario.',
    content: 'En una emocionante fecha 15 del torneo local, Alianza Lima logró mantener el primer lugar tras el empate 1-1 de Universitario contra Sporting Cristal. Otros resultados destacados incluyen la victoria de Cienciano sobre Melgar por 2-0 y el triunfo de Binacional como visitante ante UTC. La competencia se mantiene reñida con 5 equipos en lucha por el título.',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80',
    sourceUrl: 'https://ejemplo.com/noticia2'
  },
  {
    id: 'luis-advincula',
    title: 'Luis Advíncula firma con club turco',
    date: '13 junio 2023',
    summary: 'El lateral derecho peruano jugará en el Besiktas la próxima temporada.',
    content: 'Luis Advíncula, defensor de la selección peruana, ha firmado un contrato por tres temporadas con el Besiktas de Turquía. El jugador llega procedente del Rayo Vallecano español y se convierte en el tercer peruano en vestir la camiseta del club turco. Advíncula expresó su emoción por este nuevo reto en su carrera profesional.',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    sourceUrl: 'https://ejemplo.com/noticia3'
  },
  {
    id: 'mundial-sub20',
    title: 'Perú clasifica al Mundial Sub-20 tras 18 años',
    date: '12 junio 2023',
    summary: 'La selección juvenil venció a Chile en el último partido clasificatorio.',
    content: 'La selección peruana Sub-20 ha logrado la clasificación al Mundial de la categoría por primera vez en 18 años tras vencer 2-1 a Chile en el último partido del Sudamericano. Los goles peruanos fueron anotados por Bryan Reyna y Jairo Concha. El entrenador Daniel Ahmed destacó el trabajo de grupo y la mentalidad de los jugadores.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    sourceUrl: 'https://ejemplo.com/noticia4'
  }
];

// Componente para mostrar noticias deportivas individuales
function NoticiaDeportivaDetalle() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la carga de una noticia específica
    const fetchNoticia = () => {
      try {
        const noticiaEncontrada = noticiasDeportes.find(n => n.id === id);
        setTimeout(() => {
          setNoticia(noticiaEncontrada || null);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading) return <div className="cargando">Cargando noticia deportiva...</div>;
  if (!noticia) return <div className="error">Noticia deportiva no encontrada</div>;

  return (
    <div className="noticia-detalle">
      <h2>{noticia.title}</h2>
      <p className="noticia-fecha">{noticia.date}</p>
      <img 
        src={noticia.imageUrl} 
        alt={noticia.title} 
        className="noticia-imagen"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/800x400?text=Imagen+No+Disponible';
        }}
      />
      <p className="noticia-contenido">{noticia.content}</p>
      <a 
        href={noticia.sourceUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fuente-original"
      >
        Ver noticia completa en fuente original
      </a>
      <Link to="/deportes" className="volver">← Volver a noticias deportivas</Link>
    </div>
  );
}

// Componente principal Deportes
function Deportes() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos la carga de noticias deportivas
    const fetchNoticias = () => {
      try {
        setTimeout(() => {
          setNoticias(noticiasDeportes);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching sports news:", error);
        setError("Error al cargar las noticias deportivas");
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) return <div className="cargando">Cargando noticias deportivas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="deportes-container">
      <h1>Últimas Noticias Deportivas del Perú</h1>
      
      <div className="subcontenido-deportes">
        <Routes>
          <Route path="noticia/:id" element={<NoticiaDeportivaDetalle />} />
          <Route index element={
            <div className="noticias-deportes">
              <h2>Noticias Recientes</h2>
              
              <div className="lista-noticias">
                {noticias.map((noticia) => (
                  <div className="noticia-item" key={noticia.id}>
                    <Link to={`noticia/${noticia.id}`}>
                      <h3>{noticia.title}</h3>
                    </Link>
                    <p className="noticia-fecha">{noticia.date}</p>
                    <div className="imagen-container">
                      <img 
                        src={noticia.imageUrl} 
                        alt={noticia.title} 
                        className="noticia-imagen-lista"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+No+Disponible';
                        }}
                      />
                    </div>
                    <p className="noticia-resumen">{noticia.summary}</p>
                    <a 
                      href={noticia.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="fuente-lista"
                    >
                      Ver fuente
                    </a>
                  </div>
                ))}
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default Deportes; 
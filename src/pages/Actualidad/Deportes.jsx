import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Deportes.css';
// Datos de noticias deportivas de ejemplo
const noticiasDeportes = [
  {
    id: 'mundial-sub20',
    title: 'Perú clasifica al Mundial Sub-20 tras 18 años',
    date: '15 junio 2023',
    summary: 'La selección peruana logró su pase al Mundial de Indonesia tras vencer a Brasil en el Sudamericano.',
    content: 'La selección peruana de fútbol Sub-20 hizo historia al clasificar al Mundial de Indonesia 2023 tras 18 años de ausencia. El equipo dirigido por José del Solar consiguió su pase tras una emocionante victoria 2-1 sobre Brasil en la última fecha del Sudamericano. Los goles peruanos fueron anotados por Bryan Reyna y Jhamir D"Arrigo en el segundo tiempo, dando la vuelta al marcador después de ir perdiendo en el primer tiempo.',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80',
    sourceUrl: 'https://ejemplo.com/noticia-deportes1'
  },
  {
    id: 'vargas-olimpico',
    title: 'Luis Vargas gana medalla de oro en Panamericano de Atletismo',
    date: '14 junio 2023',
    summary: 'El atleta peruano logró el primer lugar en salto con garrocha con marca de 5.80 metros.',
    content: 'Luis Vargas escribió su nombre en la historia del atletismo peruano al conquistar la medalla de oro en el Campeonato Panamericano de Atletismo realizado en Sao Paulo. El especialista en salto con garrocha superó la marca de 5.80 metros en su tercer intento, superando al brasileño Augusto Dutra y al cubano Yarisley Silva. "Esto es para todo el Perú, es el fruto de años de sacrificio", declaró emocionado Vargas tras su triunfo.',
    imageUrl: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    sourceUrl: 'https://ejemplo.com/noticia-deportes2'
  },
  {
    id: 'alianza-campeon',
    title: 'Alianza Lima se corona campeón del Torneo Apertura',
    date: '13 junio 2023',
    summary: 'El equipo íntimo venció 3-0 a Sporting Cristal en el clásico nacional y aseguró el título.',
    content: 'Alianza Lima se proclamó campeón del Torneo Apertura 2023 tras golear 3-0 a su eterno rival Sporting Cristal en partido disputado en el Estadio Nacional. Los goles fueron obra de Hernán Barcos (2) y Gabriel Costa. Con este resultado, los íntimos alcanzaron los 40 puntos y se aseguraron matemáticamente el primer título del año. "Esto es para nuestra hinchada que nos ha apoyado en las buenas y en las malas", declaró el técnico Carlos Bustos tras el partido.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1493&q=80',
    sourceUrl: 'https://ejemplo.com/noticia-deportes3'
  },
  {
    id: 'voley-playa',
    title: 'Diana y Carolina clasifican a semifinales del Mundial de Vóley Playa',
    date: '12 junio 2023',
    summary: 'Las peruanas vencieron a las alemanas en sets corridos y avanzan a instancias definitivas.',
    content: 'La dupla peruana formada por Diana Rios y Carolina Horta logró un histórico pase a las semifinales del Mundial de Vóley Playa que se disputa en Roma, Italia. Las sudamericanas vencieron por 21-18 y 21-16 a las alemanas Julia Sude y Chantal Laboureur en partido disputado en la cancha central. "Estamos jugando al máximo nivel, queremos la medalla", declaró Rios tras el partido. Este es el mejor resultado de una pareja peruana en la historia de los mundiales.',
    imageUrl: 'https://images.unsplash.com/photo-1543357480-c60d400e2ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    sourceUrl: 'https://ejemplo.com/noticia-deportes4'
  }
];

// Componente para mostrar noticias individuales
function NoticiaDeportesDetalle() {
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

  if (loading) return <div className="cargando">Cargando noticia...</div>;
  if (!noticia) return <div className="error">Noticia no encontrada</div>;

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
    // Simulamos la carga de noticias
    const fetchNoticias = () => {
      try {
        setTimeout(() => {
          setNoticias(noticiasDeportes);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Error al cargar las noticias");
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) return <div className="cargando">Cargando noticias deportivas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="deportes-container">
      <h1>Últimas Noticias Deportivas</h1>
      
      <div className="subcontenido-deportes">
        <Routes>
          <Route path="noticia/:id" element={<NoticiaDeportesDetalle />} />
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
                      Leer más
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
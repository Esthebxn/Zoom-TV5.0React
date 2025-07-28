import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './index.css';

// Componente de página genérica para categorías
const CategoryPage = ({ categoryId, newsData, programacion, weather, trendingTopics }) => {
  const category = categories.find(c => c.id === categoryId);
  const categoryNews = newsData[categoryId] || [];
  
  return (
    <div className="main-content">
      <section className="news-section">
        <h1 className="section-title">
          {categoryId === 'inicio' ? 'Noticias Destacadas' : `Noticias de ${category?.name}`}
        </h1>
        
        <div className="news-grid">
          {categoryNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>

      <Sidebar 
        programacion={programacion} 
        weather={weather} 
        trendingTopics={trendingTopics} 
      />
    </div>
  );
};

// Componente para tarjetas de noticias
const NewsCard = ({ news }) => (
  <article className={`news-card ${news.breaking ? 'breaking' : ''}`}>
    <div className="news-image-container">
      <img src={news.image} alt={news.title} className="news-image" />
      {news.breaking && <span className="breaking-badge">DESTACADO</span>}
    </div>
    <div className="news-content">
      <div className="news-meta">
        <span className="news-category">{news.category}</span>
        <span className="news-time">{news.time}</span>
      </div>
      <h2 className="news-title">{news.title}</h2>
      <p className="news-summary">{news.summary}</p>
      <div className="news-footer">
        <span className="news-author">Por {news.author}</span>
        <span className="news-views">{news.views} vistas</span>
        <Link to={`/noticia/${news.id}`} className="read-more">Leer más →</Link>
      </div>
    </div>
  </article>
);

// Componente de sidebar
const Sidebar = ({ programacion, weather, trendingTopics }) => (
  <aside className="zoom-sidebar">
    <ProgramsWidget programacion={programacion} />
    <LiveWidget />
    <WeatherWidget weather={weather} />
    <TrendsWidget trendingTopics={trendingTopics} />
  </aside>
);

// Componentes de widgets
const ProgramsWidget = ({ programacion }) => (
  <div className="sidebar-widget programs-widget">
    <h2 className="widget-title">📺 Programación</h2>
    <div className="programs-list">
      {programacion.map(program => (
        <div key={program.id} className="program-item">
          <img src={program.image} alt={program.title} className="program-image" />
          <div className="program-info">
            <h3>{program.title}</h3>
            <p className="program-time">{program.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LiveWidget = () => (
  <div className="sidebar-widget live-widget">
    <h2 className="widget-title">🔴 En Vivo</h2>
    <div className="live-container">
      <img src="https://via.placeholder.com/400x225?text=ZOOM+TV+EN+VIVO" alt="En vivo" />
    </div>
  </div>
);

const WeatherWidget = ({ weather }) => (
  <div className="sidebar-widget weather-widget">
    <h2 className="widget-title">⛅ Clima</h2>
    <div className="weather-container">
      <div className="weather-temp">{weather.temp}</div>
      <div className="weather-details">
        <div>{weather.condition}</div>
        <div>Huánuco, Perú</div>
      </div>
    </div>
  </div>
);

const TrendsWidget = ({ trendingTopics }) => (
  <div className="sidebar-widget trends-widget">
    <h2 className="widget-title">📈 Tendencias</h2>
    <ul className="trends-list">
      {trendingTopics.map(trend => (
        <li key={trend.id}>
          <a href="#">{trend.topic} <span>{trend.tweets} tweets</span></a>
        </li>
      ))}
    </ul>
  </div>
);

// Componente de detalle de noticia
const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = Object.values(newsSections).flat().find(item => item.id === parseInt(id));
  
  return (
    <div className="news-detail-page">
      {newsItem ? (
        <>
          <h1>{newsItem.title}</h1>
          <img src={newsItem.image} alt={newsItem.title} />
          <div className="news-meta">
            <span>{newsItem.category}</span>
            <span>{newsItem.time}</span>
          </div>
          <p>{newsItem.summary}</p>
          <p>Por {newsItem.author}</p>
          <Link to="/inicio" className="back-button">← Volver</Link>
        </>
      ) : (
        <p>Noticia no encontrada</p>
      )}
    </div>
  );
};

// Datos (los mismos que en tu código original)
const categories = [
  { id: 'inicio', name: 'Inicio', icon: '🏠' },
  { id: 'region', name: 'Región', icon: '📍' },
  { id: 'politica', name: 'Política', icon: '🏛️' },
  { id: 'economia', name: 'Economía', icon: '💵' },
  { id: 'deportes', name: 'Deportes', icon: '⚽' },
  { id: 'cultura', name: 'Cultura', icon: '🎭' },
  { id: 'judicial', name: 'Judicial', icon: '⚖️' },
  { id: 'clima', name: 'Clima', icon: '⛅' }
];

const newsSections = {
  inicio: [
    { 
      id: 1,
      title: 'Conflicto en consejo regional', 
      summary: 'Gobernador y consejeros en desacuerdo por distribución de presupuesto para obras públicas.', 
      category: 'Política Regional', 
      time: 'Hace 15 min', 
      breaking: true,
      image: 'https://via.placeholder.com/600x400?text=Consejo+Regional',
      author: 'Redacción Central',
      views: '1.2k'
    },
    // ... más noticias
  ],
  // ... otras categorías
};

const programacion = [
  // ... tus datos de programación
];

const trendingTopics = [
  // ... tus datos de tendencias
];

function App() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temp: '24°C',
    condition: 'Parcialmente nublado'
  });
  const [breakingNews] = useState({
    title: 'ÚLTIMA HORA: Consejo Regional aprueba presupuesto para obras en Huánuco',
    link: '#'
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="zoom-tv-app">
        {/* Header */}
        <header className="zoom-header">
          <div className="header-top">
            <div className="logo-container">
              <img src="https://via.placeholder.com/150x60?text=ZOOM+TV+HCO" alt="ZOOM TV HUÁNUCO" />
            </div>
            <div className="date-time">
              {time.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
          <div className="breaking-news-bar">
            <div className="breaking-label">ÚLTIMA HORA:</div>
            <div className="breaking-content">
              <a href={breakingNews.link}>{breakingNews.title}</a>
            </div>
          </div>
        </header>

        {/* Navegación principal */}
        <nav className="categories-nav">
          <ul className="categories-list">
            {categories.map(category => (
              <li key={category.id}>
                <Link
                  to={`/${category.id}`}
                  className="category-item"
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<CategoryPage categoryId="inicio" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/inicio" element={<CategoryPage categoryId="inicio" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/region" element={<CategoryPage categoryId="region" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/politica" element={<CategoryPage categoryId="politica" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/deportes" element={<CategoryPage categoryId="deportes" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/cultura" element={<CategoryPage categoryId="cultura" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/judicial" element={<CategoryPage categoryId="judicial" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/clima" element={<CategoryPage categoryId="clima" newsData={newsSections} programacion={programacion} weather={weather} trendingTopics={trendingTopics} />} />
          <Route path="/noticia/:id" element={<NewsDetail />} />
        </Routes>

        {/* Footer */}
        <footer className="zoom-footer">
          <div className="footer-content">
            <div className="footer-section">
              <img src="https://via.placeholder.com/150x60?text=ZOOM+TV+HCO" alt="ZOOM TV HUÁNUCO" />
              <p>La señal informativa de Huánuco</p>
            </div>
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>Email: contacto@zoomtvhco.com</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
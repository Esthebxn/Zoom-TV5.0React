import React, { useState, useEffect } from 'react';
import './ZoomTVCanal10.css';
import { FaPlay, FaSearch, FaStar, FaUserTie } from 'react-icons/fa';

// Importa tus imágenes profesionales (reemplaza con tus propias imágenes)
import img1 from '../../assets/images/profesional1.jpg';
import img2 from '../../assets/images/profesional2.jpg';
import img3 from '../../assets/images/profesional3.jpg';
import img4 from '../../assets/images/profesional4.jpg';
import img5 from '../../assets/images/profesional5.jpg';
import img6 from '../../assets/images/profesional6.jpg';

const ZoomTVCanal10 = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [floatingImgs, setFloatingImgs] = useState([]);

  // Datos de las imágenes profesionales
  const professionalWork = [
    { id: 1, img: img1, category: 'produccion', title: 'Producción en Vivo', description: 'Nuestro equipo técnico en acción durante transmisión en vivo' },
    { id: 2, img: img2, category: 'noticias', title: 'Despacho de Noticias', description: 'Presentadores principales en nuestro estudio de noticias' },
    { id: 3, img: img3, category: 'exteriores', title: 'Reportaje en Exteriores', description: 'Equipo de reporteros cubriendo eventos locales' },
    { id: 4, img: img4, category: 'entretenimiento', title: 'Programa de Entretenimiento', description: 'Grabación de nuestro show estelar de entretenimiento' },
    { id: 5, img: img5, category: 'deportes', title: 'Transmisión Deportiva', description: 'Cobertura especial de eventos deportivos regionales' },
    { id: 6, img: img6, category: 'tecnologia', title: 'Equipo Tecnológico', description: 'Nuestro moderno equipo de transmisión y producción' },
  ];

  // Efecto para imágenes flotantes
  useEffect(() => {
    const generateFloatingImgs = () => {
      const imgs = [];
      for (let i = 0; i < 8; i++) {
        imgs.push({
          id: i,
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`,
          size: `${Math.random() * 30 + 20}px`,
          delay: `${Math.random() * 5}s`,
          duration: `${Math.random() * 10 + 10}s`,
          img: [img1, img2, img3, img4, img5, img6][Math.floor(Math.random() * 6)],
        });
      }
      setFloatingImgs(imgs);
    };

    generateFloatingImgs();
  }, []);

  const filteredWork = activeFilter === 'todos' 
    ? professionalWork 
    : professionalWork.filter(item => item.category === activeFilter);

  return (
    <main className="zoomtv-page">
      {/* Imágenes flotantes de fondo */}
      <div className="floating-imgs-container">
        {floatingImgs.map((img) => (
          <div 
            key={img.id}
            className="floating-img"
            style={{
              top: img.top,
              left: img.left,
              width: img.size,
              height: img.size,
              animationDelay: img.delay,
              animationDuration: img.duration,
              backgroundImage: `url(${img.img})`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <section className="zoomtv-hero">
        <h1>Nuestro Trabajo Profesional</h1>
        <p>La excelencia en producción televisiva que nos caracteriza</p>
      </section>

      <section className="zoomtv-content">
        {/* Filtros */}
        <div className="work-filters">
          <button 
            className={activeFilter === 'todos' ? 'active' : ''}
            onClick={() => setActiveFilter('todos')}
          >
            Todos
          </button>
          <button 
            className={activeFilter === 'produccion' ? 'active' : ''}
            onClick={() => setActiveFilter('produccion')}
          >
            Producción
          </button>
          <button 
            className={activeFilter === 'noticias' ? 'active' : ''}
            onClick={() => setActiveFilter('noticias')}
          >
            Noticias
          </button>
          <button 
            className={activeFilter === 'exteriores' ? 'active' : ''}
            onClick={() => setActiveFilter('exteriores')}
          >
            Exteriores
          </button>
          <button 
            className={activeFilter === 'entretenimiento' ? 'active' : ''}
            onClick={() => setActiveFilter('entretenimiento')}
          >
            Entretenimiento
          </button>
          <button 
            className={activeFilter === 'deportes' ? 'active' : ''}
            onClick={() => setActiveFilter('deportes')}
          >
            Deportes
          </button>
        </div>

        {/* Galería de trabajo profesional */}
        <div className="professional-gallery">
          {filteredWork.map((item) => (
            <div key={item.id} className="work-card">
              <div className="work-img-container">
                <img src={item.img} alt={item.title} />
                <div className="work-overlay">
                  <FaSearch className="overlay-icon" />
                </div>
              </div>
              <div className="work-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="work-badges">
                  <span className="badge category">{item.category}</span>
                  <span className="badge featured">
                    <FaStar /> Destacado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de reconocimientos */}
        <section className="recognitions">
          <h2>Reconocimientos Profesionales</h2>
          <div className="recognition-cards">
            <div className="recognition-card">
              <FaUserTie className="recognition-icon" />
              <h3>Premio Excelencia Periodística 2023</h3>
              <p>Galardonados por nuestra cobertura de noticias de última hora</p>
            </div>
            <div className="recognition-card">
              <FaPlay className="recognition-icon" />
              <h3>Mejor Producción Televisiva</h3>
              <p>Reconocidos por nuestra innovadora producción de entretenimiento</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ZoomTVCanal10;
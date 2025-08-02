import React from 'react';
import './Inicio.css';

const Inicio = () => {
  // Choose either image banner or video banner
  const useVideoBanner = false;
  
  // Sample banner images (replace with your actual images)
  const bannerImages = [
    "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  ];
  
  // Sample video URL (replace with your actual video)
  const videoUrl = "https://www.youtube.com/embed/6T7pUEZfgdM?autoplay=1&mute=1&loop=1&controls=0";
  
  return (
    <main className="inicio-container">
      <section className="banner">
        {useVideoBanner ? (
          <div className="video-banner">
            <iframe 
              src={videoUrl}
              title="Zoom TV Canal 10 Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <>
            <img 
              src={bannerImages[0]} 
              alt="Banner principal Zoom TV Canal 10" 
              loading="lazy"
            />
            <div className="banner-overlay">
              <h1>Zoom TV Canal 10</h1>
              <p>Información y entretenimiento las 24 horas</p>
            </div>
          </>
        )}
      </section>
      
      <section className="content-section">
        <h2>Bienvenidos a Zoom TV Canal 10</h2>
        <p>Tu canal de noticias y entretenimiento favorito las 24 horas del día.</p>
        
        <div className="highlights">
          <div className="highlight-card">
            <h3>Noticias de último momento</h3>
            <p>Mantente informado con nuestra cobertura en vivo y reportajes exclusivos.</p>
          </div>
          <div className="highlight-card">
            <h3>Programación variada</h3>
            <p>Desde deportes hasta programas de entrevistas con tus personalidades favoritas.</p>
          </div>
          <div className="highlight-card">
            <h3>Transmisión en vivo</h3>
            <p>Disfruta de nuestro contenido en cualquier dispositivo, cuando quieras.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio; 
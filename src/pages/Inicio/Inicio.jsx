import React from 'react';
import './Inicio.css';
import bannerPrincipal from '../../assets/images/1368e5e2-d1ec-4784-ae78-69b34cabb9ad.png';

const Inicio = () => {
  // Choose either image banner or video banner
  const useVideoBanner = false;
  
  // Banner image from local assets
  const bannerImage = bannerPrincipal;
  
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
              src={bannerImage} 
              alt="Banner principal Zoom TV Canal 10" 
              loading="lazy"
            />
            <div className="banner-overlay">
              <h1>Zoom TV Canal 10 Megacable</h1>
              <p></p>
            </div>
          </>
        )}
      </section>
      
     
    </main>
  );
};

export default Inicio;  
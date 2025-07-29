import React, { useState, useEffect } from 'react';
import './RedesSociales.css';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const RedesSociales = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="redes-container">
      <section className="redes-hero">
        <h1>Conéctate con Zoom TV Canal 10</h1>
        <p>Síguenos en nuestras redes sociales y no te pierdas ningún contenido</p>
      </section>

      <section className="redes-content">
        <div className="redes-info">
          <h2>Nuestras Redes Sociales</h2>
          <p>
            Mantente actualizado con nuestro contenido exclusivo, transmisiones en vivo, noticias de último momento
            y mucho más a través de nuestras plataformas digitales.
          </p>
          <p>
            Interactúa con nosotros usando los hashtags <strong>#ZoomTV10</strong> y <strong>#Canal10Contigo</strong>
          </p>
        </div>

        <div className="redes-grid">
          {/* Facebook Card */}
          <div className="redes-card facebook">
            <div className="redes-icon">
              <FaFacebook size={40} />
            </div>
            <h3>Facebook</h3>
            <p>Noticias en vivo, videos y transmisiones exclusivas</p>
            <a 
              href="https://facebook.com/ZoomTVCanal10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="redes-btn"
            >
              Seguir
            </a>
          </div>

          {/* Instagram Card */}
          <div className="redes-card instagram">
            <div className="redes-icon">
              <FaInstagram size={40} />
            </div>
            <h3>Instagram</h3>
            <p>Fotos detrás de cámaras, stories y reels exclusivos</p>
            <a 
              href="https://instagram.com/ZoomTVCanal10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="redes-btn"
            >
              Seguir
            </a>
          </div>

          {/* TikTok Card */}
          <div className="redes-card tiktok">
            <div className="redes-icon">
              <FaTiktok size={40} />
            </div>
            <h3>TikTok</h3>
            <p>Contenido viral, challenges y momentos destacados</p>
            <a 
              href="https://tiktok.com/@ZoomTVCanal10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="redes-btn"
            >
              Seguir
            </a>
          </div>
        </div>
      </section>

      {/* Floating Social Media Icons */}
      <div className={`floating-socials ${isScrolled ? 'visible' : ''}`}>
        <a 
          href="https://facebook.com/ZoomTVCanal10" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-icon facebook"
          title="Facebook"
        >
          <FaFacebook size={24} />
        </a>
        <a 
          href="https://instagram.com/ZoomTVCanal10" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-icon instagram"
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a 
          href="https://tiktok.com/@ZoomTVCanal10" 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-icon tiktok"
          title="TikTok"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </main>
  );
};

export default RedesSociales;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './RedesSociales.css';

const RedesSociales = () => {
  const socialNetworks = [
    {
      id: 1,
      name: 'Facebook',
      icon: <FaFacebook className="red-icon" />,
      description: 'Síguenos para noticias en tiempo real y transmisiones en vivo',
      url: 'https://facebook.com/zoomtvcanal10'
    },
    {
      id: 2,
      name: 'Twitter',
      icon: <FaTwitter className="red-icon" />,
      description: 'Últimas noticias y actualizaciones al instante',
      url: 'https://twitter.com/zoomtvcanal10'
    },
    {
      id: 3,
      name: 'Instagram',
      icon: <FaInstagram className="red-icon" />,
      description: 'Contenido exclusivo y detrás de cámaras',
      url: 'https://instagram.com/zoomtvcanal10'
    },
    {
      id: 4,
      name: 'YouTube',
      icon: <FaYoutube className="red-icon" />,
      description: 'Programas completos y contenido especial',
      url: 'https://youtube.com/zoomtvcanal10'
    },
    {
      id: 5,
      name: 'TikTok',
      icon: <FaTiktok className="red-icon" />,
      description: 'Contenido viral y momentos destacados',
      url: 'https://tiktok.com/@zoomtvcanal10'
    }
  ];

  const feedImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, url: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, url: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <div className="redes-container">
      <div className="redes-header">
        <h1>Redes Sociales</h1>
        <p>Conéctate con nosotros a través de nuestras redes sociales y no te pierdas ningún contenido</p>
      </div>

      <div className="redes-grid">
        {socialNetworks.map(network => (
          <div key={network.id} className="red-card">
            {network.icon}
            <h3>{network.name}</h3>
            <p>{network.description}</p>
            <a href={network.url} target="_blank" rel="noopener noreferrer" className="red-link">
              Seguir
            </a>
          </div>
        ))}
      </div>

      <div className="social-feed">
        <h2>Lo último en nuestras redes</h2>
        <div className="feed-grid">
          {feedImages.map(image => (
            <div key={image.id} className="feed-item">
              <img src={image.url} alt={`Publicación ${image.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedesSociales; 
import React, { useState } from 'react';
import { FiArrowRight, FiMaximize, FiMinimize } from 'react-icons/fi';
import './Anunciantes.css';

const Anunciantes = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const anunciantes = [
    {
      id: 1,
      name: "Tech Solutions Inc.",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/515438155_1607044370405355_4951370912154539554_n.jpg",
      description: "Líder en soluciones tecnológicas para empresas con más de 15 años de experiencia.",
      documents: ["PDF", "Presentación", "Catálogo"],
      newsUrl: "https://example.com/news/tech-solutions"
    },
    {
      id: 2,
      name: "Green Energy Corp",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/527171260_1607045627071896_4028209169303708485_n.jpg",
      description: "Especialistas en energías renovables y soluciones sostenibles para el futuro.",
      documents: ["PDF", "Especificaciones"],
      newsUrl: "https://example.com/news/green-energy"
    },
    {
      id: 3,
      name: "Transporte Turístico VIP",
      image: "https://via.placeholder.com/300x200?text=Transporte+Turístico",
      description: "Servicios de transporte turístico de lujo con unidades modernas y seguras.",
      documents: ["Tarifas", "Paquetes"],
      newsUrl: "https://example.com/news/transporte-turistico"
    },
    {
      id: 4,
      name: "Seguridad Total S.A.",
      image: "https://via.placeholder.com/300x200?text=Seguridad+Total",
      description: "Soluciones integrales de seguridad para empresas y hogares.",
      documents: ["Brochure", "Certificaciones"],
      newsUrl: "https://example.com/news/seguridad-total"
    }
  ];

  const toggleExpandCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="anunciantes-container">
      <header className="anunciantes-header">
        <h1>Nuestros Anunciantes</h1>
        <p className="anunciantes-subtitle">
          Descubre a las empresas innovadoras que colaboran con nosotros.
          Cada anunciante ofrece soluciones únicas para tus necesidades.
        </p>
      </header>
      
      <div className="anunciantes-grid">
        {anunciantes.map(anunciante => (
          <article 
            key={anunciante.id} 
            className={`anunciante-card ${expandedCard === anunciante.id ? 'expanded' : ''}`}
            aria-expanded={expandedCard === anunciante.id}
          >
            <div className="anunciante-image-container">
              <img 
                src={anunciante.image} 
                alt={`Logo de ${anunciante.name}`} 
                className="anunciante-image" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
                }}
              />
            </div>
            <div className="anunciante-content">
              <header className="anunciante-header">
                <h2>{anunciante.name}</h2>
                <button 
                  onClick={() => toggleExpandCard(anunciante.id)}
                  className="expand-button"
                  aria-label={expandedCard === anunciante.id ? "Contraer tarjeta" : "Expandir tarjeta"}
                >
                  {expandedCard === anunciante.id ? <FiMinimize /> : <FiMaximize />}
                </button>
              </header>
              
              <p className="anunciante-description">{anunciante.description}</p>
              
              {expandedCard === anunciante.id && (
                <>
                  {anunciante.documents?.length > 0 && (
                    <div className="anunciante-docs">
                      <h4>Documentos disponibles:</h4>
                      {anunciante.documents.map((doc, index) => (
                        <span key={index} className="doc-badge">{doc}</span>
                      ))}
                    </div>
                  )}
                  
                  {anunciante.newsUrl && (
                    <a 
                      href={anunciante.newsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="news-link"
                    >
                      Ver noticias relacionadas
                      <FiArrowRight className="news-link-icon" />
                    </a>
                  )}
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Anunciantes; 
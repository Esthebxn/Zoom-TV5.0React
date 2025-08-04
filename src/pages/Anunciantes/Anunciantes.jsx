// Anunciantes.jsx - Enhanced Version
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Anunciantes.css';

const Anunciantes = () => {
  // Sample data with actual image URLs and news links
  const [anunciantes, setAnunciantes] = useState([
    {
      id: 1,
      name: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Líder en soluciones tecnológicas para empresas con más de 15 años de experiencia.",
      documents: ["PDF", "Presentación", "Catálogo"],
      newsUrl: "https://example.com/news/tech-solutions"
    },
    {
      id: 2,
      name: "Green Energy Corp",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Especialistas en energías renovables y soluciones sostenibles para el futuro.",
      documents: ["PDF", "Especificaciones"],
      newsUrl: "https://example.com/news/green-energy"
    },
    {
      id: 3,
      name: "Global Logistics",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Red logística internacional con cobertura en más de 50 países.",
      documents: ["Catálogo", "Folleto"],
      newsUrl: "https://example.com/news/global-logistics"
    },
    {
      id: 4,
      name: "Creative Marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Agencia de marketing digital con enfoque en resultados medibles.",
      documents: ["Presentación", "PDF", "Video"],
      newsUrl: "https://example.com/news/creative-marketing"
    },
    {
      id: 5,
      name: "Health Pharma",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Innovación farmacéutica para una vida más saludable.",
      documents: ["Estudios", "Informes"],
      newsUrl: "https://example.com/news/health-pharma"
    },
    {
      id: 6,
      name: "Smart Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      description: "Soluciones financieras inteligentes para personas y empresas.",
      documents: ["Tarifas", "Condiciones"],
      newsUrl: "https://example.com/news/smart-finance"
    }
  ]);

  return ( 
    <div className="anunciantes-container">
      <div className="anunciantes-header">
        <h1>Nuestros Anunciantes</h1>
        <p>
          Descubre a las empresas innovadoras que colaboran con nosotros.
          Cada anunciante ofrece soluciones únicas para tus necesidades.
        </p>
      </div>
      
      <div className="anunciantes-grid">
        {anunciantes.map(anunciante => (
          <div key={anunciante.id} className="anunciante-card">
            <div className="anunciante-image-container">
              <img 
                src={anunciante.image} 
                alt={anunciante.name} 
                className="anunciante-image" 
                loading="lazy"
              />
            </div>
            <div className="anunciante-info">
              <h3>{anunciante.name}</h3>
              <p>{anunciante.description}</p>
              
              <div className="anunciante-docs">
                {anunciante.documents.map((doc, index) => (
                  <span key={index} className="doc-badge">{doc}</span>
                ))}
              </div>
              
              {anunciante.newsUrl && (
                <a 
                  href={anunciante.newsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="news-link"
                >
                  Ver noticias relacionadas
                  <FiArrowRight />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anunciantes; 
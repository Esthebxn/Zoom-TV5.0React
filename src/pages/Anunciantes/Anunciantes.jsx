import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './Anunciantes.css';

const Anunciantes = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const anunciantes = [
    {
      id: 1,
      name: "Tech Solutions Inc.",
      image: "https://scontent.fhuu1-1.fna.fbcdn.net/v/t39.30808-6/537468077_1622326868877105_3836081760919480305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE4l462-RxJ4xWzWpq3jFt9nzpE7ZlDAVKfOkTtmUMBUj8bjd3wSc3KHCLLQUth7eZYuEREPiQtFRkeR7rGyS8n&_nc_ohc=9FWAcg8pYZ0Q7kNvwEd8Bgk&_nc_oc=Adkv_LgwN9u0adVIVZegHXm1J9fuxUXJnzJxDwaDJzxTj0Oy9BnvZxyjdgTgrgr8Pxr4-auRR_iHO6IBLlGUEkXC&_nc_zt=23&_nc_ht=scontent.fhuu1-1.fna&_nc_gid=9ioq3XwgxRJiv2U6EEIerg&oh=00_AfWJV9X-YiAesxVdLbUINcS2y3_LlIW8aE5QD6qLLKsi1A&oe=68AEEE21",
      description: "Líder en soluciones tecnológicas para empresas con más de 15 años de experiencia.",
      enableZoom: true
    },
    {
      id: 2,
      name: "Green Energy Corp",
      image: "https://scontent.fhuu1-1.fna.fbcdn.net/v/t39.30808-6/537778118_1622333525543106_5976784521484993914_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGXXsS801qyzf2TUne-Sn3Y5k4lUQqXPqnmTiVRCpc-qTLMwuuXAijEN3VhjbB47y2WuCQ2VGbLusY4PgSYQgra&_nc_ohc=v6-dQrdx6k8Q7kNvwESh15w&_nc_oc=AdmBho15JZC7CA-t76QwnOGDg93pLxAjOuoZijA1tlFO2KvwV9b8tGPe2lCiwwS3SQucawaB9VR1mofNSkFUtT3F&_nc_zt=23&_nc_ht=scontent.fhuu1-1.fna&_nc_gid=LadPGum6YBXCCkE-bzIdaw&oh=00_AfUCdUCpcNPHaLiEZx-BVUP9JwsPiV43LFeNvX8uKsh_dw&oe=68AF1541",
      description: "Especialistas en energías renovables y soluciones sostenibles para el futuro.",
      enableZoom: true
    },
    {
      id: 3,
      name: "Transporte Turístico VIP",
      image: "https://scontent.fhuu1-1.fna.fbcdn.net/v/t39.30808-6/537328756_1621406525635806_3613675111809413876_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHX2sTOfBJICDJGEtqV1X2aa-EGU-fHpd1r4QZT58el3TPSgCKUp37V5UNrgF5V_7Q9EDL5Cg8vfr9oEgKF3OCz&_nc_ohc=NoJyPm01gp4Q7kNvwGAxC7Y&_nc_oc=AdlGYVxUFco-xW8R5boKVmP2tvrHcu32qp3gKyot-HB68dqBxY-EpsPCqWqwwF_L-eDJLn2ldDDauQzDlDZhDn0d&_nc_zt=23&_nc_ht=scontent.fhuu1-1.fna&_nc_gid=7NSb05RkXvVWYsARQG2dRg&oh=00_AfX1xDe_UOpIYKRGpXnK6TZi5161bMszlRGilxCZ8g20gg&oe=68AEFAF8",
      description: "Servicios de transporte turístico de lujo con unidades modernas y seguras.",
      enableZoom: true
    },
    {
      id: 4,
      name: "Seguridad Total S.A.",
      image: "https://scontent.fhuu1-1.fna.fbcdn.net/v/t39.30808-6/535120116_1621398348969957_1665253110950162657_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEeqJYR4OdTdHSr_xMgJleFfwwFOMHSI5x_DAU4wdIjnGXsej-usLf8AvmblH-1S9l_xilv7dV1JNfKAovBgVSS&_nc_ohc=YR1vRIrDbzIQ7kNvwE_DNC-&_nc_oc=Adkv1E5qW5gNK1SFf03HvVkbjc-Y5WLzNYbudlpOOrWWSrXqZQ4SvwEyu5tM36Gu_Ajhl5HwnoQxcXf1CKSmLC_G&_nc_zt=23&_nc_ht=scontent.fhuu1-1.fna&_nc_gid=i0ksH7VJJM8dFwze9IWaeg&oh=00_AfXMP5jV0rIiOjFAzXdt7Ctu9LoVksQKZSVulTc1kAylkA&oe=68AEE91C",
      description: "Soluciones integrales de seguridad para empresas y hogares.",
      enableZoom: true
    },
    {
      id: 5,
      name: "Oferta Especial",
      image: "https://scontent.fhuu1-1.fna.fbcdn.net/v/t39.30808-6/515441668_1608873346889124_3679166552208620100_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFOwQ3DT6uSVWjRHWlleQgQoUmgdfb7NaqhSaB19vs1qo_M36ZiCk-e4w8UUaMoDS8lfsgyUsMQX6aYk4_-cCD_&_nc_ohc=XxImrH6UOyIQ7kNvwHy0EzA&_nc_oc=AdkgHyfVakPP6dqjSGDOHf5o7oe3saAYqe3ut9Jgm3eWEVWfbraM89JJgUR40S-ilY4Sd5Wue5kLRxob3t7-0Esd&_nc_zt=23&_nc_ht=scontent.fhuu1-1.fna&_nc_gid=aahkXZR_6BOUYpbB8PCT8g&oh=00_AfWpNF2KhcTL2RucduQwkw9KQ5PGuuoGeFUC_RdxzxDn4A&oe=68AF1725",
      description: "Descubre nuestras promociones especiales y ofertas limitadas para este mes.",
      isFlyer: true,
      enableZoom: true
    }
  ];

  const toggleExpandCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="anunciantes-container">
      <div className="anunciantes-grid">
        {anunciantes.map(anunciante => (
          <article 
            key={anunciante.id} 
            className={`anunciante-card ${expandedCard === anunciante.id ? 'expanded' : ''}`}
            aria-expanded={expandedCard === anunciante.id}
          >
            <div 
              className={`anunciante-image-container ${anunciante.isFlyer ? 'flyer-container' : ''} ${anunciante.enableZoom ? 'zoom-enabled' : ''}`}
              onClick={() => openImageModal(anunciante.image)}
            >
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
                {/* Botón de expandir/contraer removido */}
              </header>
              
              <p className="anunciante-description">{anunciante.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      <div className={`anunciante-modal ${selectedImage ? 'active' : ''}`} onClick={closeImageModal}>
        <div className="anunciante-modal-content" onClick={(e) => e.stopPropagation()}>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Vista ampliada" 
              className="anunciante-modal-image" 
            />
          )}
          <button className="anunciante-modal-close" onClick={closeImageModal}>
            <FiX />
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default Anunciantes; 
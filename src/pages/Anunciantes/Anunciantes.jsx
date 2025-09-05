import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { anunciantesApi } from '../../services/api';
import './Anunciantes.css';

const Anunciantes = () => {
  const [anunciantes, setAnunciantes] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar anunciantes desde la API
  const cargarAnunciantes = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Cargando anunciantes...');
      const response = await anunciantesApi.getAll({
        status: 'active',
        limit: 20
      });

      console.log('Respuesta de la API:', response);

      if (response.success) {
        setAnunciantes(response.data);
        console.log('Anunciantes cargados:', response.data);
      } else {
        console.error('Error en la respuesta:', response);
        setError('Error al cargar los anunciantes');
      }
    } catch (err) {
      console.error('Error cargando anunciantes:', err);
      console.error('Detalles del error:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status
      });
      setError(`No se pudieron cargar los anunciantes. Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Cargar anunciantes al montar el componente
  useEffect(() => {
    cargarAnunciantes();
  }, []);
  
  const toggleExpandCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="anunciantes-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando anunciantes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="anunciantes-container">
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button"
            onClick={() => cargarAnunciantes()}
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="anunciantes-container">
      <div className="anunciantes-header">
        <h1>Anunciantes</h1>
        <p>Descubre nuestros socios comerciales y servicios locales</p>
      </div>
      
      <div className="anunciantes-contenido">
        <div className="anunciantes-grid">
          {anunciantes.length === 0 ? (
            <div className="no-anunciantes">
              <p>No hay anunciantes disponibles en este momento.</p>
            </div>
          ) : (
            anunciantes.map(anunciante => (
          <article 
              key={anunciante._id} 
              className={`anunciante-card ${expandedCard === anunciante._id ? 'expanded' : ''}`}
              aria-expanded={expandedCard === anunciante._id}
          >
            <div 
              className={`anunciante-image-container ${anunciante.isFlyer ? 'flyer-container' : ''} ${anunciante.enableZoom ? 'zoom-enabled' : ''}`}
                onClick={() => openImageModal(anunciante.imageUrl)}
            >
              <img 
                  src={anunciante.imageUrl} 
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
              </header>
              
              <p className="anunciante-description">{anunciante.description}</p>
                
                {/* Información de contacto si existe */}
                {anunciante.contactInfo && (
                  <div className="anunciante-contact">
                    {anunciante.contactInfo.phone && (
                      <p><strong>Teléfono:</strong> {anunciante.contactInfo.phone}</p>
                    )}
                    {anunciante.contactInfo.email && (
                      <p><strong>Email:</strong> {anunciante.contactInfo.email}</p>
                    )}
                    {anunciante.contactInfo.website && (
                      <p><strong>Web:</strong> <a href={anunciante.contactInfo.website} target="_blank" rel="noopener noreferrer">{anunciante.contactInfo.website}</a></p>
                    )}
                  </div>
                )}
            </div>
          </article>
            ))
          )}
        </div>
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
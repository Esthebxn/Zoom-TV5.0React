import React, { useState, useEffect } from 'react';
import './Nosotros.css';
import { companyApi } from '../../services/api';

const Nosotros = () => {
  // Estados para los datos de la API
  const [companyInfo, setCompanyInfo] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [companyHistory, setCompanyHistory] = useState(null);
  const [companyValues, setCompanyValues] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos de la API
  useEffect(() => {
    loadCompanyData();
  }, []);

  const loadCompanyData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Cargar todos los datos en paralelo
      const [infoResponse, teamResponse, historyResponse, valuesResponse] = await Promise.all([
        companyApi.getInfo(),
        companyApi.getTeam(),
        companyApi.getHistory(),
        companyApi.getValues()
      ]);

      if (infoResponse.success) setCompanyInfo(infoResponse.data);
      if (teamResponse.success) setTeamMembers(teamResponse.data);
      if (historyResponse.success) setCompanyHistory(historyResponse.data);
      if (valuesResponse.success) setCompanyValues(valuesResponse.data);

    } catch (err) {
      console.error('Error loading company data:', err);
      setError('Error al cargar la información de la empresa');
    } finally {
      setLoading(false);
    }
  };

  // Mostrar loading
  if (loading) {
    return (
      <div className="nosotros-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando información de la empresa...</p>
        </div>
      </div>
    );
  }

  // Mostrar error
  if (error) {
    return (
      <div className="nosotros-container">
        <div className="error-container">
          <h2>Error al cargar la información</h2>
          <p>{error}</p>
          <button onClick={loadCompanyData} className="retry-button">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="nosotros-container">
      {/* Banner superior con logo */}
      <div className="nosotros-banner">
        <img 
          src={companyInfo?.logo || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"} 
          alt={`Logo ${companyInfo?.name || 'Zoom TV Canal 10'}`} 
          className="logo-canal" 
        />
        <h1>{companyInfo?.name || 'Zoom TV Canal 10'}</h1>
        <p>{companyInfo?.slogan || 'Información veraz, entretenimiento de calidad'}</p>
      </div>

      {/* Sección principal */}
      <div className="nosotros-header">
        <h2>Conoce nuestro equipo y valores</h2>
        <p>Somos un equipo comprometido con la excelencia en la comunicación</p>
      </div>

      {/* Sección del equipo */}
      <div className="equipo-section">
        <h2>Nuestro Equipo</h2>
        <div className="equipo-grid">
          {teamMembers.length > 0 ? (
            teamMembers.map(miembro => (
              <div key={miembro._id} className="miembro-equipo">
                <img 
                  src={miembro.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} 
                  alt={miembro.name} 
                />
                <h3>{miembro.name}</h3>
                <p className="puesto">{miembro.position}</p>
                <p className="descripcion">{miembro.bio}</p>
                {miembro.skills && miembro.skills.length > 0 && (
                  <div className="skills">
                    {miembro.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-team">
              <p>No hay información del equipo disponible</p>
            </div>
          )}
        </div>
        <div className="equipo-completo">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Equipo completo de Zoom TV Canal 10" />
          <p>Nuestro equipo completo de más de 50 profesionales trabajando para ustedes</p>
        </div>
      </div>

      {/* Secciones de historia, misión y visión */}
      <div className="nosotros-sections">
        {/* Sección Historia */}
        <div className="nosotros-section historia">
          <div className="section-image">
            <img 
              src={companyHistory?.image || "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} 
              alt="Historia de Zoom TV Canal 10" 
            />
          </div>
          <div className="section-content">
            <h2>{companyHistory?.title || 'Nuestra Historia'}</h2>
            {companyHistory?.content ? (
              companyHistory.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <>
                <p>Zoom TV Canal 10 nació en 2005 con la misión de llevar información veraz y entretenimiento de calidad a nuestros televidentes. Desde nuestros humildes comienzos en un pequeño estudio local, hemos crecido para convertirnos en uno de los canales más importantes de la región.</p>
                <p>Nuestro primer programa salió al aire el 15 de marzo de 2005 con un equipo de solo 5 personas. Hoy contamos con más de 50 profesionales dedicados a la producción de contenido de calidad.</p>
              </>
            )}
            {companyHistory?.milestones && companyHistory.milestones.length > 0 && (
              <div className="logros">
                <h3>Hitos importantes:</h3>
                <ul>
                  {companyHistory.milestones.map((milestone, index) => (
                    <li key={index}>
                      <strong>{milestone.year}:</strong> {milestone.title} - {milestone.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Sección Misión */}
        <div className="nosotros-section mision reverse">
          <div className="section-image">
            <img 
              src={companyValues?.mission?.image || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} 
              alt="Misión de Zoom TV Canal 10" 
            />
          </div>
          <div className="section-content">
            <h2>{companyValues?.mission?.title || 'Nuestra Misión'}</h2>
            <p>{companyValues?.mission?.content || 'Informar, educar y entretener a nuestra audiencia con contenido de alta calidad, manteniendo siempre los más altos estándares periodísticos y éticos.'}</p>
            {companyValues?.mission?.commitments && companyValues.mission.commitments.length > 0 && (
              <>
                <p>Nos comprometemos a:</p>
                <ul>
                  {companyValues.mission.commitments.map((commitment, index) => (
                    <li key={index}>{commitment}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Sección Visión */}
        <div className="nosotros-section vision">
          <div className="section-image">
            <img 
              src={companyValues?.vision?.image || "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} 
              alt="Visión de Zoom TV Canal 10" 
            />
          </div>
          <div className="section-content">
            <h2>{companyValues?.vision?.title || 'Nuestra Visión'}</h2>
            <p>{companyValues?.vision?.content || 'Ser reconocidos como el canal líder en innovación periodística y producción de contenido multimedia en la región para el año 2025.'}</p>
            {companyValues?.vision?.aspirations && companyValues.vision.aspirations.length > 0 && (
              <>
                <p>Aspiramos a:</p>
                <ul>
                  {companyValues.vision.aspirations.map((aspiration, index) => (
                    <li key={index}>{aspiration}</li>
                  ))}
                </ul>
              </>
            )}
            {companyValues?.values && companyValues.values.length > 0 && (
              <div className="valores">
                <h3>Nuestros Valores</h3>
                <div className="valores-grid">
                  {companyValues.values.map((valor, index) => (
                    <div key={index} className="valor-item">
                      <h4>{valor.name}</h4>
                      <p>{valor.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="contacto-section">
        <h2>¿Quieres unirte a nuestro equipo o colaborar con nosotros?</h2>
        {companyInfo?.contactInfo ? (
          <>
            <p>Envíanos tu información a: <a href={`mailto:${companyInfo.contactInfo.email}`}>{companyInfo.contactInfo.email}</a></p>
            <p>O llámanos al: <a href={`tel:${companyInfo.contactInfo.phone}`}>{companyInfo.contactInfo.phone}</a></p>
            {companyInfo.contactInfo.website && (
              <p>Visita nuestro sitio web: <a href={companyInfo.contactInfo.website} target="_blank" rel="noopener noreferrer">{companyInfo.contactInfo.website}</a></p>
            )}
            {companyInfo.contactInfo.address && (
              <p>Nuestra dirección: {companyInfo.contactInfo.address}</p>
            )}
          </>
        ) : (
          <>
            <p>Envíanos tu información a: <a href="mailto:contacto@zoomtvcanal10.com">contacto@zoomtvcanal10.com</a></p>
            <p>O llámanos al: <a href="tel:+1234567890">+1 234 567 890</a></p>
          </>
        )}
      </div>
    </div>
  );
};

export default Nosotros; 
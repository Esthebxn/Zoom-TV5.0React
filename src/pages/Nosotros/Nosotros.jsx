import React from 'react';
import './Nosotros.css';

// ✅ Imágenes locales
import logoZoom from '../../assets/images/1368e5e2-d1ec-4784-ae78-69b34cabb9ad.png';
import logoAlt from '../../assets/images/WhatsApp Image 2025-07-30 at 1.03.23 PM.jpeg';
import bannerPrincipal from '../../assets/images/WhatsApp Image 2025-07-30 at 1.03.23 PM.jpeg';

// Equipo (usando los archivos .jpg que mencionaste)
import mariaGonzalez from '../../assets/images/Imagen de WhatsApp 2025-08-11 a las 08.14.39_adb124b5.jpg';
import carlosMendoza from '../../assets/images/Imagen de WhatsApp 2025-09-07 a las 16.51.16_918b80d6.jpg';
import lauraJimenez from '../../assets/images/Imagen de WhatsApp 2025-09-07 a las 16.53.50_5b977059.jpg';
import robertoSanchez from '../../assets/images/Imagen de WhatsApp 2025-09-07 a las 16.58.52_8ccdaf23.jpg';

const Nosotros = () => {
  const companyInfo = {
    name: 'Zoom TV Canal 10',
    slogan: 'Información veraz, entretenimiento de calidad',
    contactInfo: {
      email: 'contacto@zoomtvcanal10.com',
      phone: '+1 234 567 890'
    }
  };

  const teamMembers = [
    { 
      id: 1, 
      name: '',  
      position: '', 
      bio: '', 
      image: mariaGonzalez 
    },
    { 
      id: 2, 
      name: '', 
      position: '', 
      bio: '', 
      image: carlosMendoza 
    },
    { 
      id: 3, 
      name: '', 
      position: '', 
      bio: '', 
      image: lauraJimenez 
    },
    { 
      id: 4, 
      name: '', 
      position: '', 
      bio: '', 
      image: robertoSanchez 
    }
  ];

  const companyHistory = {
    title: 'Nuestra Historia',
    content: `Zoom TV Canal 10 nació en 2005 con la misión de llevar información veraz y entretenimiento de calidad a nuestros televidentes.
Hoy contamos con más de 50 profesionales dedicados a la producción de contenido de calidad.`,
    image: logoAlt
  };

  const companyValues = {
    mission: {
      title: 'Nuestra Misión',
      content: 'Informar, educar y entretener a nuestra audiencia con contenido de alta calidad.',
      image: bannerPrincipal
    },
    vision: {
      title: 'Nuestra Visión',
      content: 'Ser reconocidos como el canal líder en innovación periodística y producción multimedia.',
      image: bannerPrincipal
    }
  };

  return (
    <div className="nosotros-container">
      {/* Banner superior */}
      <div className="nosotros-banner">
        <img 
          src={logoZoom} 
          alt={`Logo ${companyInfo.name}`} 
          className="logo-canal" 
        />
        <h1>{companyInfo.name}</h1>
        <p>{companyInfo.slogan}</p>
      </div>

      <div className="nosotros-header">
        <h2>Conoce nuestro equipo y valores</h2>
        <p>Somos un equipo comprometido con la excelencia en la comunicación</p>
      </div>

      {/* Equipo */}
      <div className="equipo-section">
        <h2>Nuestro Equipo</h2>
        <div className="equipo-grid">
          {teamMembers.map(miembro => (
            <div key={miembro.id} className="miembro-equipo">
              <img 
                src={miembro.image} 
                alt={miembro.name} 
              />
              <h3>{miembro.name}</h3>
              <p className="puesto">{miembro.position}</p>
              <p className="descripcion">{miembro.bio}</p>
            </div>
          ))}
        </div>
        <div className="equipo-completo">
          <img src={bannerPrincipal} alt="Equipo completo de Zoom TV Canal 10" />
          <p>Nuestro equipo completo de más de 50 profesionales trabajando para ustedes</p>
        </div>
      </div>

      {/* Historia */}
      <div className="nosotros-sections">
        <div className="nosotros-section historia">
          <div className="section-image">
            <img 
              src={companyHistory.image} 
              alt="Historia de Zoom TV Canal 10" 
            />
          </div>
          <div className="section-content">
            <h2>{companyHistory.title}</h2>
            {companyHistory.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Misión */}
        <div className="nosotros-section mision reverse">
          <div className="section-image">
            <img 
              src={companyValues.mission.image} 
              alt="Misión de Zoom TV Canal 10" 
            />
          </div>
          <div className="section-content">
            <h2>{companyValues.mission.title}</h2>
            <p>{companyValues.mission.content}</p>
          </div>
        </div>

        {/* Visión */}
        <div className="nosotros-section vision">
          <div className="section-image">
            <img 
              src={companyValues.vision.image} 
              alt="Visión de Zoom TV Canal 10" 
            />
          </div>
          <div className="section-content">
            <h2>{companyValues.vision.title}</h2>
            <p>{companyValues.vision.content}</p>
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="contacto-section">
        <h2>¿Quieres unirte a nuestro equipo o colaborar con nosotros?</h2>
        <p>
          Envíanos tu información a: <a href={`mailto:${companyInfo.contactInfo.email}`}>{companyInfo.contactInfo.email}</a>
        </p>
        <p>
          O llámanos al: <a href={`tel:${companyInfo.contactInfo.phone}`}>{companyInfo.contactInfo.phone}</a>
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
 
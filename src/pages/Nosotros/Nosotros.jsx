import React from 'react';
import './Nosotros.css';
import equipoImg from '../../assets/images/equipo.jpg';

const Nosotros = () => {
  const teamMembers = [
    { id: 1, name: 'Carlos Méndez', role: 'Director General', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Ana López', role: 'Jefa de Producción', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Juan Pérez', role: 'Editor en Jefe', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { id: 4, name: 'María García', role: 'Presentadora', image: 'https://randomuser.me/api/portraits/women/63.jpg' },
  ];

  return (
    <div className="nosotros-container">
      <div className="nosotros-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre Zoom TV Canal 10 y nuestro equipo de trabajo</p>
      </div>

      <div className="nosotros-content">
        <div>
          <img src={equipoImg} alt="Equipo de Zoom TV" className="nosotros-image" />
        </div>
        <div className="nosotros-text">
          <h2>Nuestra Historia</h2>
          <p>Zoom TV Canal 10 nació en 2005 con la misión de llevar información veraz y entretenimiento de calidad a nuestros televidentes. Desde entonces, hemos crecido para convertirnos en uno de los canales más importantes de la región.</p>
          <p>Nuestro equipo está compuesto por profesionales apasionados por el periodismo, la producción audiovisual y la innovación tecnológica.</p>
          <h2>Nuestra Misión</h2>
          <p>Informar, educar y entretener a nuestra audiencia con contenido de alta calidad, manteniendo siempre los más altos estándares periodísticos y éticos.</p>
        </div>
      </div>

      <div className="nosotros-team">
        <h2>Conoce Nuestro Equipo</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nosotros; 
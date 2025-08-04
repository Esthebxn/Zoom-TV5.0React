import React, { useState } from 'react';
import './Programacion.css';
import React from 'react';

const Programacion = () => {
  const [activeDay, setActiveDay] = useState('Lunes');

  const programacion = {
    Lunes: [
      { time: '06:00', title: 'Despierta con Zoom', description: 'Noticias matutinas con Carlos y María' },
      { time: '09:00', title: 'Zoom Noticias', description: 'Actualidad nacional e internacional' },
      { time: '12:00', title: 'Mediodía en Zoom', description: 'Resumen informativo' },
      { time: '15:00', title: 'Telenovela: Amor Secreto', description: 'Capítulo del día' },
      { time: '18:00', title: 'Zoom Deportes', description: 'Lo último en deportes' },
    ],
    Martes: [
      { time: '06:00', title: 'Despierta con Zoom', description: 'Noticias matutinas con Carlos y María' },
      { time: '10:00', title: 'Cocina en Casa', description: 'Recetas fáciles con Chef Martínez' },
      { time: '12:00', title: 'Mediodía en Zoom', description: 'Resumen informativo' },
      { time: '16:00', title: 'Documental: Planeta Tierra', description: 'Naturaleza y aventura' },
      { time: '19:00', title: 'Entrevistas Zoom', description: 'Conversaciones con personalidades' },
    ],
    Miércoles: [
      { time: '06:00', title: 'Despierta con Zoom', description: 'Noticias matutinas con Carlos y María' },
      { time: '11:00', title: 'Zoom Salud', description: 'Consejos para una vida saludable' },
      { time: '14:00', title: 'Cine en Zoom', description: 'Película del día' },
      { time: '17:00', title: 'Zoom Tecnología', description: 'Lo último en innovación tecnológica' },
    ],
    Jueves: [
      { time: '06:00', title: 'Despierta con Zoom', description: 'Noticias matutinas con Carlos y María' },
      { time: '09:30', title: 'Zoom Economía', description: 'Análisis económico y financiero' },
      { time: '13:00', title: 'Serie: Detectives Urbanos', description: 'Nuevo episodio' },
      { time: '18:30', title: 'Zoom Cultura', description: 'Eventos culturales y artísticos' },
    ],
    Viernes: [
      { time: '06:00', title: 'Despierta con Zoom', description: 'Noticias matutinas con Carlos y María' },
      { time: '10:00', title: 'Zoom Viajes', description: 'Destinos turísticos y recomendaciones' },
      { time: '15:00', title: 'Concierto en Vivo', description: 'Artistas nacionales e internacionales' },
      { time: '20:00', title: 'Noche de Estrenos', description: 'Estrenos exclusivos' },
    ],
    Sábado: [
      { time: '08:00', title: 'Zoom Infantil', description: 'Programación para niños' },
      { time: '12:00', title: 'Fútbol en Vivo', description: 'Partido de la liga local' },
      { time: '16:00', title: 'Magazine del Sábado', description: 'Variedades y entretenimiento' },
      { time: '21:00', title: 'Cine Nocturno', description: 'Película estelar' },
    ],
    Domingo: [
      { time: '09:00', title: 'Zoom Religión', description: 'Reflexiones espirituales' },
      { time: '11:00', title: 'Eventos Especiales', description: 'Cobertura de eventos' },
      { time: '15:00', title: 'Documental Especial', description: 'Tema de la semana' },
      { time: '19:00', title: 'Resumen Semanal', description: 'Lo mejor de la semana' },
    ],
  };

  return (
    <div className="programacion-container">
      <div className="programacion-header">
        <h1>Programación</h1>
        <p>Consulta nuestra programación semanal y no te pierdas tus programas favoritos</p>
      </div>

      <div className="filter-buttons">
        {Object.keys(programacion).map(day => (
          <button
            key={day}
            className={`filter-button ${activeDay === day ? 'active' : ''}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule">
        <div className="schedule-day">
          <div className="day-header">{activeDay}</div>
          <ul className="programs-list">
            {programacion[activeDay].map((program, index) => (
              <li key={index} className="program-item">
                <div className="program-time">{program.time}</div>
                <div className="program-info">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programacion; 
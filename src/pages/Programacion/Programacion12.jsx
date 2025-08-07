import React, { useState } from 'react';
import './Programacion12.css';

const Programacion12 = () => {
  const [activeDay, setActiveDay] = useState('LUNES');

  const programacion = {
    'LUNES': [
      { time: '06:00 - 06:55', title: 'PUNTUALIZA LA NOTICIA', description: 'JÉSSICA LAVADO' },
      { time: '07:00 - 7:55', title: 'POLÉMICA', description: 'Yulia Luna' },
      { time: '08:00 - 08:55', title: 'MÚSICA LATINOAMERICANA', description: '' },
      { time: '09:00 - 09:25', title: '(ANIME) BUKO NO HERO: T2: 09 - 10', description: '' },
      { time: '10:00 - 10:25', title: 'SERIE ANIME: DEMON SLAYER T1: 22 - 23', description: '' },
      { time: '11:00 - 11:55', title: '(POP & ROCK) 2022 MORAT - DUKI - PARÍS', description: '' },
      { time: '13:00 - 14:55', title: 'CINE ZOOM TV', description: 'LUNES CLÁSICOS 32' },
      { time: '16:00 - 16:55', title: '(POP & ROCK) 2022 MORAT - DUKI - PARÍS', description: '' },
      { time: '18:00 - 18:55', title: 'MÚSICA LATINOAMERICANA', description: '' },
      { time: '19:00 - 19:55', title: 'HCO. 60 MIN', description: 'Mariluz Alegría' },
      { time: '20:00 - 20:55', title: 'PARÉNTESIS', description: 'José Aguirre' },
      { time: '21:00 - 21:55', title: 'THE BOYS T2 - 4', description: '' },
    ],
    'MARTES': [
      { time: '13:00 - 14:55', title: 'CINE ZOOM TV', description: 'MARTES CIENCIA FX 24 / ACCIÓN 23' },
    ],
    'MIÉRCOLES': [
      { time: '13:00 - 14:55', title: 'CINE ZOOM TV', description: 'MIÉRCOLES ANIMADO 54' },
    ],
    'JUEVES': [
      { time: '13:00 - 14:55', title: 'CINE ZOOM TV', description: 'JUEVES DE DRAMA 42' },
    ],
    'VIERNES': [
      { time: '13:00 - 14:55', title: 'CINE ZOOM TV', description: 'VIERNES TERROR 40' },
    ],
    'SABADO': [
      { time: '06:00 - 06:55', title: 'MÚSICA LATINOAMERICANA', description: '' },
      { time: '08:00 - 08:55', title: 'EXPANSE T5 5 - 6', description: '' },
      { time: '09:30 - 09:55', title: 'EL MANDALORIANO T3: 7 - 8', description: '' },
      { time: '13:00 - 14:55', title: 'MARATON DEMON SLAYER T1: 1 - 6', description: '' },
      { time: '19:00 - 19:55', title: 'BAILABLES', description: '' },
    ],
    'DOMINGO': [
      { time: '06:00 - 06:55', title: 'ROCK', description: '' },
      { time: '08:00 - 08:55', title: 'EL PLANETA DE LOS SIMIOS 2 - 3', description: '' },
      { time: '09:30 - 09:55', title: 'DOMINGO ROCK', description: '' },
      { time: '13:00 - 14:55', title: 'EL PLANETA DE LOS SIMIOS 2 - 3', description: '' },
      { time: '16:00 - 16:55', title: 'DOMINGO ROCK', description: '' },
      { time: '20:00 - 20:55', title: 'EL PLANETA DE LOS SIMIOS 2 - 3', description: '' },
    ],
  };

  return (
    <div className="programacion-container">
      <div className="programacion-header">
      
        <h2>ZOOM TV, acércate más...</h2>
        <p>(Canal 10 - Megcable)</p>
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
          <table className="programs-table">
            <thead>
              <tr>
                <th>HORA</th>
                <th>PROGRAMA</th>
              </tr>
            </thead>
            <tbody>
              {programacion[activeDay].map((program, index) => (
                <tr key={index} className="program-item">
                  <td className="program-time">{program.time}</td>
                  <td className="program-info">
                    <h3>{program.title}</h3>
                    {program.description && <p>{program.description}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Programacion12; 
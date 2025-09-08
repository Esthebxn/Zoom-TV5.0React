import React, { useState, useEffect, useCallback } from 'react';
import './Programacion12.css';
import { programmingApi } from '../../services/api';

const Programacion12 = () => {
  const [activeDay, setActiveDay] = useState('LUNES');
  const [programacion, setProgramacion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const days = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];

  const loadProgramming = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const programmingData = {};
      
      // Cargar programación para cada día
      for (const day of days) {
        try {
          const response = await programmingApi.getByDay(day);
          if (response.success) {
            programmingData[day] = response.data || [];
          } else {
            console.error(`Error loading programming for ${day}:`, response.message);
            programmingData[day] = [];
          }
        } catch (error) {
          console.error(`Error loading programming for ${day}:`, error);
          programmingData[day] = [];
        }
      }
      
      setProgramacion(programmingData);
    } catch (error) {
      console.error('Error loading programming:', error);
      setError('Error al cargar la programación');
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => {
    loadProgramming();
  }, [loadProgramming]);

  const formatTime = (startTime, endTime) => {
    return `${startTime} - ${endTime}`;
  };

  if (loading) {
    return (
      <div className="programacion-container">
        <div className="programacion-header">
          <h2>ZOOM TV, acércate más...</h2>
          <p>(Canal 10 - Megcable)</p>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando programación...</p>
        </div>
      </div>
    );
  }

  if (error) {
  return (
    <div className="programacion-container">
      <div className="programacion-header">
          <h2>ZOOM TV, acércate más...</h2>
          <p>(Canal 10 - Megcable)</p>
        </div>
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={loadProgramming} className="retry-button">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="programacion-container">
      <div className="programacion-header">
        <h2>ZOOM TV, acércate más...</h2>
        <p>(Canal 10 - Megcable)</p>
      </div>

      <div className="filter-buttons">
        {days.map(day => (
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
              {programacion[activeDay] && programacion[activeDay].length > 0 ? (
                programacion[activeDay].map((program, index) => (
                  <tr key={program._id || index} className="program-item">
                    <td className="program-time">
                      {formatTime(program.startTime, program.endTime)}
                    </td>
                  <td className="program-info">
                    <h3>{program.title}</h3>
                    {program.description && <p>{program.description}</p>}
                      {program.category && (
                        <span className="program-category">{program.category}</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="no-programs">
                    No hay programación disponible para {activeDay}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Programacion12; 
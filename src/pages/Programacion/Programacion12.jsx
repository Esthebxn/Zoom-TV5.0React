import React, { useState, useEffect } from 'react';
import { programmingApi } from '../../services/api';
import './Programacion12.css';

const Programacion12 = () => {
  const [activeDay, setActiveDay] = useState('LUNES');
  const [programacion, setProgramacion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const days = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];

  // Función para cargar la programación semanal
  const loadWeeklyProgramming = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await programmingApi.getWeekly();
      
      if (response.success && response.data) {
        setProgramacion(response.data);
      } else {
        setError('No se pudo cargar la programación');
      }
    } catch (error) {
      console.error('Error loading programming:', error);
      setError('Error al cargar la programación');
    } finally {
      setLoading(false);
    }
  };

  // Función para cargar programación por día específico
  const loadDayProgramming = async (day) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await programmingApi.getByDay(day);
      
      if (response.success && response.data) {
        setProgramacion(prev => ({
          ...prev,
          [day]: response.data
        }));
      } else {
        setError(`No se pudo cargar la programación de ${day}`);
      }
    } catch (error) {
      console.error(`Error loading ${day} programming:`, error);
      setError(`Error al cargar la programación de ${day}`);
    } finally {
      setLoading(false);
    }
  };

  // Cargar programación al montar el componente
  useEffect(() => {
    loadWeeklyProgramming();
  }, []);

  // Función para formatear el tiempo
  const formatTime = (startTime, endTime) => {
    return `${startTime} - ${endTime}`;
  };

  // Función para manejar el cambio de día
  const handleDayChange = (day) => {
    setActiveDay(day);
    
    // Si no tenemos datos para ese día, cargarlos
    if (!programacion[day] || programacion[day].length === 0) {
      loadDayProgramming(day);
    }
  };

  // Función para renderizar la tabla de programación
  const renderProgrammingTable = (dayPrograms) => {
    if (!dayPrograms || dayPrograms.length === 0) {
      return (
        <tr>
          <td colSpan="2" className="no-programs">
            No hay programación disponible para este día
          </td>
        </tr>
      );
    }

    return dayPrograms.map((program, index) => (
      <tr key={program._id || index} className="program-item">
        <td className="program-time">
          {formatTime(program.startTime, program.endTime)}
        </td>
        <td className="program-info">
          <h3>{program.title}</h3>
          {program.description && <p>{program.description}</p>}
          {program.category && <p className="program-category">{program.category}</p>}
        </td>
      </tr>
    ));
  };

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
            onClick={() => handleDayChange(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule">
        <div className="schedule-day">
          <div className="day-header">{activeDay}</div>
          
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Cargando programación...</p>
            </div>
          ) : error ? (
            <div className="error-container">
              <p className="error-message">{error}</p>
              <button 
                onClick={() => loadDayProgramming(activeDay)}
                className="retry-button"
              >
                Reintentar
              </button>
            </div>
          ) : (
            <table className="programs-table">
              <thead>
                <tr>
                  <th>HORA</th>
                  <th>PROGRAMA</th>
                </tr>
              </thead>
              <tbody>
                {renderProgrammingTable(programacion[activeDay])}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programacion12; 
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Programacion12.css';
import { horarioApi } from '../../services/api';

const Programacion12 = () => {
  const [activeDay, setActiveDay] = useState('LUNES');
  const [programacion, setProgramacion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const days = useMemo(() => ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'], []);

  const loadProgramming = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Cargando programación...');
      
      // Obtener toda la programación de una vez
      const response = await horarioApi.getAll();
      
      console.log('Respuesta de la API:', response);
      
      if (response.success && response.data) {
        console.log('Datos recibidos:', response.data);
        
        // Agrupar programas por día
        const programmingData = {};
        
        // Inicializar arrays vacíos para cada día
        days.forEach(day => {
          programmingData[day] = [];
        });
        
        // Agrupar programas por día y filtrar solo los activos
        response.data.forEach(program => {
          console.log('Procesando programa:', program);
          if (program.isActive && programmingData[program.day]) {
            programmingData[program.day].push(program);
          }
        });
        
        // Ordenar programas por hora de inicio dentro de cada día
        days.forEach(day => {
          programmingData[day].sort((a, b) => {
            return a.startTime.localeCompare(b.startTime);
          });
        });
        
        console.log('Datos agrupados:', programmingData);
        setProgramacion(programmingData);
      } else {
        console.error('Error loading programming:', response);
        
        // Datos de ejemplo como fallback
        console.log('Usando datos de ejemplo...');
        const programmingData = {
          'LUNES': [
            {
              _id: 'ejemplo-1',
              title: 'Noticias Matutinas',
              description: 'Resumen de las noticias más importantes del día',
              startTime: '08:00',
              endTime: '09:00',
              category: 'Noticias',
              type: 'Programa en vivo',
              isActive: true,
              color: '#3B82F6'
            }
          ],
          'MARTES': [
            {
              _id: 'ejemplo-2',
              title: 'Música del Recuerdo',
              description: 'Los mejores éxitos de décadas pasadas',
              startTime: '10:00',
              endTime: '11:00',
              category: 'Música',
              type: 'Música',
              isActive: true,
              color: '#3B82F6'
            }
          ],
          'MIÉRCOLES': [],
          'JUEVES': [],
          'VIERNES': [],
          'SÁBADO': [],
          'DOMINGO': []
        };
        
        setProgramacion(programmingData);
        setError('Usando datos de ejemplo - Error al cargar desde la API');
      }
    } catch (error) {
      console.error('Error loading programming:', error);
      setError('Error al cargar la programación: ' + error.message);
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
                      <div className="program-header">
                        <h3>{program.title}</h3>
                        <div className="program-badges">
                          <span 
                            className="program-category" 
                            style={{ backgroundColor: program.color || '#3B82F6' }}
                          >
                            {program.category}
                          </span>
                          <span className="program-type">{program.type}</span>
                        </div>
                      </div>
                      {program.description && (
                        <p className="program-description">{program.description}</p>
                      )}
                      {program.notes && (
                        <p className="program-notes">
                          <small>Notas: {program.notes}</small>
                        </p>
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
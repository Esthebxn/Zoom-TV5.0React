import React, { useState, useEffect } from 'react';
import './ZoomApp.css';

const ZoomApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fecha objetivo: 1 de Septiembre de 2025
  const targetDate = new Date('2025-09-01T00:00:00').getTime();

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Actualizar countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setCountdown({ 
          days: days < 0 ? 0 : days, 
          hours: hours < 0 ? 0 : hours, 
          minutes: minutes < 0 ? 0 : minutes, 
          seconds: seconds < 0 ? 0 : seconds 
        });
      } else {
        // Cuando la cuenta regresiva termina
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Iniciar el intervalo de cuenta regresiva
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Llamar inmediatamente

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

  const handleNotify = () => {
    alert('¡Te notificaremos cuando la App de Zoom TV esté disponible! 📱\n\nMantente conectado para ser el primero en descargarla.');
  };

  return (
    <div className="zoom-app-container">
      <div className="iphone-mockup">
        <div className="iphone-notch"></div>
        <div className="iphone-screen">
          <div className="app-container">
            <header className="app-header">
              <div className="logo-container">
                <h1 className="logo-text">ZOOM TV</h1>
                <p className="logo-subtext">Canal 10 - Megacable</p>
              </div>
            </header>

            <main className="coming-soon-container">
              <div className="coming-soon-content">
                {isLoading ? (
                  <div className="loading-container">
                    <div className="apple-spinner"></div>
                    <p className="loading-text">Cargando...</p>
                  </div>
                ) : (
                  <>
                    <h2 className="coming-soon-title">PRÓXIMAMENTE</h2>
                    <p className="coming-soon-text">
                      Estamos preparando una experiencia increíble para ti
                    </p>
                    
                    <div className="countdown">
                      <div className="countdown-item">
                        <span className="countdown-number">
                          {countdown.days.toString().padStart(2, '0')}
                        </span>
                        <span className="countdown-label">Días</span>
                      </div>
                      
                      <div className="countdown-separator">:</div>
                      
                      <div className="countdown-item">
                        <span className="countdown-number">
                          {countdown.hours.toString().padStart(2, '0')}
                        </span>
                        <span className="countdown-label">Horas</span>
                      </div>
                      
                      <div className="countdown-separator">:</div>
                      
                      <div className="countdown-item">
                        <span className="countdown-number">
                          {countdown.minutes.toString().padStart(2, '0')}
                        </span>
                        <span className="countdown-label">Min</span>
                      </div>
                      
                      <div className="countdown-separator">:</div>
                      
                      <div className="countdown-item">
                        <span className="countdown-number">
                          {countdown.seconds.toString().padStart(2, '0')}
                        </span>
                        <span className="countdown-label">Seg</span>
                      </div>
                    </div>
                    
                    <button 
                      className="ios-notify-btn" 
                      onClick={handleNotify}
                      aria-label="Notificar cuando esté disponible"
                    >
                      📱 Notificarme
                    </button>
                  </>
                )}
              </div>
            </main>

            <footer className="app-footer">
              <p>© {new Date().getFullYear()} Zoom TV - Todos los derechos reservados</p>
              <div className="social-icons">
                <a href="https://facebook.com/zoomtv" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="icon">📘</span>
                </a>
                <a href="https://twitter.com/zoomtv" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <span className="icon">🐦</span>
                </a>
                <a href="https://instagram.com/zoomtv" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className="icon">📸</span>
                </a>
                <a href="https://youtube.com/zoomtv" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <span className="icon">📺</span>
                </a>
              </div>
            </footer>
          </div>
        </div>
        <div className="iphone-home-indicator"></div>
      </div>
    </div>
  );
};

export default ZoomApp; 
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
  const targetDate = new Date('2025-09-01T00:00:00-05:00').getTime(); // Fecha objetivo

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000); // Actualiza cada segundo
    updateCountdown(); // Actualiza inmediatamente al montar

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

  const handleNotify = () => {
    alert('Te notificaremos cuando Zoom TV esté disponible. ¡Gracias!');
  };

  return (
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
                <div className="apple-spinner"></div>
              ) : (
                <>
                  <h2 className="coming-soon-title">PRÓXIMAMENTE</h2>
                  <p className="coming-soon-text">Estamos preparando una experiencia increíble para ti</p>
                  
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
                  
                  <button className="ios-notify-btn" onClick={handleNotify}>
                    Notificarme cuando esté disponible
                  </button>
                </>
              )}
            </div>
          </main>

          <footer className="app-footer">
            <p>© {new Date().getFullYear()} Zoom TV</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div className="iphone-home-indicator"></div>
    </div>
  );
};

export default ZoomApp; 
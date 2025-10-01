import React, { useState, useRef } from 'react';
import { FaExpand } from 'react-icons/fa';
import './Live9.css';

const Live9 = () => {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="retro-tv-container">
      {/* Marco de TV retro años 70 */}
      <div className="retro-tv-frame">
        {/* Parte superior de la TV con controles */}
        <div className="tv-top-panel">
          <div className="tv-brand">ZOOM TV</div>
          <div className="tv-controls-horizontal">
            <div className="control-dial">
              <span className="dial-label">VOL</span>
              <div className="dial-knob"></div>
            </div>
            <div className="control-dial">
              <span className="dial-label">CH</span>
              <div className="dial-knob"></div>
            </div>
            <div className="power-switch">
              <div className="switch"></div>
              <span className="switch-label">POWER</span>
            </div>
          </div>
        </div>

        {/* Pantalla de TV */}
        <div className="retro-tv-screen">
          <div
            className="live-stream-container"
            ref={containerRef}
          >
            {/* Marca de agua */}
            <div className="channel-brand">
              <span className="live-badge">EN VIVO</span>
            </div>

            {/* Contenedor del iframe de Kick */}
            <div className="video-wrapper">
              <iframe
                src="https://kick.com/gzoomtv-10"  // 👈 pon aquí tu canal Kick 
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Kick Live Stream"
              ></iframe>
            </div>

            {/* Botón pantalla completa */}
            <div className="video-controls">
              <button
                onClick={toggleFullscreen}
                className="control-btn"
                aria-label="Pantalla completa"
              >
                <FaExpand />
              </button>
            </div>
          </div>
        </div>

        {/* Base de la TV */}
        <div className="tv-base">
          <div className="tv-speakers">
            <div className="speaker-grill"></div>
            <div className="speaker-grill"></div>
          </div>
        </div>

        {/* Logotipos laterales */}
        <div className="tv-logo left-logo">
          <div className="logo-placeholder">
            <span>LOGO</span>
          </div>
        </div>
        <div className="tv-logo right-logo">
          <div className="logo-placeholder">
            <span>LOGO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live9; 
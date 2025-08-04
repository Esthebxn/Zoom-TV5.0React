import React, { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';
import './Live9.css';

const LiveStream = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div 
      className="live-stream-container" 
      onMouseEnter={() => setShowControls(true)} 
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Marca de agua del canal */}
      <div className="channel-brand">
        <img 
          src="https://example.com/zoom-tv-logo.png" 
          alt="Zoom TV Logo" 
          className="channel-logo" 
        />
        <span className="live-badge">EN VIVO</span>
      </div>

      {/* Contenedor del video */}
      <div className="video-wrapper">
        {/* Player real se integraría aquí */}
        <div className="video-placeholder">
          <h2>ZOOM TV EN VIVO</h2>
          <p>Transmisión en directo</p>
        </div>

        {/* Controles del reproductor */}
        {showControls && (
          <div className="video-controls">
            <button 
              onClick={togglePlay} 
              className="control-btn"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button 
              onClick={toggleMute} 
              className="control-btn"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button 
              className="control-btn"
              aria-label="Pantalla completa"
            >
              <FaExpand />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveStream; 
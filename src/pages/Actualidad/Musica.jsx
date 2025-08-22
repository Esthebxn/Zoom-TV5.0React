import React, { useState, useEffect, useRef } from 'react';
import './Musica.css';

const Musica = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const playerRef = useRef(null);
  
  // Datos de canciones en tendencia con IDs de YouTube
  const tracks = [
    {
      id: 1,
      title: "Flowers",
      artist: "Miley Cyrus",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a935e865042a04d01d7a7b8e",
      category: "pop",
      youtubeId: "G7KNmW9a75Y",
      description: "Canción de empoderamiento sobre seguir adelante después de una ruptura."
    },
    {
      id: 2,
      title: "Kill Bill",
      artist: "SZA",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
      category: "r&b",
      youtubeId: "v6HBZC9pZHQ",
      description: "Una confesión oscura y pegadiza sobre los pensamientos posteriores a una ruptura."
    },
    {
      id: 3,
      title: "As It Was",
      artist: "Harry Styles",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02378c8eab493a43b2b4a7b242",
      category: "pop",
      youtubeId: "H5v3kku4y6Q",
      description: "Reflexión sobre el cambio y la nostalgia de tiempos pasados."
    },
    {
      id: 4,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02bb54dde68cd23e2a268ae0f5",
      category: "pop",
      youtubeId: "b1kbLwvqugk",
      description: "Una introspección honesta sobre las inseguridades y luchas personales."
    },
    {
      id: 5,
      title: "Unholy",
      artist: "Sam Smith, Kim Petras",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d5f7b42a8e6bb5bd1681a1e6",
      category: "pop",
      youtubeId: "Uq9gPaIzbe8",
      description: "Un tema provocativo que explora secretos y tentaciones."
    },
    {
      id: 6,
      title: "Creepin'",
      artist: "Metro Boomin, The Weeknd, 21 Savage",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be",
      category: "hiphop",
      youtubeId: "y5YtzzZvWkY",
      description: "Una colaboración atmosférica con sonidos hipnóticos y versos memorables."
    },
    {
      id: 7,
      title: "Calm Down",
      artist: "Rema, Selena Gomez",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02c5f4c4ff0434b1cb4318070e",
      category: "afrobeats",
      youtubeId: "VafTMsrnSTU",
      description: "Un éxito de afrobeats con un ritmo contagioso y voces seductoras."
    },
    {
      id: 8,
      title: "Die For You",
      artist: "The Weeknd",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
      category: "r&b",
      youtubeId: "4NRXx6U8ABQ",
      description: "Una declaración de amor intensa con la producción característica de The Weeknd."
    }
  ];

  const handleTrackClick = (track) => {
    // Si ya está reproduciendo esta canción, pausarla
    if (currentTrack && currentTrack.id === track.id) {
      setCurrentTrack(null);
      setIsPlayerVisible(false);
    } else {
      setCurrentTrack(track);
      setIsPlayerVisible(true);
      // Scroll suave hacia el reproductor
      setTimeout(() => {
        playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const closePlayer = () => {
    setCurrentTrack(null);
    setIsPlayerVisible(false);
  };

  // Cerrar el reproductor con la tecla Escape
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        closePlayer();
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="musica-container">
      {/* Header */}
      <header className="header-musica">
        <h1>Música en Tendencia</h1>
        <p>Descubre los éxitos musicales del momento. Haz clic en cualquier canción para reproducirla.</p>
      </header>

      {/* Reproductor de YouTube */}
      <div ref={playerRef} className={`youtube-player ${isPlayerVisible ? 'visible' : ''}`}>
        {currentTrack && (
          <>
            <button className="close-player" onClick={closePlayer} aria-label="Cerrar reproductor">
              &times;
            </button>
            <div className="player-header">
              <h2>Reproduciendo ahora</h2>
              <div className="track-info">
                <img src={currentTrack.imageUrl} alt={currentTrack.title} className="now-playing-img" />
                <div className="track-details">
                  <h3 className="now-playing-title">{currentTrack.title}</h3>
                  <p className="now-playing-artist">{currentTrack.artist}</p>
                </div>
              </div>
            </div>
            <div className="player-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${currentTrack.youtubeId}?autoplay=1`}
                title={`YouTube video player - ${currentTrack.title} by ${currentTrack.artist}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="player-footer">
              <p className="track-description">{currentTrack.description}</p>
              <div className="player-controls">
                <span className="category-badge">{currentTrack.category}</span>
                <a
                  href={`https://www.youtube.com/watch?v=${currentTrack.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-link"
                >
                  Ver en YouTube
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Grid de canciones */}
      <div className="musica-lista">
        {tracks.map((track) => (
          <div 
            key={track.id} 
            className={`musica-item ${currentTrack && currentTrack.id === track.id ? 'active' : ''}`}
            onClick={() => handleTrackClick(track)}
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleTrackClick(track)}
          >
            <div className="musica-imagen">
              <img 
                src={track.imageUrl} 
                alt={track.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300/1a202c/e2e8f0?text=🎵';
                }}
              />
              <div className="play-overlay">
                <span className="play-icon">
                  {currentTrack && currentTrack.id === track.id ? '❚❚' : '▶'}
                </span>
              </div>
              {currentTrack && currentTrack.id === track.id && (
                <div className="playing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
            <div className="musica-contenido">
              <h3 className="musica-titulo">{track.title}</h3>
              <p className="musica-artista">{track.artist}</p>
              <div className="musica-meta">
                <span className="musica-categoria">{track.category}</span>
                <span className="duration-badge">3:45</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje cuando no hay canción seleccionada */}
      {!currentTrack && (
        <div className="no-track-selected">
          <p>Selecciona una canción para comenzar a reproducir música</p>
        </div>
      )}
    </div>
  );
};

export default Musica; 
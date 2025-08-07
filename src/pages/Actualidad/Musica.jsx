import React, { useState, useEffect } from 'react';
import './Musica.css';

const Musica = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener música popular desde Last.fm API
  const fetchMusic = async () => {
    try {
      const response = await fetch(
        'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=TU_API_KEY&format=json&limit=8'
      );
      
      if (!response.ok) throw new Error('Error al cargar música');
      
      const data = await response.json();
      setTracks(data.tracks.track);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  if (loading) return <div className="loading">Cargando música...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="music-container">
      <h1>Descubre Música</h1>
      <div className="music-grid">
        {tracks.map((track, index) => (
          <div key={index} className="music-card">
            <div className="image-container">
              <img 
                src={track.image?.[2]?.['#text'] || 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'} 
                alt={track.name}
                onError={(e) => {
                  e.target.src = 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png';
                }}
              />
            </div>
            <div className="music-info">
              <h3>{track.name}</h3>
              <p>{track.artist.name}</p>
              <a 
                href={track.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-button"
              >
                Escuchar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musica;
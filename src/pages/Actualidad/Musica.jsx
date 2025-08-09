import React from 'react';
import './Musica.css';

const Musica = () => {
  // Datos de canciones en tendencia (puedes actualizarlos manualmente)
  const tracks = [
    {
      id: 1,
      title: "Flowers",
      artist: "Miley Cyrus",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a935e865042a04d01d7a7b8e",
      spotifyUrl: "https://open.spotify.com/track/4DHcnVTT87F0zZhRPYmZ3B"
    },
    {
      id: 2,
      title: "Kill Bill",
      artist: "SZA",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
      spotifyUrl: "https://open.spotify.com/track/3OHfY25tqY28d16oZczHc8"
    },
    {
      id: 3,
      title: "As It Was",
      artist: "Harry Styles",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02378c8eab493a43b2b4a7b242",
      spotifyUrl: "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7"
    },
    {
      id: 4,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02bb54dde68cd23e2a268ae0f5",
      spotifyUrl: "https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu"
    },
    {
      id: 5,
      title: "Unholy",
      artist: "Sam Smith, Kim Petras",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d5f7b42a8e6bb5bd1681a1e6",
      spotifyUrl: "https://open.spotify.com/track/3nqQXoyQOWXiESFLlDF1hG"
    },
    {
      id: 6,
      title: "Creepin'",
      artist: "Metro Boomin, The Weeknd, 21 Savage",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be",
      spotifyUrl: "https://open.spotify.com/track/7d0W3QlDs9JV0IamcoPmdX"
    },
    {
      id: 7,
      title: "Calm Down",
      artist: "Rema, Selena Gomez",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02c5f4c4ff0434b1cb4318070e",
      spotifyUrl: "https://open.spotify.com/track/0WtM2NBVQNNJLh6scP13H8"
    },
    {
      id: 8,
      title: "Die For You",
      artist: "The Weeknd",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
      spotifyUrl: "https://open.spotify.com/track/2LBqCSwhJGcFQeTHMVGwy3"
    }
  ];

  return (
    <div className="music-container">
      <h1>Música en Tendencia</h1>
      <div className="music-grid">
        {tracks.map((track) => (
          <div key={track.id} className="music-card">
            <div className="image-container">
              <img 
                src={track.imageUrl} 
                alt={track.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300';
                }}
              />
            </div>
            <div className="music-info">
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
              <a 
                href={track.spotifyUrl} 
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
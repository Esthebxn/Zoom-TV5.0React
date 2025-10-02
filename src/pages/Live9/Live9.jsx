import React, { useRef, useState, useEffect } from "react";
import "./Live9.css";

const Live9 = () => {
  const containerRef = useRef(null);
  const [isLive, setIsLive] = useState(true);

  // Chequear si el canal está en vivo
  useEffect(() => {
    const checkStream = async () => {
      try {
        const res = await fetch("https://kick.com/api/v2/channels/esthebxn");
        const data = await res.json();

        if (data && data.livestream && data.livestream.is_live) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
      } catch (err) {
        console.error("Error verificando transmisión:", err);
        setIsLive(false);
      }
    };

    checkStream();
    const interval = setInterval(checkStream, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live9-container">
      <div className="live9-wrapper" ref={containerRef}>
        <div className="live9-screen">
          {/* Branding fijo */}
          <div className="live9-channel-brand">📺 Zoom TV Canal 10</div>

          {isLive ? (
            <iframe
              src="https://player.kick.com/esthebxn"
              className="live9-video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Zoom TV Live Stream"
            ></iframe>
          ) : (
            <div className="live9-offline-message">
              <h2>🔴 El canal está offline</h2>
              <p>Vuelve más tarde para ver la transmisión en vivo.</p>
              <img
                src="/offline.png"
                alt="Canal Offline"
                className="live9-offline-image"
              />
            </div>
          )}
        </div>

        {/* 🚀 Slider de redes sociales */}
        <div className="live9-social-slider">
          <div className="live9-slider-track">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">📘 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">🎵 TikTok</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️ YouTube</a>
            <a href="https://kick.com/esthebxn" target="_blank" rel="noreferrer">💚 Kick</a>
            {/* Se repiten para el loop infinito */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">📘 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">🎵 TikTok</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️ YouTube</a>
            <a href="https://kick.com/esthebxn" target="_blank" rel="noreferrer">💚 Kick</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live9; 
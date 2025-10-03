import React from "react";
import "./Live9.css";

const Live9 = () => {
  return (
    <div className="live9-container-alt">
      <div className="live9-player-alt">
        {/* Branding dentro del reproductor */}
        <div className="live9-brand-inside">📺 Zoom TV Canal 10</div>

        {/* Iframe directo del canal */}
        <iframe
          src="https://kick.com/alfondohaysitio"
          className="live9-video-alt"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Zoom TV Live Stream"
        ></iframe>
      </div>
    </div>
  );
};

export default Live9;
 

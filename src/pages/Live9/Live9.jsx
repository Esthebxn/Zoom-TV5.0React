import React, { useRef } from "react";
import "./Live9.css";

const Live9 = () => {
  const containerRef = useRef(null);

  return (
    <div className="tv-live-container">
      <div className="tv-wrapper" ref={containerRef}>
        <div className="tv-screen">
          <iframe
            src="https://player.kick.com/ptv5?autoplay=true"
            className="pure-video"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Zoom TV Live Stream"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Live9;
 
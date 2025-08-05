import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaRedo } from 'react-icons/fa';
import Hls from 'hls.js';
import './live9.css';

const Live9 = () => {
  // Configuración del stream (no visible en pantalla)
  const PLAYBACK_URL = "https://fa723fc1b171.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527374.channel.YOUR_CHANNEL_ID.m3u8";

  // Estados del reproductor
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    isMuted: false,
    showControls: false,
    isFullscreen: false,
    error: null,
    loading: true,
    hlsSupported: true,
    streamActive: false,
    retryCount: 0
  });

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hlsRef = useRef(null);
  const retryTimerRef = useRef(null);

  // Inicializar el reproductor HLS
  const initPlayer = () => {
    setPlayerState(prev => ({ ...prev, loading: true, error: null }));

    // Limpiar instancia anterior de HLS
    if (hlsRef.current) {
      hlsRef.current.destroy();
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxMaxBufferLength: 30,
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferLength: 30,
        enableWorker: true,
        lowLatencyMode: true
      });
      hlsRef.current = hls;

      hls.loadSource(PLAYBACK_URL);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play()
          .then(() => {
            setPlayerState({
              loading: false,
              isPlaying: true,
              error: null,
              streamActive: true,
              retryCount: 0
            });
          })
          .catch(err => {
            console.error("Error al reproducir:", err);
            handleStreamError("Error al iniciar la reproducción");
          });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch(data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              handleStreamError("Error en la transmisión");
              break;
          }
        }
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // Soporte nativo para Safari
      videoRef.current.src = PLAYBACK_URL;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play()
          .then(() => {
            setPlayerState({
              loading: false,
              isPlaying: true,
              error: null,
              streamActive: true
            });
          })
          .catch(err => {
            console.error("Error al reproducir:", err);
            handleStreamError("Error al iniciar la reproducción");
          });
      });
    } else {
      setPlayerState({
        loading: false,
        hlsSupported: false,
        error: "Tu navegador no soporta este formato de video"
      });
    }
  };

  // Manejo de errores con reintento
  const handleStreamError = (errorMsg) => {
    const maxRetries = 3;
    const retryDelay = 3000; // 3 segundos
    
    if (playerState.retryCount < maxRetries) {
      setPlayerState(prev => ({
        ...prev,
        loading: true,
        error: `${errorMsg}`,
        retryCount: prev.retryCount + 1
      }));

      retryTimerRef.current = setTimeout(() => {
        initPlayer();
      }, retryDelay);
    } else {
      setPlayerState({
        loading: false,
        error: "No se pudo conectar con la transmisión",
        streamActive: false,
        retryCount: 0
      });
    }
  };

  // Control del reproductor
  const togglePlay = () => {
    if (videoRef.current) {
      if (playerState.isPlaying) {
        videoRef.current.pause();
        setPlayerState(prev => ({ ...prev, isPlaying: false }));
      } else {
        videoRef.current.play()
          .then(() => setPlayerState(prev => ({ ...prev, isPlaying: true })))
          .catch(err => {
            console.error("Error al reproducir:", err);
            setPlayerState(prev => ({ ...prev, error: "Error al reanudar la reproducción" }));
          });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !playerState.isMuted;
      setPlayerState(prev => ({ ...prev, isMuted: !playerState.isMuted }));
    }
  };

  const toggleFullscreen = () => {
    if (!playerState.isFullscreen) {
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
    setPlayerState(prev => ({ ...prev, isFullscreen: !playerState.isFullscreen }));
  };

  const reloadStream = () => {
    clearTimeout(retryTimerRef.current);
    setPlayerState(prev => ({ ...prev, loading: true, error: null, retryCount: 0 }));
    initPlayer();
  };

  // Efectos iniciales
  useEffect(() => {
    const handleFullscreenChange = () => {
      setPlayerState(prev => ({ 
        ...prev, 
        isFullscreen: !!document.fullscreenElement || 
                     !!document.webkitFullscreenElement || 
                     !!document.msFullscreenElement 
      }));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    // Inicializar el reproductor
    initPlayer();

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);

      clearTimeout(retryTimerRef.current);

      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      className="live-stream-container"
      ref={containerRef}
      onMouseEnter={() => setPlayerState(prev => ({ ...prev, showControls: true }))}
      onMouseLeave={() => setPlayerState(prev => ({ ...prev, showControls: false }))}
    >
      {/* Marca de agua del canal - Solo muestra EN VIVO */}
      <div className="channel-brand">
        <span className="live-badge">EN VIVO</span>
      </div>

      {/* Contenedor del video */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls={false}
          autoPlay
          muted={playerState.isMuted}
          playsInline
        />

        {/* Estado de carga */}
        {playerState.loading && (
          <div className="stream-status">
            <div className="loading-spinner"></div>
            <p>{playerState.error || 'Cargando transmisión...'}</p>
          </div>
        )}

        {/* Mensaje de error */}
        {!playerState.loading && playerState.error && (
          <div className="stream-status error">
            <p>{playerState.error}</p>
            <button onClick={reloadStream} className="retry-btn">
              <FaRedo /> Reintentar
            </button>
          </div>
        )}

        {/* Controles del reproductor */}
        {playerState.showControls && !playerState.loading && !playerState.error && playerState.streamActive && (
          <div className="video-controls">
            <button 
              onClick={togglePlay} 
              className="control-btn"
              aria-label={playerState.isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {playerState.isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button 
              onClick={toggleMute} 
              className="control-btn"
              aria-label={playerState.isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {playerState.isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button 
              onClick={toggleFullscreen}
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

export default Live9;
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaRedo } from 'react-icons/fa';
import Hls from 'hls.js';
import './Live9.css';

const Live9 = () => {
  // Configuración del stream
  const PLAYBACK_URL = "https://sae12.playlist.live-video.net/v1/playlist/CqIGJyM_GIMjlc_nAqzEZuokbV9EZ6USN3gpD1oYFGotbcDdicD6RkzIbXMYsSXvRvCbuU43KDdi-x19E1LHKeIzzB14NHSPySGcFLVeR4uMi_uRGo1xkpq7F3ap3F3OuxG7-L0qMuHRx6_J3Phb59747AOjHsT14ZmBF7hWi1UGmDnV4Ndi_LmNJbv2rycGG72G49CxDZ6bCPEaKy7PGIdbbcvxzQP0l_xKIsRCVnSD-Y5_QUIAMIULT5nzP_xixu0Z6FhC44FTSCb-zlfXfV-nQHyItxH79Iw3LPANDOzhedQe4ftsvRmJZr2jzDU4uIesM2MX5VEeP2wo3STZGThJkTk5cPpg4SBik0xsdOFKv70X6mzUM1d6Fl0tAdxtsrepE3bViNUPjq_BZrHK4H1F0EivFq3hD8YP8AMgth5L2RlgmL3XFMWm88dfcVgqanPmMdJ7uUjG3N6O2CI7-mGtcVO7yCH6eDcyiWKEWNGUWo3FMW9h1v8o4ODJjGfzPkFIQW0YuXCvtvfTqVYzz6Mr7_TwFrFn0ZLGHuTzfV0WbkuN-uM3UL1sa1Jfh_3qR0YSY-wjGcTJibklUFbq44iEVoEsUfOaUNLAkVykqluo-GLZYRjbj1Y8XrGRlYk8vTbv2GWm9G1Avti9lAmelHokMP__ibPHxuIGW_lRn-meNdvNGbTpePkFrO8sWLy1zvFhxgD-qVREP6mwcZGAYjgbR9Eec_MDz_UQnxjzJPFpOXg_p8Amo3SjfG3zbHDqH7gqZoxUXenDcjQKnlQsso8ttYth0aJju7LE7n2Yk4OpVjuRMLVZ3ZbXjhGPnGBnX-ouuZRHEAXSs3tDWdbUJHsHIUqKnet6Ep0ccWEIuxOtPxAgD01ftgttP-9Q7UBd2_tpuOMni_2JbBVXDNI4L36z9cR-9yONRopsx2YTpqA8PLuSJ2kTzcCBg7GqT7dc9uK_oveBynbwrFdwAmICI5-xJuz7WXSAHLNbmi0APf8fojWzaZM3KqLhfqf2okqgn4VuF-MAuSFycIJ3VWwTnhcFF0TcdyD2585g49HN6_b73ViHVxoM3EuL6D2wSmlS2D4rIAEqCXVzLWVhc3QtMjCWDQ.m3u8";

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
    const retryDelay = 3000;
    
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
  }, [initPlayer]);

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
            onMouseEnter={() => setPlayerState(prev => ({ ...prev, showControls: true }))}
            onMouseLeave={() => setPlayerState(prev => ({ ...prev, showControls: false }))}
          >
            {/* Marca de agua del canal */}
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

              {/* Mensaje informativo cuando no hay stream configurado */}
              {!playerState.loading && !playerState.error && !playerState.streamActive && (
                <div className="stream-status info">
                  <h3>Transmisión en Vivo</h3>
                  <p>Zoom TV está transmitiendo en vivo desde Kick.com</p>
                  <p><strong>Características del stream:</strong></p>
                  <ul>
                    <li>Formato: HLS (HTTP Live Streaming)</li>
                    <li>Calidad: 720p60</li>
                    <li>Plataforma: Kick.com</li>
                    <li>Latencia: Baja</li>
                  </ul>
                  <p><em>Si no puedes ver la transmisión, verifica tu conexión a internet</em></p>
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
        </div>
        
        {/* Base de la TV */}
        <div className="tv-base">
          <div className="tv-speakers">
            <div className="speaker-grill"></div>
            <div className="speaker-grill"></div>
          </div>
        </div>
        
        {/* Logotipos en los costados */}
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

export default Live9; 
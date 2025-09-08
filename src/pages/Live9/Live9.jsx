import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaRedo } from 'react-icons/fa';
import Hls from 'hls.js';
import { transmisionesApi } from '../../services/api';
import './Live9.css';

const Live9 = () => {
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

  // Estados para la transmisión
  const [transmision, setTransmision] = useState(null);
  const [streamUrl, setStreamUrl] = useState(null);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hlsRef = useRef(null);
  const retryTimerRef = useRef(null);

  // Cargar transmisión en vivo desde la API
  const loadLiveTransmission = async () => {
    try {
      console.log('🔄 Cargando transmisión en vivo...');
      const response = await transmisionesApi.getLive();
      
      if (response.success && response.data) {
        console.log('📺 Transmisión en vivo encontrada:', response.data);
        
        // Solo actualizar si es una transmisión diferente
        if (!transmision || transmision.id !== response.data.id) {
          console.log('🔄 Nueva transmisión detectada, actualizando...');
          setTransmision(response.data);
          setStreamUrl(response.data.url);
          setPlayerState(prev => ({ ...prev, error: null }));
        } else {
          console.log('ℹ️ Misma transmisión, no se actualiza');
        }
      } else {
        console.log('ℹ️ No hay transmisión en vivo activa');
        
        // Solo actualizar si había una transmisión antes
        if (transmision) {
          console.log('🔄 Transmisión detenida, limpiando...');
          setTransmision(null);
          setStreamUrl(null);
          setPlayerState(prev => ({ 
            ...prev, 
            error: 'No hay transmisión en vivo disponible',
            loading: false 
          }));
        }
      }
    } catch (error) {
      console.error('❌ Error cargando transmisión:', error);
      setPlayerState(prev => ({ 
        ...prev, 
        error: 'Error al cargar la transmisión',
        loading: false 
      }));
    }
  };

  // Inicializar el reproductor HLS
  const initPlayer = () => {
    if (!streamUrl) {
      console.log('⚠️ No hay URL de transmisión disponible');
      setPlayerState(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'No hay transmisión disponible' 
      }));
      return;
    }

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

      console.log('🎬 Cargando stream:', streamUrl);
      hls.loadSource(streamUrl);
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
    loadLiveTransmission();
    
    // Polling para verificar transmisiones en vivo cada 5 segundos
    const pollingInterval = setInterval(() => {
      console.log('🔄 Verificando transmisión en vivo...');
      loadLiveTransmission();
    }, 5000);
    
    return () => {
      clearInterval(pollingInterval);
    };
  }, []);

  useEffect(() => {
    if (streamUrl) {
      initPlayer();
    }
  }, [streamUrl]);

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

            {/* Información de la transmisión */}
            {transmision && (
              <div className="transmission-info">
                <h2>{transmision.nombre}</h2>
                <div className="live-indicator">
                  <span className="live-dot"></span>
                  <span>EN VIVO</span>
                </div>
              </div>
            )}

            {/* Indicador de verificación */}
            {playerState.loading && !transmision && (
              <div className="loading-indicator">
                <div className="spinner"></div>
                <span>Verificando transmisión...</span>
              </div>
            )}

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
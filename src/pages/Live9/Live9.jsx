import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaRedo } from 'react-icons/fa';
import Hls from 'hls.js';
import './live9.css';

const Live9 = () => {
  // Configuración del stream - REEMPLAZA CON TU URL REAL DE STREAM
  // Ejemplos de formatos válidos:
  // - HLS: "https://sae12.playlist.live-video.net/v1/playlist/CpAG1Yxa6joV-PM90W4cXVJWkk1ypyO4NeL0C6m9DnRcgF3yE6FBIoIrQ-WqEhRuQOcQ9n9Ou8tOAzsgD-HgO2WvVuvagPP3vtcDvFn2zDAH27AmH0w1rqFxHn_DISVpMs-q6xiAOwNqY3lQxJtmpwik8vl7crOxwdTIrxAHTfEfyZlDfIP-9--TbnlSOKmvOPwjtn3jN3tj6qGVR2sImBjfJx7ps93ruAZqPG43pK5dqks3bq1sHq7GAlppIFJlkV6zNAk98nHb3FHOKa0HmQT18JRoNMi2Z9gWO6SezYzJEChZhcwXJkNKZsAosKEjqiZFvtKiJwfxvj13EyNkCt4C3qMWatXQ0fFgEo1CGlPNAU6EOshr9gutjkWsKG0t6B57ChX3s52yjTkuBWmXxQlZi9CFBrd-NU9-CBvwirGLb9BCqaDAh1oIJNHW1TXsX0jF9pVuocj0qJNp3sAIgUPZx-VPPJ2f-bHk0iDfMi_kB-LlEleXqkRMiYwxkc9CjI99cQ2dOCdX58vfj7RXQZS_y1SBCLwJJEzT5IIO6bWG6s_4MjUww7CwyXF_h17SY8gqU8IxQKEqwW0z-Pp3FCU9UKH2dGXrzo_BNHgFIJLNm3LSig2cBkz0eSyomg74cNHGvBQjqZIzeoQi5kSc4Zupn_dcsxmoU5TXpLkkMmOVJJ8Mk15pxQknjwPk_yMQz96yrAA-EyDo5CHcCiLjfr983b9TUMRljIg__GPoLda4ypNJMcZEEjcJHmTAxDk7WXniPyWaiwJ5UAJ_a-ip1B5FmIhPTB3GHRj8zxSjZhDp9_X0pNiKGUoBAufxqVDZ2cpHUiKkk8HSUmWn7NJzcmPxEcmdOph9rNA0DV-yEeXooOtlYut25Ch-VRRIvl9I2x2n-pCs_fRlY_jpQD6tlKjr5sDayxbWrXexfq84n5SJT2z5fy7B11Xj2QUkFT_DSJuI--fmmJ3YM23rY6TJ9F4ekRfASCm70DJkxCPC0d0nkuUSwIfrTT8K-YiNcxAy5C9rrGYwPTXHKkUCBMz0B01KCRoMmCGe1UGUKnV5yHD6IAEqCXVzLWVhc3QtMjCNDQ.m3u8"
  // - RTMP: "rtmp://tu-servidor.com/live/stream"
  // - YouTube Live: "https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1"
  const PLAYBACK_URL = "https://sae12.playlist.live-video.net/v1/playlist/CpAG1Yxa6joV-PM90W4cXVJWkk1ypyO4NeL0C6m9DnRcgF3yE6FBIoIrQ-WqEhRuQOcQ9n9Ou8tOAzsgD-HgO2WvVuvagPP3vtcDvFn2zDAH27AmH0w1rqFxHn_DISVpMs-q6xiAOwNqY3lQxJtmpwik8vl7crOxwdTIrxAHTfEfyZlDfIP-9--TbnlSOKmvOPwjtn3jN3tj6qGVR2sImBjfJx7ps93ruAZqPG43pK5dqks3bq1sHq7GAlppIFJlkV6zNAk98nHb3FHOKa0HmQT18JRoNMi2Z9gWO6SezYzJEChZhcwXJkNKZsAosKEjqiZFvtKiJwfxvj13EyNkCt4C3qMWatXQ0fFgEo1CGlPNAU6EOshr9gutjkWsKG0t6B57ChX3s52yjTkuBWmXxQlZi9CFBrd-NU9-CBvwirGLb9BCqaDAh1oIJNHW1TXsX0jF9pVuocj0qJNp3sAIgUPZx-VPPJ2f-bHk0iDfMi_kB-LlEleXqkRMiYwxkc9CjI99cQ2dOCdX58vfj7RXQZS_y1SBCLwJJEzT5IIO6bWG6s_4MjUww7CwyXF_h17SY8gqU8IxQKEqwW0z-Pp3FCU9UKH2dGXrzo_BNHgFIJLNm3LSig2cBkz0eSyomg74cNHGvBQjqZIzeoQi5kSc4Zupn_dcsxmoU5TXpLkkMmOVJJ8Mk15pxQknjwPk_yMQz96yrAA-EyDo5CHcCiLjfr983b9TUMRljIg__GPoLda4ypNJMcZEEjcJHmTAxDk7WXniPyWaiwJ5UAJ_a-ip1B5FmIhPTB3GHRj8zxSjZhDp9_X0pNiKGUoBAufxqVDZ2cpHUiKkk8HSUmWn7NJzcmPxEcmdOph9rNA0DV-yEeXooOtlYut25Ch-VRRIvl9I2x2n-pCs_fRlY_jpQD6tlKjr5sDayxbWrXexfq84n5SJT2z5fy7B11Xj2QUkFT_DSJuI--fmmJ3YM23rY6TJ9F4ekRfASCm70DJkxCPC0d0nkuUSwIfrTT8K-YiNcxAy5C9rrGYwPTXHKkUCBMz0B01KCRoMmCGe1UGUKnV5yHD6IAEqCXVzLWVhc3QtMjCNDQ.m3u8";
  
  // IMPORTANTE: Reemplaza la URL de arriba con tu stream real
  // Si no tienes un stream configurado, puedes usar un video de prueba:
  // const PLAYBACK_URL = "https://sae12.playlist.live-video.net/v1/playlist/CpAG1Yxa6joV-PM90W4cXVJWkk1ypyO4NeL0C6m9DnRcgF3yE6FBIoIrQ-WqEhRuQOcQ9n9Ou8tOAzsgD-HgO2WvVuvagPP3vtcDvFn2zDAH27AmH0w1rqFxHn_DISVpMs-q6xiAOwNqY3lQxJtmpwik8vl7crOxwdTIrxAHTfEfyZlDfIP-9--TbnlSOKmvOPwjtn3jN3tj6qGVR2sImBjfJx7ps93ruAZqPG43pK5dqks3bq1sHq7GAlppIFJlkV6zNAk98nHb3FHOKa0HmQT18JRoNMi2Z9gWO6SezYzJEChZhcwXJkNKZsAosKEjqiZFvtKiJwfxvj13EyNkCt4C3qMWatXQ0fFgEo1CGlPNAU6EOshr9gutjkWsKG0t6B57ChX3s52yjTkuBWmXxQlZi9CFBrd-NU9-CBvwirGLb9BCqaDAh1oIJNHW1TXsX0jF9pVuocj0qJNp3sAIgUPZx-VPPJ2f-bHk0iDfMi_kB-LlEleXqkRMiYwxkc9CjI99cQ2dOCdX58vfj7RXQZS_y1SBCLwJJEzT5IIO6bWG6s_4MjUww7CwyXF_h17SY8gqU8IxQKEqwW0z-Pp3FCU9UKH2dGXrzo_BNHgFIJLNm3LSig2cBkz0eSyomg74cNHGvBQjqZIzeoQi5kSc4Zupn_dcsxmoU5TXpLkkMmOVJJ8Mk15pxQknjwPk_yMQz96yrAA-EyDo5CHcCiLjfr983b9TUMRljIg__GPoLda4ypNJMcZEEjcJHmTAxDk7WXniPyWaiwJ5UAJ_a-ip1B5FmIhPTB3GHRj8zxSjZhDp9_X0pNiKGUoBAufxqVDZ2cpHUiKkk8HSUmWn7NJzcmPxEcmdOph9rNA0DV-yEeXooOtlYut25Ch-VRRIvl9I2x2n-pCs_fRlY_jpQD6tlKjr5sDayxbWrXexfq84n5SJT2z5fy7B11Xj2QUkFT_DSJuI--fmmJ3YM23rY6TJ9F4ekRfASCm70DJkxCPC0d0nkuUSwIfrTT8K-YiNcxAy5C9rrGYwPTXHKkUCBMz0B01KCRoMmCGe1UGUKnV5yHD6IAEqCXVzLWVhc3QtMjCNDQ.m3u8";

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

        {/* Mensaje informativo cuando no hay stream configurado */}
        {!playerState.loading && !playerState.error && !playerState.streamActive && (
          <div className="stream-status info">
            <h3>Stream no configurado</h3>
            <p>Para ver el contenido en vivo, necesitas configurar una URL de stream válida.</p>
            <p><strong>Pasos para configurar:</strong></p>
            <ol>
              <li>Edita el archivo <code>src/pages/Live9/Live9.jsx</code></li>
              <li>Reemplaza <code>PLAYBACK_URL</code> con tu URL real de stream</li>
              <li>Formatos soportados: HLS (.m3u8), RTMP, YouTube Live</li>
            </ol>
            <p><em>Ejemplo: "https://tu-servidor.com/stream.m3u8"</em></p>
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
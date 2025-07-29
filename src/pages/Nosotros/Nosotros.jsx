import React from 'react';
import './Nosotros.css';
import equipoImg from '../../assets/images/profesional1.jpg';

const Nosotros = () => {
  return (
    <main className="nosotros-container">
      <section className="nosotros-hero">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre Zoom TV Canal 10 y nuestro equipo</p>
      </section>

      <section className="historia-section">
        <div className="historia-content">
          <h2>Nuestra Historia</h2>
          <p>
            Zoom TV Canal 10 nació en 2005 con la visión de ser el medio de comunicación líder en la región,
            ofreciendo contenido de calidad las 24 horas del día. Desde nuestros humildes comienzos en un pequeño
            estudio, hemos crecido hasta convertirnos en una referencia de noticias y entretenimiento.
          </p>
          <p>
            Nuestro compromiso con la verdad y la innovación nos ha permitido ganar la confianza de nuestra
            audiencia año tras año.
          </p>
        </div>
        <div className="historia-img">
          <img src={equipoImg} alt="Equipo de Zoom TV Canal 10" />
        </div>
      </section>

      <section className="mision-vision">
        <div className="mision">
          <h3>Misión</h3>
          <p>
            Informar, educar y entretener a nuestra audiencia con contenido veraz, relevante y de alta calidad,
            manteniendo siempre los más altos estándares periodísticos y éticos.
          </p>
        </div>
        <div className="vision">
          <h3>Visión</h3>
          <p>
            Ser reconocidos como el medio de comunicación más confiable e innovador de la región, liderando la
            transformación digital del periodismo televisivo.
          </p>
        </div>
      </section>

      <section className="valores-section">
        <h2>Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <h4>Verdad</h4>
            <p>Compromiso con la información verificada y el periodismo responsable.</p>
          </div>
          <div className="valor-card">
            <h4>Innovación</h4>
            <p>Buscamos constantemente nuevas formas de contar historias y llegar a nuestra audiencia.</p>
          </div>
          <div className="valor-card">
            <h4>Pasión</h4>
            <p>Amamos lo que hacemos y eso se refleja en cada uno de nuestros programas.</p>
          </div>
          <div className="valor-card">
            <h4>Comunidad</h4>
            <p>Estamos comprometidos con el desarrollo y bienestar de nuestra comunidad.</p>
          </div>
        </div>
      </section>

      <section className="equipo-section">
        <h2>Conoce a Nuestro Equipo</h2>
        <p className="equipo-desc">
          Contamos con un equipo multidisciplinario de profesionales apasionados por el periodismo y la producción
          televisiva.
        </p>
        <div className="equipo-grid">
          <div className="miembro-card">
            <div className="miembro-avatar"></div>
            <h4>María González</h4>
            <p>Directora de Noticias</p>
          </div>
          <div className="miembro-card">
            <div className="miembro-avatar"></div>
            <h4>Carlos Mendoza</h4>
            <p>Jefe de Producción</p>
          </div>
          <div className="miembro-card">
            <div className="miembro-avatar"></div>
            <h4>Laura Jiménez</h4>
            <p>Presentadora Principal</p>
          </div>
          <div className="miembro-card">
            <div className="miembro-avatar"></div>
            <h4>Roberto Sánchez</h4>
            <p>Director de Fotografía</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
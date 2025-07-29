import React from 'react';
import './Inicio.css';
import banner from '../../assets/images/banner-principal.jpg';

const Inicio = () => {
  return (
    <main className="inicio-container">
      <section className="banner">
        <img src={banner} alt="Banner principal Zoom TV Canal 10" />
      </section>
      
      <section className="content-section">
        <h2>Bienvenidos a Zoom TV Canal 10</h2>
        <p>Tu canal de noticias y entretenimiento favorito las 24 horas del día.</p>
        
        <div className="highlights">
          <div className="highlight-card">
            <h3>Noticias de último momento</h3>
            <p>Mantente informado con nuestra cobertura en vivo.</p>
          </div>
          <div className="highlight-card">
            <h3>Programación variada</h3>
            <p>Desde deportes hasta programas de entrevistas.</p>
          </div>
          <div className="highlight-card">
            <h3>Transmisión en vivo</h3>
            <p>Disfruta de nuestro contenido en cualquier dispositivo.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
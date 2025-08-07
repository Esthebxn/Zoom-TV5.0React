import React from 'react';
import PropTypes from 'prop-types';
import './Nacionales.css';

// Componente de tarjeta de noticia reutilizable
const NoticiaCard = ({ titulo, resumen, fecha, categoria }) => (
  <article className="noticia-card">
    <div className="noticia-categoria">{categoria}</div>
    <h3 className="noticia-titulo">{titulo}</h3>
    <p className="noticia-resumen">{resumen}</p>
    <time className="noticia-fecha">{fecha}</time>
  </article>
);

NoticiaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired
};

// Componente principal Nacionales
const Nacionales = ({ noticias = [] }) => {
  // Datos de ejemplo (en una app real vendrían de una API o props)
  const noticiasEjemplo = [
    {
      id: 1,
      titulo: "Gobierno anuncia nuevo plan económico",
      resumen: "El presidente presentó medidas para reactivar la economía nacional en medio del contexto internacional complejo.",
      fecha: "15 de Agosto, 2023",
      categoria: "Política"
    },
    {
      id: 2,
      titulo: "Crecimiento récord en exportaciones",
      resumen: "Según el ministerio de economía, las exportaciones crecieron un 12% interanual en el último trimestre.",
      fecha: "12 de Agosto, 2023",
      categoria: "Economía"
    },
    {
      id: 3,
      titulo: "Nuevo récord en producción agrícola",
      resumen: "La cosecha de trigo superó las expectativas con un aumento del 8% respecto al año anterior.",
      fecha: "10 de Agosto, 2023",
      categoria: "Agro"
    }
  ];

  const noticiasAMostrar = noticias.length > 0 ? noticias : noticiasEjemplo;

  return (
    <main className="nacionales-container">
      <header className="nacionales-header">
        <h1 className="nacionales-title">Noticias Nacionales</h1>
        <p className="nacionales-subtitle">Las últimas noticias e información relevante a nivel nacional</p>
      </header>
      
      <section className="nacionales-grid">
        {noticiasAMostrar.map(noticia => (
          <NoticiaCard
            key={noticia.id}
            titulo={noticia.titulo}
            resumen={noticia.resumen}
            fecha={noticia.fecha}
            categoria={noticia.categoria}
          />
        ))}
      </section>
      
      <footer className="nacionales-footer">
        <p>Actualizado al {new Date().toLocaleDateString()}</p>
      </footer>
    </main>
  );
};

Nacionales.propTypes = {
  noticias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      resumen: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired
    })
  )
};

export default Nacionales;    
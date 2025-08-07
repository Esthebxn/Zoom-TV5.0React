import React from 'react';
import PropTypes from 'prop-types';
import './Regionales.css';

// Componente de tarjeta de noticia regional
const NoticiaRegional = ({ titulo, resumen, fecha, departamento, imagenUrl }) => (
  <article className="noticia-regional">
    {imagenUrl && (
      <div className="noticia-imagen-container">
        <img src={imagenUrl} alt={titulo} className="noticia-imagen" />
      </div>
    )}
    <div className="noticia-contenido">
      <span className="noticia-departamento">{departamento}</span>
      <h3 className="noticia-titulo">{titulo}</h3>
      <p className="noticia-resumen">{resumen}</p>
      <div className="noticia-footer">
        <time className="noticia-fecha">{fecha}</time>
        <span className="noticia-bandera">🇵🇪</span>
      </div>
    </div>
  </article>
);

NoticiaRegional.propTypes = {
  titulo: PropTypes.string.isRequired,
  resumen: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  departamento: PropTypes.string.isRequired,
  imagenUrl: PropTypes.string
};

// Componente principal Regionales (Perú)
const Regionales = ({ noticias = [] }) => {
  // Datos de ejemplo específicos de Perú
  const noticiasEjemplo = [
    {
      id: 1,
      titulo: "Gobierno Regional de Lima anuncia nuevos proyectos de infraestructura",
      resumen: "Se invertirán más de S/ 500 millones en mejoras viales y construcción de hospitales en la región Lima.",
      fecha: "20 de Agosto, 2023",
      departamento: "Lima",
      imagenUrl: "https://ejemplo.com/lima-infraestructura.jpg"
    },
    {
      id: 2,
      titulo: "Cusco: Aumenta afluencia turística en Machu Picchu",
      resumen: "Durante el último mes, la ciudadela inca recibió un 30% más de visitantes que el mismo periodo del año pasado.",
      fecha: "18 de Agosto, 2023",
      departamento: "Cusco",
      imagenUrl: "https://ejemplo.com/machu-picchu.jpg"
    },
    {
      id: 3,
      titulo: "Piura: Agricultores esperan mejores precios para el limón",
      resumen: "Productores de limón en Chulucanas buscan nuevos mercados para sus cultivos tras caída de precios.",
      fecha: "15 de Agosto, 2023",
      departamento: "Piura"
    },
    {
      id: 4,
      titulo: "Arequipa: Inician obras de remodelación en la Plaza de Armas",
      resumen: "La municipalidad provincial anunció el inicio de trabajos que durarán 6 meses y costarán S/ 8 millones.",
      fecha: "12 de Agosto, 2023",
      departamento: "Arequipa",
      imagenUrl: "https://ejemplo.com/arequipa-plaza.jpg"
    }
  ];

  const noticiasAMostrar = noticias.length > 0 ? noticias : noticiasEjemplo;

  // Lista de departamentos del Perú para filtrado
  const departamentosPeru = [
    "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", 
    "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", 
    "Ica", "Junín", "La Libertad", "Lambayeque", "Lima", 
    "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", 
    "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
  ];

  return (
    <main className="regionales-container">
      <header className="regionales-header">
        <h1 className="regionales-title">Noticias Regionales del Perú</h1>
        <p className="regionales-subtitle">Información relevante de todas las regiones del país</p>
        
        <div className="filtros-regionales">
          <select className="selector-departamentos">
            <option value="">Todos los departamentos</option>
            {departamentosPeru.map(depto => (
              <option key={depto} value={depto}>{depto}</option>
            ))}
          </select>
        </div>
      </header>
      
      <section className="regionales-grid">
        {noticiasAMostrar.map(noticia => (
          <NoticiaRegional
            key={noticia.id}
            titulo={noticia.titulo}
            resumen={noticia.resumen}
            fecha={noticia.fecha}
            departamento={noticia.departamento}
            imagenUrl={noticia.imagenUrl}
          />
        ))}
      </section>
      
      <footer className="regionales-footer">
        <p>Noticias actualizadas al {new Date().toLocaleDateString('es-PE')}</p>
        <div className="peru-info">
          <span className="bandera">🇵🇪</span>
          <span>Perú - Noticias de todas las regiones</span>
        </div>
      </footer>
    </main>
  );
};

Regionales.propTypes = {
  noticias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      resumen: PropTypes.string.isRequired,
      fecha: PropTypes.string.isRequired,
      departamento: PropTypes.string.isRequired,
      imagenUrl: PropTypes.string
    })
  )
};

export default Regionales; 
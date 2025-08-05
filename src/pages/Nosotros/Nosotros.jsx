import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  // URLs de imágenes de placeholder
  const logoCanal = "https://via.placeholder.com/300x150.png/1a3e72/ffffff?text=ZOOM+TV";
  const equipoTrabajo = "https://via.placeholder.com/800x400.png/1a3e72/ffffff?text=Equipo+de+Trabajo";
  const historiaImagen = "https://via.placeholder.com/600x400.png/1a3e72/ffffff?text=Historia";
  const misionImagen = "https://via.placeholder.com/600x400.png/e74c3c/ffffff?text=Misión";
  const visionImagen = "https://via.placeholder.com/600x400.png/1a3e72/ffffff?text=Visión";
  const persona1 = "https://via.placeholder.com/200x200.png/cccccc/333333?text=María+G.";
  const persona2 = "https://via.placeholder.com/200x200.png/cccccc/333333?text=Carlos+M.";
  const persona3 = "https://via.placeholder.com/200x200.png/cccccc/333333?text=Laura+J.";
  const persona4 = "https://via.placeholder.com/200x200.png/cccccc/333333?text=Roberto+S.";

  // Datos del equipo de trabajo
  const equipo = [
    {
      id: 1,
      nombre: "María González",
      puesto: "Directora General",
      imagen: persona1,
      descripcion: "Con más de 20 años de experiencia en medios de comunicación."
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      puesto: "Jefe de Producción",
      imagen: persona2,
      descripcion: "Especialista en producción televisiva y contenidos digitales."
    },
    {
      id: 3,
      nombre: "Laura Jiménez",
      puesto: "Editora en Jefe",
      imagen: persona3,
      descripcion: "Periodista con amplia trayectoria en medios nacionales."
    },
    {
      id: 4,
      nombre: "Roberto Sánchez",
      puesto: "Director Técnico",
      imagen: persona4,
      descripcion: "Experto en tecnología audiovisual y transmisiones en vivo."
    }
  ];

  return (
    <div className="nosotros-container">
      {/* Banner superior con logo */}
      <div className="nosotros-banner">
        <img src={logoCanal} alt="Logo Zoom TV Canal 10" className="logo-canal" />
        <h1>Zoom TV Canal 10</h1>
        <p>Información veraz, entretenimiento de calidad</p>
      </div>

      {/* Sección principal */}
      <div className="nosotros-header">
        <h2>Conoce nuestro equipo y valores</h2>
        <p>Somos un equipo comprometido con la excelencia en la comunicación</p>
      </div>

      {/* Sección del equipo */}
      <div className="equipo-section">
        <h2>Nuestro Equipo</h2>
        <div className="equipo-grid">
          {equipo.map(miembro => (
            <div key={miembro.id} className="miembro-equipo">
              <img src={miembro.imagen} alt={miembro.nombre} />
              <h3>{miembro.nombre}</h3>
              <p className="puesto">{miembro.puesto}</p>
              <p className="descripcion">{miembro.descripcion}</p>
            </div>
          ))}
        </div>
        <div className="equipo-completo">
          <img src={equipoTrabajo} alt="Equipo completo de Zoom TV Canal 10" />
          <p>Nuestro equipo completo de más de 50 profesionales trabajando para ustedes</p>
        </div>
      </div>

      {/* Secciones de historia, misión y visión */}
      <div className="nosotros-sections">
        {/* Sección Historia */}
        <div className="nosotros-section historia">
          <div className="section-image">
            <img src={historiaImagen} alt="Historia de Zoom TV Canal 10" />
          </div>
          <div className="section-content">
            <h2>Nuestra Historia</h2>
            <p>Zoom TV Canal 10 nació en 2005 con la misión de llevar información veraz y entretenimiento de calidad a nuestros televidentes. Desde nuestros humildes comienzos en un pequeño estudio local, hemos crecido para convertirnos en uno de los canales más importantes de la región.</p>
            <p>Nuestro primer programa salió al aire el 15 de marzo de 2005 con un equipo de solo 5 personas. Hoy contamos con más de 50 profesionales dedicados a la producción de contenido de calidad.</p>
            <div className="logros">
              <h3>Logros importantes:</h3>
              <ul>
                <li>2007: Primer premio regional a la mejor producción periodística</li>
                <li>2012: Expansión a transmisión digital</li>
                <li>2018: Lanzamiento de nuestra plataforma de streaming</li>
                <li>2022: Reconocimiento nacional por cobertura de eventos comunitarios</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección Misión */}
        <div className="nosotros-section mision reverse">
          <div className="section-image">
            <img src={misionImagen} alt="Misión de Zoom TV Canal 10" />
          </div>
          <div className="section-content">
            <h2>Nuestra Misión</h2>
            <p>Informar, educar y entretener a nuestra audiencia con contenido de alta calidad, manteniendo siempre los más altos estándares periodísticos y éticos.</p>
            <p>Nos comprometemos a:</p>
            <ul>
              <li>Proveer información precisa y oportuna</li>
              <li>Fomentar el pensamiento crítico en nuestra audiencia</li>
              <li>Promover los valores culturales de nuestra región</li>
              <li>Ser un medio accesible para toda la comunidad</li>
              <li>Mantener independencia editorial y periodística</li>
              <li>Innovar constantemente en nuestros formatos y contenidos</li>
            </ul>
          </div>
        </div>

        {/* Sección Visión */}
        <div className="nosotros-section vision">
          <div className="section-image">
            <img src={visionImagen} alt="Visión de Zoom TV Canal 10" />
          </div>
          <div className="section-content">
            <h2>Nuestra Visión</h2>
            <p>Ser reconocidos como el canal líder en innovación periodística y producción de contenido multimedia en la región para el año 2025.</p>
            <p>Aspiramos a:</p>
            <ul>
              <li>Expandir nuestra cobertura a nivel nacional</li>
              <li>Implementar las últimas tecnologías en producción televisiva</li>
              <li>Convertirnos en referente de periodismo independiente</li>
              <li>Formar alianzas estratégicas con medios internacionales</li>
              <li>Desarrollar programas educativos para la comunidad</li>
              <li>Ser pioneros en la transición a tecnologías de transmisión 4K</li>
            </ul>
            <div className="valores">
              <h3>Nuestros Valores</h3>
              <div className="valores-grid">
                <div className="valor-item">
                  <h4>Integridad</h4>
                  <p>Actuamos con honestidad y transparencia en todo momento</p>
                </div>
                <div className="valor-item">
                  <h4>Innovación</h4>
                  <p>Buscamos constantemente nuevas formas de comunicar</p>
                </div>
                <div className="valor-item">
                  <h4>Compromiso</h4>
                  <p>Con nuestra audiencia y con la verdad</p>
                </div>
                <div className="valor-item">
                  <h4>Excelencia</h4>
                  <p>Nos esforzamos por la más alta calidad en todo lo que hacemos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="contacto-section">
        <h2>¿Quieres unirte a nuestro equipo o colaborar con nosotros?</h2>
        <p>Envíanos tu información a: <a href="mailto:contacto@zoomtvcanal10.com">contacto@zoomtvcanal10.com</a></p>
        <p>O llámanos al: <a href="tel:+1234567890">+1 234 567 890</a></p>
      </div>
    </div>
  );
};

export default Nosotros; 
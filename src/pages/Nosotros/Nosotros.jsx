import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  // URLs de imágenes de placeholder
  const logoCanal = "https://www.facebook.com/photo/?fbid=1448521952924265&set=a.786972779079189&locale=es_LA";
  const equipoTrabajo = "https://i.pinimg.com/originals/da/2e/8f/da2e8f5e22c872a395a29723af48dd65.jpg";
  const historiaImagen = "https://via.placeholder.com/600x400.png/1a3e72/ffffff?text=Historia";
  const misionImagen = "https://via.placeholder.com/600x400.png/e74c3c/ffffff?text=Misión";
  const visionImagen = "https://via.placeholder.com/600x400.png/1a3e72/ffffff?text=Visión";
  const persona1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1QqdugzVR_risHXE3v_aEuS4-D1vKfqbew&s";
  const persona2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoic0vVEBQYfC_fF06R07SoEZ_TDc2CKNoMKe0RIoYioVsuCt5ixL4UHZtd24j5U0AHl4&usqp=CAU";
  const persona3 = "data:image/jpeg;base64,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";
  const persona4 = "https://upload.wikimedia.org/wikipedia/commons/2/28/Gonzalo_C%C3%A1ceres_-_foto_carnet.png";

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
import { useState } from 'react';
import './Musica.css';

const noticiasMusica = [
  {
    id: 'festival-folklorico',
    title: 'Festival Folklórico reúne a más de 30 agrupaciones en Huánuco',
    author: 'Redacción HuanucoNews',
    date: '15 de Octubre, 2023',
    summary: 'Evento celebra la diversidad musical de la región con danzas y ritmos tradicionales.',
    content: 'El XXV Festival Folklórico de Huánuco reunió a más de 30 agrupaciones musicales de toda la región en un colorido espectáculo que celebró la diversidad cultural del departamento. El evento, realizado en el coliseo municipal, contó con la participación de reconocidos artistas locales que interpretaron huaynos, mulizas y otras expresiones musicales típicas. El grupo "Los Andinos de Huánuco" se llevó el primer lugar con su interpretación de "Adiós Pueblo de Ayacucho", arreglada con instrumentos tradicionales de la zona.',
    imageUrl: 'https://ejemplo.com/imagenes/festival-folklorico.jpg'
  },
  {
    id: 'nuevo-disco-tuna',
    title: 'Tuna Universitaria de la UNHEVAL lanza nuevo disco',
    author: 'María López',
    date: '8 de Octubre, 2023',
    summary: 'Producción musical incluye 12 temas entre clásicos y composiciones propias.',
    content: 'La Tuna Universitaria de la Universidad Nacional Hermilio Valdizán presentó su tercera producción discográfica titulada "Melodías Valdizanas", que incluye 12 temas musicales entre clásicos del repertorio tunantesco y composiciones originales inspiradas en la cultura huanuqueña. El disco fue grabado en el estudio de la universidad con equipos de última generación adquiridos este año. La presentación oficial se realizará el próximo viernes en el auditorio principal de la UNHEVAL con entrada libre para el público.',
    imageUrl: 'https://ejemplo.com/imagenes/tuna-unheval.jpg'
  },
  {
    id: 'concierto-sinfonica',
    title: 'Orquesta Sinfónica de Huánuco anuncia temporada de conciertos',
    author: 'Carlos Mendoza',
    date: '5 de Octubre, 2023',
    summary: 'Serie de presentaciones incluirá obras de compositores peruanos y clásicos universales.',
    content: 'La Orquesta Sinfónica de Huánuco, dirigida por el maestro Ricardo Torres, anunció su temporada de conciertos de fin de año que incluirá seis presentaciones entre noviembre y diciembre. El repertorio incluirá obras de compositores peruanos como Theodoro Valcárcel y Luis Duncker Lavalle, así como piezas clásicas de Mozart, Beethoven y Vivaldi. Las funciones se realizarán en el Teatro Municipal los días viernes y sábados, con precios populares para estudiantes y adultos mayores.',
    imageUrl: 'https://ejemplo.com/imagenes/orquesta-sinfonica.jpg'
  },
  {
    id: 'taller-musical-infantil',
    title: 'Inician talleres de música para niños en Amarilis',
    author: 'Ana Torres',
    date: '12 de Octubre, 2023',
    summary: 'Programa municipal beneficiará a 200 niños de escasos recursos.',
    content: 'La Municipalidad Distrital de Amarilis inició el programa "Música para Crecer" que beneficiará a 200 niños de escasos recursos con talleres gratuitos de instrumentos musicales. Los menores entre 8 y 14 años recibirán clases de guitarra, charango, quena y zampoña dos veces por semana en el centro cultural del distrito. El programa busca fomentar el desarrollo artístico en la niñez y descubrir nuevos talentos musicales. Las inscripciones continúan abiertas en la oficina de cultura de la municipalidad.',
    imageUrl: 'https://ejemplo.com/imagenes/taller-musical.jpg'
  }
];

export default function Musica() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  return (
    <div className="musica-container">
      <header className="header-musica">
        <h1>Música Huánuco</h1>
        <p>Las últimas noticias de la escena musical huanuqueña</p>
      </header>
      
      <div className="noticias-grid">
        {noticiasMusica.map((noticia, index) => (
          <article key={noticia.id} className={`noticia-card ${index === 0 ? 'destacada' : ''}`}>
            <div className="noticia-imagen">
              {noticia.imageUrl ? (
                <img src={noticia.imageUrl} alt={noticia.title} />
              ) : (
                <div className="imagen-placeholder">
                  <span>Sin imagen</span>
                </div>
              )}
            </div>
            <div className="noticia-contenido">
              <h2 className="noticia-titulo">{noticia.title}</h2>
              <p className="noticia-resumen">{noticia.summary}</p>
              <div className="noticia-meta">
                <span className="noticia-autor">Por {noticia.author}</span>
                <span className="noticia-fecha">{noticia.date}</span>
              </div>
              <button 
                className="noticia-boton"
                onClick={() => setNoticiaSeleccionada(noticia)}
              >
                Leer más
              </button>
            </div>
          </article>
        ))}
      </div>
      
      {noticiaSeleccionada && (
        <div className="modal" onClick={() => setNoticiaSeleccionada(null)}>
          <div className="modal-contenido" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-cerrar"
              onClick={() => setNoticiaSeleccionada(null)}
            >
              &times;
            </button>
            {noticiaSeleccionada.imageUrl ? (
              <img src={noticiaSeleccionada.imageUrl} alt={noticiaSeleccionada.title} />
            ) : (
              <div className="modal-imagen-placeholder">
                <span>Imagen no disponible</span>
              </div>
            )}
            <div className="modal-texto">
              <h2>{noticiaSeleccionada.title}</h2>
              <div className="modal-meta">
                <span>Por {noticiaSeleccionada.author}</span>
                <span>{noticiaSeleccionada.date}</span>
              </div>
              <p className="modal-resumen">{noticiaSeleccionada.summary}</p>
              <p className="modal-contenido-texto">{noticiaSeleccionada.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
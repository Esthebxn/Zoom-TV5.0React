import { useState } from 'react';
import './Actualidad.css';

const noticiasActualidad = [
  {
    id: 'reconstruccion-huanuco',
    title: 'Gobierno anuncia plan de reconstrucción para Huánuco',
    author: 'Redacción HuanucoNews',
    date: '10 de Septiembre, 2023',
    summary: 'Inversión de S/ 120 millones para rehabilitar carreteras y puentes.',
    content: 'El Gobierno Central, en coordinación con el Gobierno Regional de Huánuco, anunció un plan de reconstrucción con una inversión de S/ 120 millones para rehabilitar la infraestructura vial afectada por las últimas lluvias intensas. El proyecto incluye la reparación de 50 km de carreteras y 8 puentes en las provincias más afectadas. Se espera que las obras comiencen en enero de 2024 y tengan una duración de 18 meses.',
    imageUrl: ''
  },
  {
    id: 'festividad-ambo',
    title: 'Preparan festividad del Señor de los Milagros en Ambo',
    author: 'Carlos Mendoza',
    date: '5 de Septiembre, 2023',
    summary: 'Celebración religiosa recupera su esplendor tras dos años de restricciones.',
    content: 'La Hermandad del Señor de los Milagros de Ambo anunció que la tradicional procesión de octubre se realizará con aforo completo este año. Después de dos años de limitaciones debido a la pandemia, los devotos podrán participar sin restricciones en las actividades religiosas. Se espera la visita de más de 10,000 fieles durante los días centrales de la festividad.',
    imageUrl: ''
  },
  {
    id: 'exportacion-aguaymanto',
    title: 'Productores de aguaymanto exportarán 20 toneladas',
    author: 'María López',
    date: '8 de Septiembre, 2023',
    summary: 'Acuerdo comercial beneficiará a 120 agricultores de la región.',
    content: 'La Asociación de Productores de Aguaymanto de Huánuco firmó un contrato de exportación de 20 toneladas de este fruto hacia Países Bajos y Alemania. Este acuerdo representa un incremento del 30% en las exportaciones comparado con el año anterior. Los productores destacaron que este crecimiento se debe a la mejora en la calidad del producto y a las certificaciones internacionales obtenidas.',
    imageUrl: ''
  },
  {
    id: 'tingo-maria-turismo',
    title: 'Tingo María registra récord de visitantes',
    author: 'Ana Torres',
    date: '14 de Septiembre, 2023',
    summary: 'Parque Nacional Tingo María recibió más de 15,000 turistas.',
    content: 'El Parque Nacional Tingo María reportó un incremento del 65% en la visita de turistas nacionales y extranjeros durante los últimos tres meses. La belleza de la Cueva de las Lechuzas y la biodiversidad de la zona son los principales atractivos. Las autoridades han implementado nuevos circuitos turísticos y mejorado la infraestructura para recibir a los visitantes.',
    imageUrl: ''
  },
  {
    id: 'universidad-nacional',
    title: 'UNHEVAL inaugura nuevo laboratorio de ingeniería',
    author: 'Roberto Díaz',
    date: '12 de Septiembre, 2023',
    summary: 'Inversión de S/ 2.5 millones beneficiará a más de 1,200 estudiantes.',
    content: 'La Universidad Nacional Hermilio Valdizán (UNHEVAL) inauguró un moderno laboratorio de ingeniería civil equipado con tecnología de punta. El nuevo espacio cuenta con equipos de última generación para ensayos de materiales, estructuras y suelos. Este laboratorio se convierte en uno de los más modernos de la región central del país.',
    imageUrl: ''
  },
  {
    id: 'concierto-aniversario',
    title: 'Gran concierto por el 201° aniversario de Huánuco',
    author: 'Lucía Fernández',
    date: '7 de Septiembre, 2023',
    summary: 'Evento se realizará en la Plaza de Armas con acceso gratuito.',
    content: 'La Municipalidad Provincial de Huánuco organizará un magno concierto por el 201° aniversario de la independencia de la ciudad. El evento contará con la participación de artistas locales y nacionales, así como shows culturales y pirotécnicos. Se espera la asistencia de más de 20,000 personas en la Plaza de Armas.',
    imageUrl: ''
  },
  {
    id: 'emprendimiento-cafe',
    title: 'Emprendedores de café ganan concurso nacional',
    author: 'Javier Rojas',
    date: '11 de Septiembre, 2023',
    summary: 'Café especial de altura obtiene puntuación de 88.5.',
    content: 'Productores de café de la provincia de Leoncio Prado obtuvieron el primer lugar en el Tercer Concurso Nacional de Cafés Especiales. Su café de altura obtuvo una puntuación de 88.5, la más alta en la historia del concurso. Este reconocimiento abre las puertas para nuevos mercados internacionales.',
    imageUrl: ''
  },
  {
    id: 'seguridad-ciudadana',
    title: 'Nuevo sistema de videovigilancia en Huánuco',
    author: 'Pedro Vargas',
    date: '16 de Septiembre, 2023',
    summary: '30 cámaras de seguridad con reconocimiento facial.',
    content: 'La Policía Nacional del Perú, en coordinación con la Municipalidad Provincial de Huánuco, implementará un sistema de videovigilancia con 30 cámaras de seguridad equipadas con reconocimiento facial. Este sistema permitirá monitorear en tiempo real las principales calles y avenidas de la ciudad, mejorando la respuesta ante incidentes.',
    imageUrl: ''
  },
  {
    id: 'salud-hospital',
    title: 'Hospital Regional adquiere nuevo tomógrafo',
    author: 'Carmen Ruiz',
    date: '13 de Septiembre, 2023',
    summary: 'Equipo de última generación beneficiará a más de 500 pacientes.',
    content: 'El Hospital Regional de Huánuco "Hermilio Valdizán" adquirió un tomógrafo multicorte de última generación que permitirá mejorar el diagnóstico de enfermedades complejas. Esta tecnología reducirá los tiempos de espera para estudios especializados y permitirá detectar patologías en etapas tempranas.',
    imageUrl: ''
  }
];

export default function Actualidad() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  return (
    <div className="actualidad-container">
      <header className="header-actualidad">
        <h1 className="titulo-principal">Noticias Nacionales</h1>
        <p className="subtitulo">Información relevante de todo el Perú</p>
      </header>
      
      <div className="noticias-lista">
        {noticiasActualidad.map((noticia, index) => (
          <article key={noticia.id} className={`noticia-item ${index === 0 ? 'destacada' : ''}`}>
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
import { useState } from 'react';
import './Regionales.css';

const noticiasRegionales = [
  {
    id: 'reconstruccion-huanuco',
    title: 'Gobierno anuncia plan de reconstrucción para Huánuco con inversión de S/ 120 millones',
    author: 'Redacción Regional',
    date: '20 de Septiembre, 2023',
    summary: 'Inversión se destinará a rehabilitar carreteras y puentes afectados por lluvias.',
    content: 'El Gobierno Central, en coordinación con el Gobierno Regional de Huánuco, anunció un plan de reconstrucción con una inversión de S/ 120 millones para rehabilitar la infraestructura vial afectada por las últimas lluvias intensas. El proyecto incluye la reparación de 50 km de carreteras y 8 puentes en las provincias más afectadas. Se espera que las obras comiencen en enero de 2024 y tengan una duración de 18 meses. El gobernador regional destacó que esta inversión mejorará la conectividad y reactivará la economía local.',
    imageUrl: 'https://tudiariohuanuco.pe/wp-content/uploads/2024/10/obras-gorehco2.jpg'
  },
  {
    id: 'agricultura-crecimiento',
    title: 'Productores de café de Huánuco incrementan exportaciones en 30%',
    author: 'Carlos Agricultura',
    date: '18 de Septiembre, 2023',
    summary: 'Calidad del producto peruano es reconocida en mercados internacionales.',
    content: 'Los productores de café de la región Huánuco reportaron un incremento del 30% en sus exportaciones durante el último año, alcanzando mercados como Alemania, Estados Unidos y Japón. La mejora en la calidad del producto, gracias a las técnicas de cultivo sostenible y procesamiento especializado, ha posicionado al café huanuqueño como uno de los mejores del país. La Asociación de Productores destacó que este crecimiento genera empleo para más de 5,000 familias en la región y promueve el desarrollo económico local.',
    imageUrl: 'https://tudiariohuanuco.pe/wp-content/uploads/2021/11/cafe-valdizano.jpg'
  },
  {
    id: 'educacion-rural',
    title: 'Gobierno Regional implementa internet satelital en 200 escuelas rurales',
    author: 'María Educación',
    date: '15 de Septiembre, 2023',
    summary: 'Proyecto beneficiará a más de 15,000 estudiantes de zonas alejadas.',
    content: 'El Gobierno Regional de Huánuco inició la implementación de internet satelital en 200 escuelas rurales de la región, beneficiando a más de 15,000 estudiantes. El proyecto incluye la instalación de antenas satelitales, equipos de computación y capacitación docente. "Estamos cerrando la brecha digital y garantizando que nuestros estudiantes tengan las mismas oportunidades de aprendizaje", señaló el director regional de Educación. La implementación se completará en los próximos 6 meses.',
    imageUrl: 'https://tudiariohuanuco.pe/wp-content/uploads/2023/02/antenas-satelitales.jpg'
  },
  {
    id: 'salud-regional',
    title: 'Hospital Regional de Huánuco adquiere nuevo tomógrafo de última generación',
    author: 'Dr. Roberto Salud',
    date: '12 de Septiembre, 2023',
    summary: 'Equipo beneficiará a más de 500 pacientes mensuales.',
    content: 'El Hospital Regional de Huánuco "Hermilio Valdizán" adquirió un tomógrafo multicorte de última generación que permitirá mejorar el diagnóstico de enfermedades complejas. Esta tecnología reducirá los tiempos de espera para estudios especializados y permitirá detectar patologías en etapas tempranas. La inversión de S/ 3.5 millones fue gestionada por el Gobierno Regional y beneficiará a pacientes de toda la región. El equipo estará operativo a partir del próximo mes.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqfRveZP4hpdKlehDZjxj8GpfBeGVP5scDw&s'
  },
  {
    id: 'transporte-local',
    title: 'Mejoran carretera Huánuco - La Unión para reducir tiempos de viaje',
    author: 'Ing. Transporte',
    date: '10 de Septiembre, 2023',
    summary: 'Obra reducirá el tiempo de viaje de 4 a 2.5 horas.',
    content: 'El Gobierno Regional de Huánuco inició los trabajos de mejora de la carretera Huánuco - La Unión, que permitirá reducir el tiempo de viaje de 4 a 2.5 horas. La obra incluye el asfaltado de 45 km, construcción de badenes y mejoramiento de puentes. "Esta vía es crucial para el desarrollo económico de ambas provincias", señaló el gerente regional de Infraestructura. Los trabajos tendrán una duración de 12 meses y generarán 300 puestos de trabajo directos.',
    imageUrl: 'https://inforegion.pe/wp-content/uploads/2025/07/carretera-Huanuco-la-union.jpg-2.webp'
  },
  {
    id: 'turismo-regional',
    title: 'Huánuco recibió más de 100,000 turistas durante fiestas patrias',
    author: 'Lucía Turismo',
    date: '5 de Septiembre, 2023',
    summary: 'Cifra récord supera expectativas del sector turístico regional.',
    content: 'La región Huánuco recibió más de 100,000 turistas durante las fiestas patrias, superando en un 25% las proyecciones iniciales. Los principales destinos visitados fueron la ciudad de Huánuco, Tingo María, la Cordillera de Huayhuash y Kotosh. El director regional de Comercio Exterior y Turismo atribuyó estos resultados a las estrategias de promoción y la mejora en la infraestructura hotelera. El turismo generó ingresos por más de S/ 20 millones, reactivando la economía local.',
    imageUrl: 'https://pagina3.pe/wp-content/uploads/2025/08/La-provincia-de-Leoncio-Prado-recibio-la-mayor-cantidad-de-visitantes.jpg'
  },
  {
    id: 'empleo-jovenes',
    title: 'Gobierno Regional lanza programa "Jóvenes Emprendedores" con inversión de S/ 5 millones',
    author: 'Tecno Perú',
    date: '3 de Septiembre, 2023',
    summary: 'Iniciativa apoyará a 500 emprendimientos de jóvenes huanuqueños.',
    content: 'El Gobierno Regional de Huánuco presentó el programa "Jóvenes Emprendedores" que busca impulsar 500 emprendimientos con financiamiento y acompañamiento especializado. La iniciativa destinará S/ 5 millones en capital semilla, mentoría y acceso a redes de inversión. "Buscamos convertir a Huánuco en un hub de innovación y emprendimiento", señaló el gerente de Desarrollo Económico. Los emprendimientos seleccionados recibirán hasta S/ 20,000 en financiamiento no reembolsable.',
    imageUrl: 'data:image/jpeg;base64,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'
  },
  {
    id: 'deporte-regional',
    title: 'Selección huanuqueña de fulbito femenino gana torneo nacional',
    author: 'Sofía Deportes',
    date: '1 de Septiembre, 2023',
    summary: 'Jugadoras de Ambo se coronan campeonas en Lima.',
    content: 'El equipo femenino de fulbito de la provincia de Ambo se coronó campeón del Torneo Nacional Interprovincial de Fulbito Femenino. Las deportistas huanuqueñas demostraron un excelente nivel a lo largo del campeonato, ganando todos sus partidos. Esta victoria representa el primer título nacional para la región en esta disciplina. El equipo recibió un homenaje en la municipalidad provincial y se prepara para representar al Perú en el campeonato sudamericano.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNzWlf8pIdzsxRjAUbjZkkXnFcoVWRPgxXg&s'
  }
];

export default function Regionales() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  return (
    <div className="regionales-container">
      <header className="header-regionales">
        <h1>Noticias Regionales</h1>
        <p>Información relevante de la región Huánuco</p>
      </header>
      
      <div className="noticias-lista">
        {noticiasRegionales.map((noticia, index) => (
          <article key={noticia.id} className={`noticia-item ${index === 0 ? 'destacada' : ''}`}>
            <div className="noticia-imagen">
              <img src={noticia.imageUrl} alt={noticia.title} />
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
            <img src={noticiaSeleccionada.imageUrl} alt={noticiaSeleccionada.title} />
            <div className="modal-texto">
              <h2>{noticiaSeleccionada.title}</h2>
              <div className="modal-meta">
                <span>Por {noticiaSeleccionada.author}</span>
                <span>{noticiaSeleccionada.date}</span>
              </div>
              <p className="modal-resumen">{noticiaSeleccionada.summary}</p>
              <p className="modal-contenido">{noticiaSeleccionada.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
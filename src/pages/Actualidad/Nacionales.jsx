import { useState } from 'react';
import './Nacionales.css';

const noticiasNacionales = [
  {
    id: 'reconstruccion-nacional',
    title: 'Gobierno anuncia plan de reconstrucción con inversión de S/ 15,000 millones',
    author: 'Redacción Nacional',
    date: '20 de Septiembre, 2023',
    summary: 'Inversión se destinará a infraestructura afectada por fenómenos naturales.',
    content: 'El Gobierno Central anunció un ambicioso plan de reconstrucción nacional con una inversión de S/ 15,000 millones para rehabilitar la infraestructura afectada por los últimos fenómenos naturales. El proyecto incluye la reparación de carreteras, puentes, escuelas y centros de salud en las regiones más afectadas. El presidente destacó que este plan busca no solo reconstruir sino mejorar la infraestructura existente para prevenir daños futuros. Las obras comenzarán en el primer trimestre del 2024 y se estima que generarán más de 100,000 puestos de trabajo.',
    imageUrl: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/05/09/000502241W.jpg'
  },
  {
    id: 'economia-crecimiento',
    title: 'Perú registra crecimiento económico de 4.2% en primer semestre del 2023',
    author: 'Carlos Finanzas',
    date: '18 de Septiembre, 2023',
    summary: 'Sectores minería y agricultura lideran expansión económica.',
    content: 'El Instituto Nacional de Estadística e Informática (INEI) reportó un crecimiento económico de 4.2% en el primer semestre del 2023, superando las expectativas de analistas económicos. Los sectores que mostraron mayor dinamismo fueron la minería (6.8%), agricultura (5.3%) y construcción (4.7%). El ministro de Economía destacó que estos resultados reflejan la resiliencia de la economía peruana frente al contexto internacional desafiante. Se proyecta que el crecimiento anual podría alcanzar el 3.8%, por encima del promedio regional.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGElb3Lw_1mDsLGUGKU2OTtKs35QNmzm1Aw&s'
  },
  {
    id: 'educacion-digital',
    title: 'Ministerio de Educación lanza programa de digitalización para escuelas rurales',
    author: 'María Educación',
    date: '15 de Septiembre, 2023',
    summary: 'Más de 5,000 instituciones educativas serán beneficiadas.',
    content: 'El Ministerio de Educación presentó el programa "Escuelas Digitales" que busca dotar de equipamiento tecnológico y conectividad a más de 5,000 instituciones educativas en zonas rurales del país. El proyecto incluye la entrega de tablets, laptops, proyectores y la instalación de internet satelital en comunidades alejadas. "Buscamos cerrar la brecha digital y garantizar que todos los estudiantes peruanos tengan acceso a educación de calidad", señaló el ministro. La implementación se realizará de manera progresiva durante los próximos 18 meses.',
    imageUrl: 'https://diarioelnoticiero.com/wp-content/uploads/2024/04/WEB-EL-NOTICIERO_-4-7.jpg'
  },
  {
    id: 'salud-publica',
    title: 'Gobierno anuncia construcción de 10 nuevos hospitales a nivel nacional',
    author: 'Dr. Roberto Salud',
    date: '12 de Septiembre, 2023',
    summary: 'Inversión de S/ 2,500 millones mejorará capacidad de atención.',
    content: 'El Ministerio de Salud anunció la construcción de 10 nuevos hospitales en diversas regiones del país, con una inversión total de S/ 2,500 millones. Estos establecimientos de salud contarán con tecnología de punta y especialidades médicas que actualmente no están disponibles en muchas regiones. Los hospitales se ubicarán en Loreto, Amazonas, Cajamarca, Piura, La Libertad, Ayacucho, Cusco, Puno, Arequipa y Tacna. El proyecto forma parte del plan nacional de fortalecimiento del sistema de salud y se espera que beneficie a más de 5 millones de peruanos.',
    imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FJIFXVKREBCNBOHF4PYWJTVB7I.png'
  },
  {
    id: 'transporte-nacional',
    title: 'Inauguran tramo final de la Carretera Interoceánica Sur',
    author: 'Ing. Transporte',
    date: '10 de Septiembre, 2023',
    summary: 'Obra conectará Perú con Brasil y mejorará comercio internacional.',
    content: 'Después de 10 años de trabajo, se inauguró el tramo final de la Carretera Interoceánica Sur que conecta la costa peruana con la frontera brasileña. Esta megaobra de infraestructura, que requirió una inversión de S/ 8,000 millones, permitirá reducir los tiempos de transporte de mercancías entre ambos países de 15 días a apenas 3 días. La carretera beneficiará directamente a las regiones de Madre de Dios, Cusco y Puno, impulsando el comercio, turismo y desarrollo económico de la zona sur oriental del país.',
    imageUrl: 'https://portal.andina.pe/EDPfotografia2/Thumbnail/2009/11/24/000111815W.jpg'
  },
  {
    id: 'medio-ambiente',
    title: 'Perú amplía áreas naturales protegidas en 500,000 hectáreas',
    author: 'Ana Ambiental',
    date: '8 de Septiembre, 2023',
    summary: 'Gobierno fortalece conservación de biodiversidad en Amazonía.',
    content: 'El Gobierno peruano anunció la ampliación de las áreas naturales protegidas en 500,000 hectáreas, fortaleciendo la conservación de la biodiversidad en la Amazonía peruana. Las nuevas áreas protegidas incluyen zonas de alta diversidad biológica en Loreto, Ucayali y Madre de Dios. "Esta decisión refleja nuestro compromiso con la conservación del medio ambiente y la lucha contra el cambio climático", declaró el ministro del Ambiente. La medida también busca proteger territorios de comunidades indígenas y promover el turismo sostenible.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWHsXXeWY5NLclHW_kFeRll7hM4OUaErUmg&s'
  },
  {
    id: 'turismo-record',
    title: 'Perú recibió más de 4 millones de turistas extranjeros en 2023',
    author: 'Lucía Turismo',
    date: '5 de Septiembre, 2023',
    summary: 'Cifra récord supera expectativas del sector turístico.',
    content: 'Perú alcanzó la cifra récord de 4.2 millones de turistas extranjeros en los primeros ocho meses del 2023, superando en un 15% las proyecciones iniciales del sector. Los principales destinos visitados fueron Cusco, Arequipa, Lima y la Amazonía peruana. El ministro de Comercio Exterior y Turismo atribuyó estos resultados a las estrategias de promoción internacional y la mejora en la conectividad aérea. El turismo generó ingresos por más de US$ 5,000 millones, consolidándose como uno de los principales motores de la economía nacional.',
    imageUrl: 'https://elperuano.pe/fotografia/thumbnail/2024/05/12/000296272M.jpg'
  },
  {
    id: 'tecnologia-innovacion',
    title: 'Gobierno lanza programa de startups para impulsar innovación tecnológica',
    author: 'Tecno Perú',
    date: '3 de Septiembre, 2023',
    summary: 'Iniciativa apoyará a 500 emprendimientos tecnológicos.',
    content: 'El Ministerio de la Producción presentó el programa "Startup Perú 2023" que busca impulsar 500 emprendimientos tecnológicos con financiamiento y acompañamiento especializado. La iniciativa destinará S/ 100 millones en capital semilla, mentoría y acceso a networks de inversión. "Buscamos convertir al Perú en un hub de innovación tecnológica en la región", señaló el viceministro de MYPE e Industria. Los emprendimientos seleccionados recibirán hasta S/ 200,000 en financiamiento no reembolsable y capacitación en escalamiento de negocios.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHmML7cD9lCA6ljdjr5KjrrRayT1icSKWjA&s'
  }
];

export default function Nacionales() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  return (
    <div className="nacionales-container">
      <header className="header-nacionales">
        <h1>Noticias Nacionales</h1>
        <p>Información relevante de todo el Perú</p>
      </header>
      
      <div className="noticias-lista">
        {noticiasNacionales.map((noticia, index) => (
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
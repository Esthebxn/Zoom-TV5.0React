import { useState } from 'react';
import './Deportes.css';

const noticiasDeportes = [
  {
    id: 'fulbito-femenino',
    title: 'Selección huanuqueña de fulbito femenino gana torneo nacional',
    author: 'Sofía Castro',
    date: '15 de Agosto, 2023',
    summary: 'Jugadoras de Ambo se coronan campeonas en Lima.',
    content: 'El equipo femenino de fulbito de la provincia de Ambo se coronó campeón del Torneo Nacional Interprovincial de Fulbito Femenino. Las deportistas huanuqueñas demostraron un excelente nivel a lo largo del campeonato, ganando todos sus partidos. Esta victoria representa el primer título nacional para la región en esta disciplina. El equipo recibió un homenaje en la municipalidad provincial y se prepara para representar al Perú en el campeonato sudamericano.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNzWlf8pIdzsxRjAUbjZkkXnFcoVWRPgxXg&s'
  },
  {
    id: 'maraton-andino',
    title: 'XXIII Maratón Andino reunió a más de 500 corredores',
    author: 'Carlos Mendoza',
    date: '22 de Julio, 2023',
    summary: 'Atletas de todo el país participaron en la competencia.',
    content: 'La XXIII edición del Maratón Andino de Huánuco congregó a más de 500 corredores de diferentes regiones del país. La competencia se desarrolló en las categorías 10K y 21K, con recorridos que mostraron la belleza paisajística de la región. Los ganadores en la categoría elite recibieron premios en efectivo y trofeos. El evento contó con el apoyo de la Municipalidad Provincial y varias empresas privadas que apuestan por el desarrollo deportivo en la región.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIq3YWvj8J8kUCwX9WFfkdoScLcbUZHIOsQ&s'
  },
  {
    id: 'boxeo-huanuco',
    title: 'Boxeador huanuqueño clasifica a Juegos Panamericanos',
    author: 'Roberto Díaz',
    date: '5 de Septiembre, 2023',
    summary: 'Luis Torres aseguró su participación en Santiago 2023.',
    content: 'El pugilista huanuqueño Luis Torres clasificó a los Juegos Panamericanos Santiago 2023 tras obtener el subcampeonato en el Pre-Panamericano realizado en Colombia. Torres, de 22 años, compitió en la categoría 57kg y demostró un gran nivel técnico throughout el torneo. "Es un orgullo representar a Huánuco en estos juegos", declaró el deportista. La federación peruana de boxeo anunció que financiará su preparación para la justa continental.',
    imageUrl: 'https://pagina3.pe/wp-content/uploads/2024/04/Bryan-Meza-quiere-representar-al-Peru-en-Lima-2027-2.jpg'
  },
  {
    id: 'voley-juvenil',
    title: 'Equipo de vóley juvenil de Huánuco gana etapa regional',
    author: 'Ana Torres',
    date: '30 de Agosto, 2023',
    summary: 'Jóvenes deportistas avanzan a la etapa nacional.',
    content: 'El equipo de vóley juvenil femenino de Huánuco se coronó campeón de la etapa regional de los Juegos Deportivos Escolares 2023. Las estudiantes del colegio Santa María del Valle vencieron en la final al equipo de Cerro Pasco por 3 sets a 1. El equipo ahora se prepara para representar a la región en la etapa nacional que se realizará en Lima en octubre. Las jugadoras recibieron el apoyo de la Dirección Regional de Educación para su preparación.',
    imageUrl: 'https://pagina3.pe/wp-content/uploads/2024/02/Huanuco-sede-de-la-etapa-regional-de-voleibol.jpg'
  },
  {
    id: 'futbol-sala',
    title: 'Inauguran nuevo coliseo de fútbol sala en Amarilis',
    author: 'Javier Rojas',
    date: '12 de Septiembre, 2023',
    summary: 'Moderno escenario beneficiará a más de 500 deportistas.',
    content: 'La Municipalidad Distrital de Amarilis inauguró un moderno coliseo de fútbol sala con capacidad para 800 espectadores. La infraestructura cuenta con piso flotante profesional, sistema de iluminación LED, camerinos y tribunas preferenciales. El alcalde destacó que este escenario permitirá organizar torneos de nivel nacional e internacional. El coliseo ya está albergando la Liga Distrital de Fútbol Sala 2023 con la participación de 16 equipos.',
    imageUrl: 'https://tudiariohuanuco.pe/wp-content/uploads/2023/12/complejo-de-paucarbamba-vista-aerea-2.jpg'
  },
  {
    id: 'ciclismo-montaña',
    title: 'Realizarán primer campeonato de ciclismo de montaña en Huánuco',
    author: 'Pedro Vargas',
    date: '18 de Agosto, 2023',
    summary: 'Competencia se desarrollará en los cerros de Pillco Marca.',
    content: 'La Asociación Regional de Ciclismo anunció la realización del primer campeonato de ciclismo de montaña en Huánuco. La competencia se llevará a cabo el próximo mes en los cerros del distrito de Pillco Marca, que ofrecen rutas desafiantes y paisajes espectaculares. Las categorías incluirán principiantes, avanzados y elite, tanto en masculino como femenino. Los organizadores esperan la participación de ciclistas de diversas regiones del país.',
    imageUrl: 'https://tudiariohuanuco.pe/wp-content/uploads/2022/03/Ciclismo.jpg'
  },
  {
    id: 'natacion-master',
    title: 'Nadadores master huanuqueños brillan en campeonato nacional',
    author: 'Lucía Fernández',
    date: '3 de Septiembre, 2023',
    summary: 'Deportistas obtuvieron 10 medallas en competencia de Lima.',
    content: 'El equipo de natación master de Huánuco obtuvo un total de 10 medallas (4 oro, 3 plata y 3 bronce) en el Campeonato Nacional de Natación Master realizado en Lima. Los nadadores compitieron en diferentes categorías según edad y demostraron un excelente nivel. "Estamos muy orgullosos de estos resultados que reflejan años de dedicación y entrenamiento", declaró el entrenador del equipo. La municipalidad provincial les brindará un reconocimiento especial.',
    imageUrl: 'https://pagina3.pe/wp-content/uploads/2025/05/Nadadores-se-preparan-para-competir-2.jpg'
  },
  {
    id: 'atletismo-adaptado',
    title: 'Deportistas adaptados de Huánuco reciben implementos especializados',
    author: 'Carmen Ruiz',
    date: '25 de Agosto, 2023',
    summary: 'Gobierno Regional entregó sillas de ruedas deportivas y prótesis.',
    content: 'El Gobierno Regional de Huánuco entregó implementos deportivos especializados a atletas con discapacidad de la región. La donación incluye sillas de ruedas para básquet y atletismo, próteses running y equipamiento para goalball. "Estos implementos nos permitirán entrenar en mejores condiciones y competir a nivel nacional", expresó uno de los beneficiarios. El acto de entrega contó con la presencia del director regional del deporte y representantes de organizaciones de personas con discapacidad.',
    imageUrl: 'https://tudiariohuanuco.pe/wp-content/uploads/2019/09/JUEGOS-ESCOLARES-1.gif'
  }
];

export default function Deportes() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  return (
    <div className="deportes-container">
      <header className="header-deportes">
        <h1>Deportes Huánuco</h1>
        <p>Las últimas noticias del deporte huanuqueño</p>
      </header>
      
      <div className="noticias-lista">
        {noticiasDeportes.map((noticia, index) => (
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
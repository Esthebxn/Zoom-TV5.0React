import { useState } from 'react';
import './Deportes.css';

const noticiasDeportes = [
  {
  "id": "Hoy definen el título departamental: León de Huánuco buscará la hazaña ante Miguel Grau",
  "title": "Hoy definen el título",
  "author": "Zoom TV Canal 10 Megacable",
  "summary": "Hoy definen el título.",
  "content": "Hoy martes 26 de agosto, a las 7:00 p.m., el Complejo Deportivo de Paucarbamba será el escenario del encuentro decisivo entre León de Huánuco y Miguel Grau UDH en el partido de vuelta que definirá al campeón departamental de la Copa Perú en Huánuco. El conjunto dirigido por Nifflin Bermúdez llega con una cómoda ventaja tras imponerse por 4 a 1 en el duelo de ida jugado en el mismo recinto deportivo, resultado que obliga a León de Huánuco a remontar una diferencia de tres goles si quiere alzarse con el título. El cuadro crema confía en el respaldo de su afición para revertir el marcador, por lo mismo que mantiene vivas sus aspiraciones de levantar el título departamental, aunque se hace cuesta arriba con la ventaja del rival. León de Huánuco afronta este compromiso bajo la dirección técnica interina de Luis Zegarra, luego de la salida de Jaime Cuadros, quien fue cesado tras la dura derrota sufrida, precisamente frente a Miguel Grau. La dirigencia aún no ha oficializado al nuevo entrenador, lo que añade un componente de incertidumbre en un momento clave para el club. La expectativa es alta y el ambiente promete ser vibrante. Todo está listo para una noche de fútbol que podría marcar un punto de inflexión en la temporada de León de Huánuco. Como se recuerda, ambos equipos, además de Municipal de Chacos, son los representantes de Huánuco para la etapa nacional de la Copa Perú.",
  "imageUrl": "https://tudiariohuanuco.pe/wp-content/uploads/2025/06/leon-e1756197687999.jpg"           
  },    
  {
    "id": "El regreso de Yotún",
  "title": "El regreso de Yotún ",
  "author": "Carlos Mendoza",
  "date": "22 de Julio, 2023",
  "summary": "El regreso de Yotún .",
  "content": "El regreso a la selección peruana del centrocampista Yoshimar Yotún es la mayor novedad de la lista de convocados para afrontar las dos últimas fechas de las eliminatorias sudamericanas del Mundial de 2026, donde la Blanquirroja se medirá con Uruguay de visitante y Paraguay de local. La principal ausencia en la lista del entrenador argentino Óscar Ibáñez es el delantero y máximo goleador de la selección Blanquirroja, Paolo Guerrero, que se lesionó la pasada semana en un partido de Copa Sudamericana con Alianza Lima. Dentro de una nómina de veintisiete futbolistas, Yotún volvió a ser convocado tras regresar recientemente a las canchas con la camiseta de Sporting Cristal, después de recuperarse de una complicada lesión de ligamentos de la rodilla que lo mantuvo alejado de la competición por 15 meses. Junto a Yotún también han vuelto a ser llamados para la Blanquirroja otros futbolistas que no habían sido parte de las últimas listas, como el mediapunta Christofer Gonzáles y los delanteros Álex Valera y Joao Grimaldo. Otras sorpresas de la convocatoria publicada este domingo son las inclusiones del centrocampista Alessandro Burlamaqui y Matías Lazo, que por primera vez han sido llamados por el combinado nacional y podrían tener su debut con la selección absoluta. También se encuentra el centrocampista Erick Noriega, flamante fichaje del Gremio de Porto Alegre, que lo ha incorporado a sus filas procedente de Alianza Lima. Alianza Lima es el equipo que más futbolistas aporta en esta convocatoria a la selección de Perú con un total de seis, al aprovechar Ibáñez el buen momento del equipo blanquiazul, dirigido por el técnico argentino Néstor Gorosito, que ha alcanzado los cuartos de final de la Copa Sudamericana. La selección peruana afronta las dos últimas fechas de las eliminatorias con opciones casi nulas de alcanzar uno de los puestos de clasificación para el Mundial, al encontrarse penúltimo de la clasificación con 12 puntos, a seis de Venezuela, que tiene 18 unidades y se encuentra en la séptima plaza, que da acceso a la repesca. La Blanquirroja visitará a Uruguay en Montevideo el 4 de septiembre y 5 días más tarde recibirá a Paraguay en el Estadio Nacional de Lima.",
  "imageUrl": "https://tudiariohuanuco.pe/wp-content/uploads/2025/08/yotun-768x464.jpg" 
  },
  {
    id: 'Miguel Grau UDH dio el primer golpe a León de Huánuco por el título departamental',
    title: 'Miguel Grau UDH dio el primer golpe a León de Huánuco por el título departamenta',  
    author: 'Roberto Díaz',
    date: '5 de Septiembre, 2023',
    summary: 'Luis Torres aseguró su participación en Santiago 2023.',
    content: 'El pugilista huanuqueño Luis Torres clasificó a los Juegos Panamericanos Santiago 2023 tras obtener el subcampeonato en el Pre-Panamericano realizado en Colombia. Torres, de 22 años, compitió en la categoría 57kg y demostró un gran nivel técnico throughout el torneo. "Es un orgullo representar a Huánuco en estos juegos", declaró el deportista. La federación peruana de boxeo anunció que financiará su preparación para la justa continental.',
    imageUrl: 'https://pagina3.pe/wp-content/uploads/2024/04/Bryan-Meza-quiere-representar-al-Peru-en-Lima-2027-2.'
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
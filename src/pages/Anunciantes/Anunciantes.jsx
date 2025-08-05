// Anunciantes.jsx - Enhanced Version
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Anunciantes.css';

const Anunciantes = () => {
  // Sample data with actual image URLs and news links
  const [anunciantes, setAnunciantes] = useState([
    {
      id: 1,
      name: "Tech Solutions Inc.",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/515438155_1607044370405355_4951370912154539554_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-BiwPaVc50IEPsgxYXiP6IEIbpschKH8gQhumxyEof9Qu7jyAbBGQgGIrNl9rmYHEquJy1WmZGcrg1WL8-1yb&_nc_ohc=_5IV2UrDwgMQ7kNvwFG8Vfz&_nc_oc=AdkuXbWU5y5eTyz4uikBwsCc7VJvL6K_POFzJg3j086PXOAg9EH0TqxwTB9KO3gIMKM&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=WzxJhx8MiYbSB6YdTxSssg&oh=00_AfV4CpF04E0o66n6JMhqtSt1C_FZxeG8TrCfiD3I7NoVlA&oe=6897F316",
      description: "Líder en soluciones tecnológicas para empresas con más de 15 años de experiencia.",
      documents: ["PDF", "Presentación", "Catálogo"],
      newsUrl: "https://example.com/news/tech-solutions"
    },
    {
      id: 2,
      name: "Green Energy Corp",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/527171260_1607045627071896_4028209169303708485_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE9LxGstkFPHIgNbFYxUXWSj6Z5rbRzzJGPpnmttHPMkWYkv1lMf37pXw9MKRZwg5WY-hWZw22tp-nS4X37NW3z&_nc_ohc=kIZhPo4js-sQ7kNvwFa88EO&_nc_oc=Adl0o2Tm_3QAsDF9Rn3iw1YBOWYdgpTrc1Hi7CYOlMUId-N17LEvKSy7CEDlicGoLnY&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=2OJbz6SOo1X5u1-tcBugfw&oh=00_AfXcXs5R2eb9XLkgeJdgMUOWzpql1qVsxsAEa68J1-AIaQ&oe=6897FBF1",
      description: "Especialistas en energías renovables y soluciones sostenibles para el futuro.",
      documents: ["PDF", "Especificaciones"],
      newsUrl: "https://example.com/news/green-energy"
    },
    {
      id: 3,
      name: "Global Logistics",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/515044291_1607039770405815_3484805606733381880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGd9cDNpEfubgJ354H0rVmRxu4MqWf0aibG7gypZ_RqJrgM00VM6tzaSL_p9sN4VJ7Fsz1uUS8dPyQaWZI5psLl&_nc_ohc=kCq8rvKzVnAQ7kNvwFtOoQX&_nc_oc=AdlxhsJr2E2hzhlXuisiFMWSfr2ZMnKqmf7icumQpCG7xEdMgTIiVTCHo3TVcDE6U4Q&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=oiGHxg_XQvjoIK0lOwp8FQ&oh=00_AfUgnRMi3i-bDVPMBiDT8HfZ7p438nnjYGC1SRstgoTApA&oe=6897F036",
      description: "Red logística internacional con cobertura en más de 50 países.",
      documents: ["Catálogo", "Folleto"],
      newsUrl: "https://example.com/news/global-logistics"
    },
    {
      id: 4,
      name: "Creative Marketing",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/517420023_1606188920490900_1532469553045830284_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFnWVe_43k-gNS4RD9i79y1mpysY76I-5WanKxjvoj7lfPpFUGwUjbsieenYE3Njvbu7giIz46riqk-1F0prv-C&_nc_ohc=LeHmGmY2LbgQ7kNvwGTs4WY&_nc_oc=AdlcN2xzaOSfVS9C_p4i8pytuqOFcGAZNYacFBFC9VvZXWNMRjmvM7qbSbB_T49Xwzg&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=0kRdKnZs5cQ7y3P6XrNHgA&oh=00_AfWzH688mRI7a8OwxUQLSQ6r94V_3b4D2l08aS3dBzB9cA&oe=6897EE59",
      description: "Agencia de marketing digital con enfoque en resultados medibles.",
      documents: ["Presentación", "PDF", "Video"],
      newsUrl: "https://example.com/news/creative-marketing"
    },
    {
      id: 5,
      name: "Health Pharma",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/515438653_1606186353824490_4059544354862075722_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFC6c2u7nPrdg15o6-rvcRMCgvLMxovJ4YKC8szGi8nhobhrAY88vOZjJMo8q-o4nHsdzvRCqQ14r5d05KNcO25&_nc_ohc=0KJDMmCA-UkQ7kNvwFsFy9T&_nc_oc=AdlnUVnsJ_ic7KdedL4UPftyqklNVilm8cTl6JWviIHXf7AnHtxO9aww8NThFvMMffE&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=AQLNBQzyLB2yIfA9sZOO4A&oh=00_AfX9NGgYgLMK3lQI8rIvPSXaAp7viErfAUWpbgTOL5K20w&oe=68981ECC",
      description: "Innovación farmacéutica para una vida más saludable.",
      documents: ["Estudios", "Informes"],
      newsUrl: "https://example.com/news/health-pharma"
    },
    {
      id: 6,
      name: "Smart Finance",
      image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/526608933_1602638454179280_1650400158023052971_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvoQy1s78bVS3kyHth0gr6sN_uGiLlJhew3-4aIuUmF_XJ9aclV7yDPXcEx8QPr6oj0FGccvEcm2MIo65m6JaG&_nc_ohc=NkDqayuoKrUQ7kNvwENazwa&_nc_oc=AdnCVXOOsHr0ZqWgeDBact34n0jOORdnkatLlhVoD_SI3BAFANToJ4pXJC5eQeMOYTo&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=rJc_pWfUMwj92-qYKvHKWg&oh=00_AfX6xoqCt6MiYKTxdAPWJwEY5Ls1wIukk8_69lTyVcX4JQ&oe=68980787",
      description: "Soluciones financieras inteligentes para personas y empresas.",
      documents: ["Tarifas", "Condiciones"],
      newsUrl: "https://example.com/news/smart-finance"
    }
  ]);

  return ( 
    <div className="anunciantes-container">
      <div className="anunciantes-header">
        <h1>Nuestros Anunciantes</h1>
        <p>
          Descubre a las empresas innovadoras que colaboran con nosotros.
          Cada anunciante ofrece soluciones únicas para tus necesidades.
        </p>
      </div>
      
      <div className="anunciantes-grid">
        {anunciantes.map(anunciante => (
          <div key={anunciante.id} className="anunciante-card">
            <div className="anunciante-image-container">
              <img 
                src={anunciante.image} 
                alt={anunciante.name} 
                className="anunciante-image" 
                loading="lazy"
              />
            </div>
            <div className="anunciante-info">
              <h3>{anunciante.name}</h3>
              <p>{anunciante.description}</p>
              
              <div className="anunciante-docs">
                {anunciante.documents.map((doc, index) => (
                  <span key={index} className="doc-badge">{doc}</span>
                ))}
              </div>
              
              {anunciante.newsUrl && (
                <a 
                  href={anunciante.newsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="news-link"
                >
                  Ver noticias relacionadas
                  <FiArrowRight />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anunciantes; 
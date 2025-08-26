import React, { useState } from 'react';
import { FiMaximize, FiMinimize, FiX } from 'react-icons/fi';
import './Anunciantes.css';

const Anunciantes = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
const anunciantes = [
    {
        id: 1,
        name: "",
        image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/539323644_1625821151861010_8846417534398894617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGBr4VQvkjwOhPB8AfsZW0kU5tOn47wOQ1Tm06fjvA5DcSzxNyiBpXaK-ZQz_8xIQVDefl2qR1Wk6c92s5jQ-cF&_nc_ohc=uQxYPopjMk0Q7kNvwEhqocm&_nc_oc=AdmAi2P3alZOtqVDW60o38GA8DZU-Nh416WydWxM8qAHZAYsAYYiybK6f1JkSI7frexRZe3Hw8n2vEd3JYmLu-_b&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=EcIDNGnsvSQDUNQIiFiR_w&oh=00_AfXBbiawOT6bq_HmxXpXdfN0T2gtVSrqVhtZs00Zj0edQw&oe=68B3A744",
        description: "",
        enableZoom: true
    },
    {
        id: 2,
        name: "",
        image: 
"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/539315075_1624971781945947_4181275879224927169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHv7KNjnaqgFYPMcDtrkuQFS7tQJ5sMIuVLu1Anmwwi5S9GgKS-N972EP32ltfSahhz_tppLW9PHTxNjdg2SDeu&_nc_ohc=yatvAPZ5--UQ7kNvwEVKEnh&_nc_oc=AdlzizFg6T1Q0mYMRFWTi8biS1csIey21o4fmuW8UxoX8nuoM6jlFErtY_a1UmwqZ55SPWO1BFIgNJrnCvsuJPox&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=wqahUuzJmMJ7uMc-ujEEZQ&oh=00_AfUh-XY1dt3DAgXmFudba-8qnsNQeEuNolXlHwN1_ZUBsQ&oe=68B3BB47",
        description: "",
        enableZoom: true
    },
    {
        id: 3,
        name: "",
        image: 
"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/537327300_1620448242398301_3202001837734063914_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHNeWppLEmNoJPZsotnMdfMWDSgh7MwlUJYNKCHszCVQgMpdxjXntQAuTH9NggLMpcdf3fth8ffeZUrcO77Nwxn&_nc_ohc=Yh-Cc8cP7TYQ7kNvwHinOEU&_nc_oc=AdlCSkJWTSHLague7FBM1bTBQyFEapi7Mzq5TPod-B6E2gXUPO0gfaYViI4uSppid0Asq1gF1hUJ8h12d-Zgl9Wq&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=tRCpIFvQt1k4UrWEHkNblw&oh=00_AfWNo1yU0XVO-2_NWhNiE9aOT7IEzRT43vAx4W6mE7_Myw&oe=68B3B9DC",
        description: "",
        enableZoom: true
    },
    {
        id: 4,
        name: "",
        image:


"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/536854839_1620444302398695_6185058476911531705_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHhsqsr9w5Djb89Y7hzNO3HIwxNyeMbwV0jDE3J4xvBXRCDgDdxM4fvsZE4LhZ_IhOvA0x7pfbzyX9LQ2pMS3iu&_nc_ohc=mzfx3KoYC_gQ7kNvwHycbDr&_nc_oc=Adn7nSy7W1tc7ZS306bMSW6w0QiooXMkmwbWurTQdEDRAjrps3z3LKX9MST2jsyd22fePGdtFUeRDiHvYevOW-TN&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=mi-bqNKVcTrBlXaUrbZ-_g&oh=00_AfVuB8ckzu23esarw9HPih6XzKgOXxEjuO-5_7bOZm8xfQ&oe=68B3A1F0",
        description: "",
        enableZoom: true
    },
    {
        id: 5,
        name: "",
        image:

"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/532340449_1615100069599785_4495370110049436802_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHVYSmteU9oyYBKb7QyGsDdXWbtfwW7wtBdZu1_BbvC0IleU8T8W1I_H2R4VA8WAsd0ozA9JXtS04WcA9Do4ggd&_nc_ohc=4zjAz2RB6x0Q7kNvwH6JDSL&_nc_oc=AdksU21rXnE48VHQu9SCd3jv44N0nwvOod09awpCBOjIKyEQezfg_Hp_r7Q__9dcqT0yFlKdDnTMqtBG-llPycRm&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=nugQYCoTOy9wF-z3QZkJbw&oh=00_AfUy7nyzMpk_lxBooThc83knto1lPrXIraH31EOC3wdAjg&oe=68B392E7",
        description: "",
        isFlyer: true,
        enableZoom: true
    },
    {
        id: 6,
        name: "",
        image: 
"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/534366871_1615097996266659_5437244387412459525_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETAELuWlegyIF6H4a5_hj-71fpi6MqP2TvV-mLoyo_ZHu4e_oWQ0tKgM5Di4GsqtoQfFwYqAPCs1qTcm8eFin2&_nc_ohc=Q4jeIh9wahYQ7kNvwECTzLI&_nc_oc=AdnnHxE6-UIpnBwSScqfXCy5QDwtwXDQ8ydUGHuYr-1b8UwbzezoZgXl5SF5mf-0mPgwE5XSswUSrLdWqLyGj5OB&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=H8lrbODGdWqnMhs2jPQ97w&oh=00_AfVF5zXoawd1Qu7qSqbPkPHeipCQh9n7KzTUf2lkhjJVcA&oe=68B39E01",
        description: "",
        enableZoom: true
    },
    {
        id: 7,
        name: "",
        image:"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/533762123_1615090972934028_8526513539468544043_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG92o63T0vOSwMHpeKU3rqg-Bw3nxN6sEX4HDefE3qwRYfAr2XPWRP-QYaWyU7EuLQzohu8vrdNZqxem09j5kIH&_nc_ohc=1mmfcerJyJsQ7kNvwF7PIJb&_nc_oc=AdkLWLNHKBwxUbIs3A8RvaTIFfJvNARtUrbiC__nQCUNj8v-PRw-saSootkgY_9mw5T0g6sLOdmIIMvLNd5fwyId&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=bsJq0IrSsW1hrMhl1fxwBg&oh=00_AfXBM4q0kVYJVEEPKTXfhC4Y99phEZZFjwNnEiGK0ZMFwg&oe=68B3BEBB",
        description: "",
        enableZoom: true
    },
    {
        id: 8,
        name: "",
        image:"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/515279142_1612349033208222_7868892484417250361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH8KMi8VJariZFYNNGPcOZ186x91GWqjWPzrH3UZaqNY2xo2s8Wu9CxkccLlS1XO0UI9ONWGtqY61u5f4yBi_5O&_nc_ohc=eKlp3xwKI1cQ7kNvwHY5iD8&_nc_oc=AdnxBOkKb3S0I_x21WaFR38x3LzyJFyiLf2xFDnZ5tVK0Rg4JQ0iawHSAzPhi9XlGZSQTIVCRSNB8_DUgEyqGUEq&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=669IVWbdovK-gRLbpdtatQ&oh=00_AfUx7m0lUv5k1YADJDBiC_-N1Eil9wLvtdDB0nNJpFbHuw&oe=68B39D78",
        description: "",
        enableZoom: true
    },
    {
        id: 9,
        name: "",
        image: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/531909336_1612345633208562_7373156941049781128_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEt1bJIgcirvXA4QsD43jm0NJ_04Dd-8eg0n_TgN37x6LWHMmiL3T_6rNX__Hn38TVgrFTvs5yQXSCgGPmtS6qo&_nc_ohc=0zr5etD9IVQQ7kNvwFJP-mg&_nc_oc=AdkYdV8ZsMzNBCgVJqAzwzA0IuIvnabcQw8EvIuw2mkN_1M9gwREhHaVa8RenIzcfnvVoXWmVuPW6VaoG8fb2sFi&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=3KVvbocP7IaqJyZOGSUyyA&oh=00_AfUHFre3v7p-t4rGhgEHRMet0avgPKMkA2mhriX3TdKZeg&oe=68B39AD6",
        description: "",
        enableZoom: true
    },
    {
        id: 10,
        name: "",
        image:"https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/533506358_1614173813025744_5093966474361240607_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGg1jRctvXzUOtmyRuT6FO5GmhZTuMBL4saaFlO4wEvi0jlG5LrAcCM9XmlV57DNUd5FHHQIcEChuMTmvhi4cxK&_nc_ohc=jzGN3GL3X4cQ7kNvwH8e85i&_nc_oc=AdlMblLc0Rj-QxKdeL9bTpAq3kC4kht2yLUw8oOo-eQTA59W2wd8G51hBjsCaolIoNtAu67niZOlSjrvLSbpg6bG&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Pzm1bkpedxaw1V584Dyzsw&oh=00_AfVdQ_zAGJuRjxU0lSfZYd2tG9Lvh9G2siI-qbHkCA4iCg&oe=68B3B9FF",
        description: "",
        isFlyer: true,
        enableZoom: true
    }
]; 




















































  
  const toggleExpandCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="anunciantes-container">
      <div className="anunciantes-grid">
        {anunciantes.map(anunciante => (
          <article 
            key={anunciante.id} 
            className={`anunciante-card ${expandedCard === anunciante.id ? 'expanded' : ''}`}
            aria-expanded={expandedCard === anunciante.id}
          >
            <div 
              className={`anunciante-image-container ${anunciante.isFlyer ? 'flyer-container' : ''} ${anunciante.enableZoom ? 'zoom-enabled' : ''}`}
              onClick={() => openImageModal(anunciante.image)}
            >
              <img 
                src={anunciante.image} 
                alt={`Logo de ${anunciante.name}`} 
                className="anunciante-image" 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
                }}
              />
            </div>
            <div className="anunciante-content">
              <header className="anunciante-header">
                <h2>{anunciante.name}</h2>
                {/* Botón de expandir/contraer removido */}
              </header>
              
              <p className="anunciante-description">{anunciante.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      <div className={`anunciante-modal ${selectedImage ? 'active' : ''}`} onClick={closeImageModal}>
        <div className="anunciante-modal-content" onClick={(e) => e.stopPropagation()}>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Vista ampliada" 
              className="anunciante-modal-image" 
            />
          )}
          <button className="anunciante-modal-close" onClick={closeImageModal}>
            <FiX />
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default Anunciantes; 
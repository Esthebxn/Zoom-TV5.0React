import React from 'react';
import './Inicio.css';

const Inicio = () => {
  // Choose either image banner or video banner
  const useVideoBanner = false;
  
  // Sample banner images (replace with your actual images)
  const bannerImages = [
    "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/492150200_1511885449921248_7151884659952141458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEs8bGrQfjPDsnW52DkcbksAirmC_vu_D4CKuYL--78PhRc5ZVXJBNJEpeBMfv9ucmLk_FkUd4l8uVrpwOnkgfo&_nc_ohc=hpQqCi1egqcQ7kNvwGdrDu0&_nc_oc=AdlImOpnVlx0IInQxPQvk1jid0BFcMhDbmXYILRdielks_nbGKZYY2uTHH1xfv-B12Q&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=yxL0DSZxa_OPFvkulo2hzg&oh=00_AfVA3gdLvWpLAZVbdnXgp5mYZZvxDu0lBXSDwpovPdTf-w&oe=6897F331",
    "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/517986579_1589771358799323_569651167261681310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH4dvCZZ1zqo8ALt4K2Fc8-q4Nvfe1iFbGrg2997WIVsY5YALtXwAEhpUAmH9SCK-lUhHFSJ618R4t3hWantFF4&_nc_ohc=Yaj6wN4UcZQQ7kNvwFFSC9J&_nc_oc=AdlBHn-z_hDm2oBk46Tos6RmWbLkP1d44ym5XshUCq-HgruRy1MVe0GiVdwl_xZRjX4&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=xRzbWyPT5jwpclf1uMbF2Q&oh=00_AfVt3YtpPhxyHIL4mYhCP3PSV9yVxBdL-RLqUY6CQUaHaw&oe=68980132",
    "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/517986579_1589771358799323_569651167261681310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH4dvCZZ1zqo8ALt4K2Fc8-q4Nvfe1iFbGrg2997WIVsY5YALtXwAEhpUAmH9SCK-lUhHFSJ618R4t3hWantFF4&_nc_ohc=Yaj6wN4UcZQQ7kNvwFFSC9J&_nc_oc=AdlBHn-z_hDm2oBk46Tos6RmWbLkP1d44ym5XshUCq-HgruRy1MVe0GiVdwl_xZRjX4&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=xRzbWyPT5jwpclf1uMbF2Q&oh=00_AfVt3YtpPhxyHIL4mYhCP3PSV9yVxBdL-RLqUY6CQUaHaw&oe=68980132"
  ];
  
  // Sample video URL (replace with your actual video)
  const videoUrl = "https://www.youtube.com/embed/6T7pUEZfgdM?autoplay=1&mute=1&loop=1&controls=0";
  
  return (
    <main className="inicio-container">
      <section className="banner">
        {useVideoBanner ? (
          <div className="video-banner">
            <iframe 
              src={videoUrl}
              title="Zoom TV Canal 10 Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <>
            <img 
              src={bannerImages[0]} 
              alt="Banner principal Zoom TV Canal 10" 
              loading="lazy"
            />
            <div className="banner-overlay">
              <h1>Zoom TV Canal 10 Megacable</h1>
              <p></p>
            </div>
          </>
        )}
      </section>
      
     
    </main>
  );
};

export default Inicio; 
import NewsPage from '../../components/NewsPage';
import './Musica.css';

export default function Musica() {
  return (
    <NewsPage
      category="musica"
      title="Música"
      subtitle="Noticias del mundo de la música"
      containerClassName="musica-container"
      headerClassName="header-musica"
    />
  );
} 
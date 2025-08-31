import NewsPage from '../../components/NewsPage';
import './Deportes.css';

export default function Deportes() {
  return (
    <NewsPage
      category="deportes"
      title="Deportes Huánuco"
      subtitle="Las últimas noticias del deporte huanuqueño"
      containerClassName="deportes-container"
      headerClassName="header-deportes"
    />
  );
} 
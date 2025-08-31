import NewsPage from '../../components/NewsPage';
import './Actualidad.css';

export default function Actualidad() {
  return (
    <NewsPage
      category="actualidad"
      title="Actualidad"
      subtitle="Noticias Mundiales"
      containerClassName="actualidad-container"
      headerClassName="header-actualidad"
    />
  );
} 
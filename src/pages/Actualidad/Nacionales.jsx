import NewsPage from '../../components/NewsPage';
import './Nacionales.css';

export default function Nacionales() {
  return (
    <NewsPage
      category="nacionales"
      title="Noticias Nacionales"
      subtitle="Información relevante de todo el Perú"
      containerClassName="nacionales-container"
      headerClassName="header-nacionales"
    />
  );
} 
import NewsPage from '../../components/NewsPage';
import './Regionales.css';

export default function Regionales() {
  return (
    <NewsPage
      category="regionales"
      title="Noticias Regionales"
      subtitle="Información de la región Huánuco"
      containerClassName="regionales-container"
      headerClassName="header-regionales"
    />
  );
} 
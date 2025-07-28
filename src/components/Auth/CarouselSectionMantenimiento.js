import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';

// Importa las imágenes
import Image1 from '../Images/images_mantenimiento/control_leche.png';
import Image2 from '../Images/images_mantenimiento/control-despacho.png';
import Image3 from '../Images/images_mantenimiento/control-dona.png';
import Image4 from '../Images/images_mantenimiento/despacho.png';
import Image5 from '../Images/images_mantenimiento/inicio.png';
import Image6 from '../Images/images_mantenimiento/modal-dona.png';
import Image7 from '../Images/images_mantenimiento/resumen-dona.png';

const carouselData = [
  { image: Image5, title: 'Inicio de Sistema', description: 'Interfaz principal rediseñada para mejorar flujo de trabajo del personal médico' },
  { image: Image1, title: 'Control de Inventario', description: 'Visualización mejorada con consultas PostgreSQL optimizadas y indicadores en tiempo real' },
  { image: Image3, title: 'Gestión de Donadoras', description: 'UX/UI rediseñada con iconografía médica y accesibilidad mejorada' },
  { image: Image4, title: 'Analytics Avanzado', description: 'Dashboard estadístico con consultas optimizadas y métricas críticas hospitalarias' },
  { image: Image2, title: 'Despacho Inteligente', description: 'Módulo con búsqueda avanzada y registro optimizado para workflow médico' },
  { image: Image6, title: 'Componentes React', description: 'Modales refactorizados con mejor performance y UX responsiva' },
  { image: Image7, title: 'Reportes Automatizados', description: 'Sistema de generación de reportes con exportación y visualización interactiva' }

];

const CarouselSectionMantenimiento = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <section className="carousel-section">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Características del mantenimiento al Sistema de Banco de Leche</h2>
          <p className="lead text-muted">Explora las nuevas vistas y búsquedas optimizadas del sistema web</p>
        </div>

        {/* Carousel con sombra muy sutil */}
        <Carousel
          fade
          indicators={true}
          controls={true}
          className="rounded"
          style={{ 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Sombra muy sutil
            border: '1px solid rgba(0,0,0,0.05)' // Borde muy sutil
          }}
          onSelect={handleSlideChange}
        >
          {carouselData.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Información con fondo muy sutil */}
        <div 
          className="mt-3 text-center p-3 rounded"
          style={{ 
            backgroundColor: 'rgba(248, 249, 250, 0.3)', // Fondo muy sutil
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <h3 className="fw-bold">{carouselData[currentSlide].title}</h3>
          <p className="text-muted">{carouselData[currentSlide].description}</p>
        </div>
      </Container>
    </section>
  );
};

export default CarouselSectionMantenimiento;
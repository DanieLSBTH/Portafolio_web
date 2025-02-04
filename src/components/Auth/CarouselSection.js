import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';


// Importa las imágenes
import Image1 from '../Images/images_banco/inicio.png';
import Image2 from '../Images/images_banco/inicio_sistem.png';
import Image3 from '../Images/images_banco/donadora.png';
import Image4 from '../Images/images_banco/control.png';
import Image5 from '../Images/images_banco/reporte.png';
import Image6 from '../Images/images_banco/resumen.png';
import Image7 from '../Images/images_banco/chat.png';

const carouselData = [
  { image: Image1, title: 'Inicio', description: 'Bienvenido al banco de leche materna' },
  { image: Image2, title: 'Sistema', description: 'Gestión avanzada de donaciones' },
  { image: Image3, title: 'Donadora', description: 'Registro y seguimiento de donantes' },
  { image: Image4, title: 'Control', description: 'Monitoreo de los procesos de leche' },
  { image: Image5, title: 'Reporte automatizado', description: 'Estadísticas y análisis detallados' },
  { image: Image6, title: 'Resumen', description: 'Vista general del sistema' },
  { image: Image7, title: 'Chat', description: 'Comunicación entre usuarios y equipo médico' },
];


const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <section className="carousel-section py-5 bg-soft-pastel">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Características del Sistema de Banco de Leche</h2>
          <p className="lead text-muted">Explora las principales funcionalidades del sistema web</p>
        </div>

        <Carousel 
          fade 
          indicators={true} 
          controls={true} 
          
          className="rounded shadow-lg"
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

        <div className="mt-3 text-center">
          <h3 className="fw-bold">{carouselData[currentSlide].title}</h3>
          <p className="text-muted">{carouselData[currentSlide].description}</p>
        </div>
      </Container>
    </section>
  );
};

export default CarouselSection;
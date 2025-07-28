import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';


// Importa las imágenes
import Image1 from '../Images/images_capacita/capa1.jpg';
import Image2 from '../Images/images_capacita/capa2.JPG';
import Image3 from '../Images/images_capacita/capa3.JPG';
import Image4 from '../Images/images_capacita/capa4.JPG';
import Image5 from '../Images/images_capacita/capa5.JPG';
import Image6 from '../Images/images_capacita/capa6.JPG';
import Image7 from '../Images/images_capacita/capa7.JPG';

const carouselData = [
  { image: Image1, title: 'Sesiones prácticas', description: 'el uso de la plataforma para la gestión de datos y generación de reportes.' },
  { image: Image2, title: 'Capacitación y demostración', description: 'Automatización de procesos' },
  { image: Image3, title: 'Capacitación y demostración', description: 'Resoulución de dudas por parte del personal' },
  { image: Image4, title: 'Capacitación y demostración', description: 'Guia de usuario para las funcionalidades' },
  { image: Image5, title: 'Capacitación y demostración', description: 'Estadísticas y análisis detallados' },
  { image: Image6, title: 'Capacitación y demostración', description: 'Primeras interaciones con el sistema' },
  { image: Image7, title: 'Soporte y seguimiento ', description: 'post-implementación para resolver dudas y mejorar la experiencia de los usuarios.' },
];


const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <section className="carousel-section">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Capacitación a usuarios del area de salud</h2>
          <p className="lead text-muted">Visualización de capacitación del personal</p>
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
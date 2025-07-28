import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';


// Importa las imágenes
import Image1 from '../Images/images_redes/R1.jpg';
import Image2 from '../Images/images_redes/R2.jpg';
import Image3 from '../Images/images_redes/R3.jpg';
import Image4 from '../Images/images_redes/R4.jpg';


const carouselData = [
  { image: Image1, title: 'Remplazo y actualización de cable UTP', description: 'Se realizo el remplazo de cables en mal estado que surgian problemas de conexión.' },
  { image: Image2, title: 'Configuración de cableado telefonos IP', description: 'Analisis de testeo en terminales que se necesitaban realizar cambios.' },
  { image: Image3, title: 'Organización y gestión de cableado estructurado ', description: 'Organizacion de cableado por colores' },
  { image: Image4, title: 'Fabricación de nuevos cables red ', description: 'Elaboración de nuevos cables para uso en computadoras.' },
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
          <h2 className="fw-bold mb-3">Mantenimiento de cableado de red</h2>
          <p className="lead text-muted">Visualización de trabajo realizado</p>
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
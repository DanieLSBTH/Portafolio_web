import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';


// Importa las imágenes
import Image1 from '../Images/Canva/Curso.png';
import Image2 from '../Images/Canva/Tarea.png';
import Image3 from '../Images/Canva/vista.png';


const carouselData = [
  { image: Image1, title: 'Curso', description: 'Creación de curso en plataforma de Canvas para la prueba de curso por Microsoft.' },
  { image: Image2, title: 'Creacion de tareas', description: 'Asignación de tareas en el entorno de aprendizaje en linea' },
  { image: Image3, title: 'Vista para el estudiante', description: 'Vista en modo estudiante' },

];


const CarouselSectionCanva = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <section className="carousel-section ">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Creación de práctica guiada por curso </h2>
          <p className="lead text-muted">Visualización de módulos creados en Canvas.</p>
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

export default CarouselSectionCanva;
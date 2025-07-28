import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';


// Importa las imágenes
import Image1 from '../Images/images_recursos/login.png';
import Image2 from '../Images/images_recursos/inicio.png';
import Image3 from '../Images/images_recursos/admin.png';
import Image4 from '../Images/images_recursos/departamento.png';
import Image5 from '../Images/images_recursos/archivos_conta.png';
import Image6 from '../Images/images_recursos/gestion_archivo.png';


const carouselData = [
  { image: Image1, title: 'Login', description: 'Bienvenido al sistema de inicio' },
  { image: Image2, title: 'Inicio', description: 'Vista inicial de productos' },
  { image: Image3, title: 'Administración', description: 'Registro e inventario de productos' },
  { image: Image4, title: 'Departamentos', description: 'Departamento de ingreso del entorno de negocio' },
  { image: Image5, title: 'Compartir archivos', description: 'Modulo de interaccion de carga de archivo de distintos departamentos' },
  { image: Image6, title: 'Archivos en la nube', description: 'Archivos cargados en el sistema en conexión con los departamentos .' },
];



const CarouselSectionreco = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <section className="carousel-section">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Características del Sistema de recursos humanos</h2>
          <p className="lead text-muted">Principales funcionalidades del sistema de una farmacia</p>
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

export default CarouselSectionreco;
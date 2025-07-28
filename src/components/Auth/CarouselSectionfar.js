import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';


// Importa las imágenes
import Image1 from '../Images/images_farma/inicio.png';
import Image2 from '../Images/images_farma/inicio_producto.png';
import Image3 from '../Images/images_farma/gestion_producto.png';
import Image4 from '../Images/images_farma/carrito.png';
import Image5 from '../Images/images_farma/datos_cliente.png';
import Image6 from '../Images/images_farma/user.png';


const carouselData = [
  { image: Image1, title: 'Login', description: 'Bienvenido al sistema de inicio' },
  { image: Image2, title: 'Inicio', description: 'Vista de inicio de productos' },
  { image: Image3, title: 'Productos', description: 'Registro e inventario de productos' },
  { image: Image4, title: 'Carrito', description: 'Carrito de compras del sistema' },
  { image: Image5, title: 'Clientes', description: 'Datos de clientes del sistema' },
  { image: Image6, title: 'Usuarios', description: 'Usuarios del sistema' },
];


const CarouselSectionfar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <section className="carousel-section ">
      <Container>
        <div className="text-center mb-4">
        <h2 className="fw-bold mb-3">Características del sistema web de farmacia</h2>
<p className="lead text-muted">Principales funcionalidades del sistema para una farmacia</p>
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

export default CarouselSectionfar;
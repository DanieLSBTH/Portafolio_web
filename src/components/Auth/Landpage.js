import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faShieldAlt, faCloudUploadAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import logo from '../Images/backgrounds/fondo_antigua_1.png';
import logo2 from '../Images/backgrounds/Logos2.png';
import CarouselSection from './CarouselSection'; // Importa el nuevo componente
import ChatBotExample from '../ChatBot/ChatBotExample';
import HeroSection from './HeroSection'; // Importa el nuevo componente



const LandingPage = () => {
  // Animation for hero section
  const heroProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 }
  });

  // Animation for feature cards
  const featureProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 600 }
  });

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <HeroSection /> 

      {/* Mission Section */}
      <animated.section style={featureProps} className="features-section bg-light py-5">
      
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">Visión</h2>
              <p style={{ textAlign: 'justify' }} className="text-muted">
              Desarrollar soluciones innovadoras en sistemas informáticos y web que optimicen procesos, 
              potencien negocios y mejoren la experiencia digital. Ser un referente en desarrollo tecnológico, 
              impulsando la transformación digital con calidad, eficiencia y creatividad. 
              </p>
            </Col>
            <Col md={6}>
              <img 
                src={logo} 
                alt="Misión del Banco de Leche" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
      </animated.section>

       {/* Mission Section */}
       <animated.section style={featureProps} className="features-section bg-light py-5">
      
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">Impacto </h2>
              <p style={{ textAlign: 'justify' }} className="text-muted">
              A través del desarrollo de sistemas informáticos y aplicaciones web, 
              he optimizado procesos, mejorado la eficiencia operativa y facilitado la transformación digital
               de diversas organizaciones. 
               Cada proyecto representa una solución innovadora que impulsa el crecimiento y la accesibilidad tecnológica.
              </p>
            </Col>
            <Col md={6}>
              <img 
                src={logo2} 
                alt="Misión del Banco de Leche" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
      </animated.section>
      {/* Key Features */}
      <animated.section style={featureProps} className="features-section bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Por Qué Somos Importantes</h2>
          <Row>
            {[
              {
                icon: faLaptopCode,
                title: 'Soluciones Tecnológicas Eficientes',
                description: 'Desarrollo sistemas informáticos y aplicaciones web que optimizan procesos y mejoran la productividad.'
              },
              {
                icon: faShieldAlt,
                title: 'Calidad y Seguridad',
                description: 'Cada proyecto se construye con altos estándares de calidad, garantizando eficiencia y protección de datos.'
              },
              {
                icon: faCloudUploadAlt,
                title: 'Transformación Digital',
                description: 'Contribuyo a la evolución tecnológica de empresas y organizaciones, impulsando su crecimiento y accesibilidad'
              }
            ].map((feature, index) => (
              <Col key={index} md={4} className="text-center mb-4">
                <div className="feature-card p-4 bg-white rounded shadow-sm">
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="text-primary mb-3" 
                    size="3x" 
                  />
                  <h4>{feature.title}</h4>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </animated.section>

    
      {/* Call to Action */}
      <section className="cta-section py-5 text-center bg-primary text-white">
        <Container>
          <h2 className="mb-4">Únete a la mejora de los sistemas web</h2>
          <p className="lead mb-4">
          Automatiza y mejora tu forma de trabajar con la ayuda de la teconlogia.
          </p>
          
         {/* <div> 
            <Button color="light" size="lg" className="mx-2" tag={Link} to="/donar">
              Quiero Donar
            </Button>
            <Button color="outline-light" size="lg" className="mx-2" tag={Link} to="/contacto">
              Contáctanos
            </Button>
          </div>*/}
        </Container>
      </section>
      
      <ChatBotExample></ChatBotExample>
      
    </div>
  );
};

export default LandingPage;
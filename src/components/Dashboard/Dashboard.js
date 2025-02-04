import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faShieldAlt, faCloudUploadAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';
import postgresLogo from '../Images/images_banco/postgresql.png';
import reactLogo from '../Images/images_banco/react.png';
import nodeLogo from '../Images/images_banco/node.png';
import oracleLogo from '../Images/images_banco/oracle.png';
import { Link } from 'react-router-dom';

import CarouselSection from '../Auth/CarouselSection'; // Importa el nuevo componente
import CarouselSectionfar from '../Auth/CarouselSectionfar'; // Importa el nuevo componente
import CarouselSectionreco from '../Auth/CarouselSectionreco'; // Importa el nuevo componente

import ReactPlayer from 'react-player';
import logo from '../Images/backgrounds/fondo_antigua_1.png';
import logo2 from '../Images/backgrounds/Logos2.png';




const Dashboard = () => {
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

      {/* Mission Section */}
      <animated.section style={{ ...featureProps, marginTop: '-20px' }} className="features-section bg-light py-5">
      
      <section className="mission-section py-3">
        <Container className="mt-0">
          <Row className="align-items-center">
            <Col md={6}>
            
              <h2 className="mb-4">Sistema Web con API REST para Control y Estadísticas de Pacientes del Banco de Leche Humana, con Reportes al Ministerio de Salud y Asistencia Social</h2>
              <p style={{ textAlign: 'justify' }} className="text-muted">
              Sistema de control y estadística de datos que facilite la gestión de la información
              de pacientes para los usuarios del servicio del banco de leche en el Hospital Pedro de Bethancourt. 
              </p>
              <div className="feature-icons mt-4">
                    <img src={nodeLogo} alt="nodejs"
                      className="text-info" 
                      width="50" 
                    />
                    <img src={reactLogo} alt="react"
                      className="text-info" 
                      width="50"
                    />
                    <img src={postgresLogo} alt="PostgreSQL"
                      className="text-info" 
                      width="50"
                    />
                  </div>
            </Col>
            <Col md={6}>
            <CarouselSection />
            </Col>
          </Row>
        </Container>
      </section>
      </animated.section>

      <animated.section style={{ ...featureProps, marginTop: '-20px' }} className="features-section bg-light py-5">
      
      <section className="mission-section py-3">
        <Container className="mt-0">
          <Row className="align-items-center">
            <Col md={6}>
            
              <h2 className="mb-4">Sistema web farmacia en línea con API REST</h2>
              <p style={{ textAlign: 'justify' }} className="text-muted">
              Sistema de control de invetario, gestión de clientes y carrito de compra de productos, gestión de comprobante de compra. 
              </p>
              <div className="feature-icons mt-4">
                    <img src={nodeLogo} alt="nodejs"
                      className="text-info" 
                      width="50" 
                    />
                    <img src={reactLogo} alt="react"
                      className="text-info" 
                      width="50"
                    />
                    <img src={postgresLogo} alt="PostgreSQL"
                      className="text-info" 
                      width="50"
                    />
                  </div>
            </Col>
            <Col md={6}>
            <CarouselSectionfar />
            </Col>
          </Row>
        </Container>
      </section>
      </animated.section>

      <animated.section style={{ ...featureProps, marginTop: '-20px' }} className="features-section bg-light py-5">
      
      <section className="mission-section py-3">
        <Container className="mt-0">
          <Row className="align-items-center">
            <Col md={6}>
            
              <h2 className="mb-4">Sistema recursos humanos con Oracle Apex</h2>
              <p style={{ textAlign: 'justify' }} className="text-muted">
              Control de empleados con sistemas Oracle para el funcionamiento de registros de cada departamento 
              con funcionalidad de compartir archivos entre usuarios del mismo rol. 
              </p>
              <div className="feature-icons mt-4">
                    <img src={oracleLogo} alt="oracle"
                      className="text-info" 
                      width="100" 
                    />
                   
                  </div>
            </Col>
            <Col md={6}>
            <CarouselSectionreco />
            </Col>
          </Row>
        </Container>
      </section>
      </animated.section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center bg-primary text-white">
        <Container>
          <h2 className="mb-4">Únete a la mejora de los sistemas web</h2>
          <p className="lead mb-4">
            Automatiza y mejora tu forma de trabajar con la ayuda de la tecnología.
          </p>
        </Container>
      </section>
    </div>
  );
};

export default Dashboard ;
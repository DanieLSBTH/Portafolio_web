import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSpring, animated } from '@react-spring/web';
import logo3 from '../Images/backgrounds/wallpaper-girl.jpg'; // Fondo
import '../Css/Navidad.css';

const HeroSection = () => {
  const featureProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 600 },
  });



  return (
    <animated.section
      style={{
        ...featureProps,
        position: 'relative',
        color: 'white',
        padding: '50px 0',
        overflow: 'hidden',
       
      }}
    >
      {/* Fondo con gradiente más oscuro para tema de seguridad */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,15,35,0.8)), url(${logo3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      ></div>

      {/* Contenido principal */}
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1
              className="display-4 mb-4"
              style={{
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                color: '#00d4ff', // Color cyan para tema tech
              }}
            >
              Portafolio de Proyectos
            </h1>
            <p
              className="lead mb-4"
              style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              "Protegiendo el futuro digital, un sistema a la vez. 
              Cada proyecto es una fortaleza que transforma vulnerabilidades en seguridad."
            </p>
            <div className="security-badges mt-4">
              <span className="badge-item">🔒 Ethical Hacking</span>
              <span className="badge-item">🛡️ Desarrollo web</span>
              <span className="badge-item">🔍 Big Data</span>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="image-container">
              <img
                src={logo3}
                alt="Seguridad Informática"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxWidth: '400px',
                  border: '2px solid #f5fbfcff',
                
                }}
              />
              {/* Overlay de seguridad */}
              <div className="security-overlay">
                <div className="scan-line"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Partículas de seguridad flotantes */}
    
    </animated.section>
  );
};

export default HeroSection;
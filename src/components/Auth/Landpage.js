import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faShieldAlt, faCloudUploadAlt, faPlay, faCode, faLock, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, useInView } from '@react-spring/web';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import logo from '../Images/backgrounds/fondo_antigua_1.png';
import logo2 from '../Images/backgrounds/Logos2.png';
import CarouselSection from './CarouselSection';
import ChatBotExample from '../ChatBot/ChatBotExample';
import HeroSection from './HeroSection';
import '../Css/LandPage.css'
import logo3 from '../Images/backgrounds/wallpaper-girl.jpg';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hook para detectar cuando los elementos entran en vista
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animación principal del hero
  const heroProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' },
    config: { tension: 280, friction: 60 }
  });

  // Animación escalonada para las tarjetas de características
  const featureCards = useSpring({
    from: { opacity: 0, transform: 'translateY(40px) scale(0.9)' },
    to: { 
      opacity: inView ? 1 : 0, 
      transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)' 
    },
    config: { tension: 300, friction: 30 },
    delay: 200
  });

  // Animación para las secciones de misión e impacto
  const sectionAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 280, friction: 60 }
  });

  return (
    <div className="landing-page modern-portfolio">
      {/* Hero Section */}
      <animated.div style={heroProps}>
        <HeroSection />
      </animated.div>

      {/* Sección Visión con diseño mejorado */}
      <animated.section style={sectionAnimation} className="vision-section py-5">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col md={6} className="order-md-1 order-2">
              <div className="content-wrapper">
                <div className="section-badge mb-3">
                  <FontAwesomeIcon icon={faRocket} className="me-2" />
                  Visión
                </div>
                <h2 className="section-title mb-4">Innovación Tecnológica</h2>
                <p className="section-description">
                  Desarrollar soluciones innovadoras en sistemas informáticos y web que optimicen procesos, 
                  potencien negocios y mejoren la experiencia digital. Ser un referente en desarrollo tecnológico, 
                  impulsando la transformación digital con calidad, eficiencia y creatividad.
                </p>
                <div className="accent-line"></div>
              </div>
            </Col>
            <Col md={6} className="order-md-2 order-1 mb-4 mb-md-0">
              <div className="image-container">
                <img 
                  src={logo} 
                  alt="Visión Tecnológica" 
                  className="modern-image"
                />
                <div className="image-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </animated.section>

      {/* Sección Impacto con diseño invertido */}
      
      <section className="impact-section py-5 ">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="image-container">
                <img 
                  src={logo2} 
                  alt="Impacto Tecnológico" 
                  className="modern-image"
                />
                <div className="image-overlay"></div>
              </div>
            </Col>
            <Col md={6}>
              <div className="content-wrapper">
                <div className="section-badge mb-3">
                  <FontAwesomeIcon icon={faCode} className="me-2" />
                  Impacto
                </div>
                <h2 className="section-title mb-4">Transformación Digital</h2>
                <p className="section-description">
                  A través del desarrollo de sistemas informáticos y aplicaciones web, 
                  he optimizado procesos, mejorado la eficiencia operativa y facilitado la transformación digital
                  de diversas organizaciones. 
                  Cada proyecto representa una solución innovadora que impulsa el crecimiento y la accesibilidad tecnológica.
                </p>
                <div className="accent-line"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Características Mejorada */}
      <animated.section ref={ref} style={featureCards} className="features-section py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mx-auto mb-3">
              <FontAwesomeIcon icon={faLock} className="me-2" />
              
            </div>
            <h2 className="main-title">Contribución en el Desarrollo</h2>
            <p className="subtitle">Soluciones tecnológicas que marcan la diferencia</p>
          </div>
          
          <Row className="g-4">
            {[
              {
                icon: faLaptopCode,
                title: 'Soluciones Tecnológicas Eficientes',
                description: 'Desarrollo sistemas informáticos y aplicaciones web que optimizan procesos y mejoran la productividad.',
                color: 'primary'
              },
              {
                icon: faShieldAlt,
                title: 'Calidad y Seguridad',
                description: 'Cada proyecto se construye con altos estándares de calidad, garantizando eficiencia y protección de datos.',
                color: 'success'
              },
              {
                icon: faCloudUploadAlt,
                title: 'Transformación Digital',
                description: 'Contribuyo a la evolución tecnológica de empresas y organizaciones, impulsando su crecimiento y accesibilidad.',
                color: 'info'
              }
            ].map((feature, index) => (
              <Col key={index} md={4}>
                <div className={`modern-feature-card feature-${feature.color}`}>
                  <div className="feature-icon-wrapper">
                    <FontAwesomeIcon 
                      icon={feature.icon} 
                      className="feature-icon"
                    />
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                  <div className="feature-glow"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </animated.section>

      {/* Call to Action Mejorado */}
      <section 
        className="modern-cta-section py-5 text-center text-white"
        style={{
          backgroundImage: `url(${logo3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="modern-bg-overlay"></div>
        <Container>
          <div className="cta-content">
           
            <h2 className="cta-title mb-4">Únete a la Mejora de los Sistemas Web</h2>
            <p className="cta-description mb-4">
              Automatiza y mejora tu forma de trabajar con la ayuda de la tecnología.
            </p>
            <div className="cta-particles"></div>
          </div>
        </Container>
      </section>

      <ChatBotExample />
    </div>
  );
};

export default LandingPage;
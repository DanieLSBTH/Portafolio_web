import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';

const ShowPersonal = () => {
  // Animation for the contact section
  const contactProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 }
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });
  

  return (
    <div className="personal-page">
      {/* Contact Section */}
      <animated.section style={contactProps} className="contact-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Contacto</h2>
          <Row className="text-center">
            {/* Correo electrónico */}
            <Col md={4} className="mb-4 mb-md-0">
              <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary mb-3" size="2x" />
                <h4>Correo Electrónico</h4>
                <p className="text-muted">josuemarque15@gmail.com</p>
              </div>
            </Col>

            {/* Teléfono */}
            <Col md={4} className="mb-4 mb-md-0">
              <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} className="text-primary mb-3" size="2x" />
                <h4>Teléfono</h4>
                <p className="text-muted">+502 37725975</p>
              </div>
            </Col>

            {/* Ubicación */}
            <Col md={4} className="mb-4 mb-md-0">
              <div className="contact-info">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mb-3" size="2x" />
                <h4>Ubicación</h4>
                <p className="text-muted">Antigua Guatemala, Guatemala</p>
              </div>
            </Col>
          </Row>

          {/* Botón de contacto */}
          <Row className="justify-content-center mt-4">
            <Col md={6} className="text-center">
              <Button color="primary" size="lg" className="mt-3" href="mailto:josuemarque15@gmail.com">
                Enviar un Mensaje
              </Button>
            </Col>
          </Row>
        </Container>
      </animated.section>

     

      {/* Personal Information Section */}
      <animated.div style={fadeIn}>
      <section className="personal-info-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">Sobre Mí</h2>
              <p style={{ textAlign: 'justify' }} className="text-muted">
                Desarrollador de software interesado por la creación de soluciones tecnológicas innovadoras.
                Con experiencia en el desarrollo de aplicaciones web y sistemas informáticos, enfocado en optimizar
                procesos y mejorar la experiencia del usuario. Mi objetivo es contribuir a la transformación digital
                de las organizaciones, ofreciendo soluciones de calidad y eficiencia.
              </p>
            </Col>
            <Col md={6}>
              <img 
                src="https://via.placeholder.com/400" 
                alt="Mi Foto" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
      </animated.div>
    </div>
  );
};

export default ShowPersonal;
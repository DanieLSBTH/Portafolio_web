import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressBar } from 'primereact/progressbar';
import { ProgressSpinner } from 'primereact/progressspinner';
import { faGraduationCap, faCertificate, faBook, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';
import '../Css/educacion.css';
import logo from '../Images/Cursos/certificado_microsoft.jpg'; // Importa tu imagen
import logo2 from '../Images/Cursos/cierre_de_pensum.jpg'; // Importa tu imagen
import logo3 from '../Images/Cursos/c.png'; // Importa tu imagen
import logo4 from '../Images/Cursos/css.jpg'; // Importa tu imagen
import logo5 from '../Images/Cursos/estrucura_de_datos.jpg'; // Importa tu imagen
import logo6 from '../Images/Cursos/html.jpg'; // Importa tu imagen
import logo7 from '../Images/Cursos/java.png'; // Importa tu imagen
import logo8 from '../Images/Cursos/javascript.png'; // Importa tu imagen
import logo9 from '../Images/Cursos/responsive.jpg'; // Importa tu imagen
import logo10 from '../Images/Cursos/sql.png'; // Importa tu imagen
import logo11 from '../Images/Cursos/ia.jpg'; // Importa tu imagen
import logo12 from '../Images/Cursos/cisco.jpg'; 
import logo13 from '../Images/Cursos/IA_HELSINK.png';
import logo14 from '../Images/Cursos/AWS_FSE.jpg';

const ShowUsuario = () => {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar el modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para guardar la imagen seleccionada

  // Animación para la sección de educación
  const educationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 }
  });
  

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="education-page">
      {/* Sección de Educación */}
      <animated.section style={educationProps} className="education-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Educación y Certificaciones</h2>

          {/* Títulos Académicos */}
          <Row className="mb-5">
            <Col md={12}>
              <h3 className="mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                Títulos Académicos
              </h3>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Ingeniería en
                Sistemas de Información y Ciencias de la Computación</h4>
                <p className="text-muted">Universidad Mariano Gálvez de Guatemala</p>
                <p className="text-muted">2020 - 2024</p>
                <p>
                  Especialización en desarrollo de aplicaciones web y móviles, con enfoque en tecnologías modernas como
                  React, Node.js y bases de datos PostgreSQL.
                </p>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Maestría en Seguridad Informática <br /><br /></h4>
                <p className="text-muted">Universidad Mariano Gálvez de Guatemala</p>
                <p className="text-muted">2025</p>
                <p>
                 Estudiante de maestría 
                </p>
              </Card>
            </Col>
          </Row>

          {/* Certificaciones */}
          <Row className="mb-5">
            <Col md={12}>
              <h3 className="mb-4">
                <FontAwesomeIcon icon={faCertificate} className="me-2" />
                Certificaciones
              </h3>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Tecnico en Big Data <br /><br /></h4>
                <p className="text-muted">Fundación Carlos Slim</p>
                <p className="text-muted">2025</p>
                <p className="text-muted">En proceso</p>
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
       
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Hacker ético <br /><br /></h4>
                <p className="text-muted">Cisco Networking Academy</p>
                <p className="text-muted">2025</p>
                <p className="text-muted">En proceso</p>
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
       
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Elementos de la IA <br /><br /></h4>
                <p className="text-muted">Universidad de Helsinki y Reaktor</p>
                <p className="text-muted">2025</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo13)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>AWS Security Best Practices: Monitoring and Alerting<br /><br /></h4>
                <p className="text-muted">AWS training certification</p>
                <p className="text-muted">2025</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo14)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Introducción a la ciberseguridad <br /><br /></h4>
                <p className="text-muted">Cisco Networking Academy</p>
                <p className="text-muted">2025</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo12)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Fundamentos profesionales de IA generativa</h4>
                <p className="text-muted">Microsoft y LinkedIn</p>
                <p className="text-muted">2025</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo11)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Fundamentos profesionales del análisis de datos</h4>
                <p className="text-muted">Microsoft y LinkedIn</p>
                <p className="text-muted">2024</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Cierre de pensum Ingeniería en sistemas</h4>
                <p className="text-muted">Universidad Mariano Gálvez</p>
                <p className="text-muted">2024</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo2)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso C++<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo3)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso Css<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo4)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Estrucura de datos<br /><br /></h4>
                <p className="text-muted">Fundacion Carlos Slim</p>
                <p className="text-muted">2022</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo5)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso html<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo6)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso Java<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo7)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso JavaScript<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo8)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso Responsive<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo9)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="p-4 shadow-sm">
                <h4>Curso SQL<br /><br /></h4>
                <p className="text-muted">Sololearn</p>
                <p className="text-muted">2021</p>
                <Button color="primary" size="sm" onClick={() => openModal(logo10)}>
                  Ver Certificado
                </Button>
              </Card>
            </Col>
          </Row>

          {/* Modal para mostrar la imagen */}
          <Modal isOpen={modalOpen} toggle={closeModal} centered className="modal-transparent">
            <ModalBody className="text-center position-relative p-0">
              {/* Botón de cerrar personalizado */}
              <Button
              color="link"
              onClick={closeModal}
              className="position-absolute top-0 end-0 btn-close-custom"
              style={{ zIndex: 1, margin: '10px' }}
              >
              <FontAwesomeIcon icon={faTimes} size="lg" />
              </Button>

              {/* Imagen del certificado */}
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Certificado"
                  className="img-fluid rounded shadow"
                />
              )}
            </ModalBody>
          </Modal>
        </Container>
      </animated.section>
    </div>
  );
};

export default ShowUsuario;
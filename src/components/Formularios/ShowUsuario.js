import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, ModalBody, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressBar } from 'primereact/progressbar';
import { 
  faGraduationCap, 
  faCertificate, 
  faShieldAlt, 
  faDatabase, 
  faCode, 
  faCloudUploadAlt,
  faBrain,
  faHeadset,
  faProjectDiagram,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web';
import '../Css/educacion.css';

// Importaciones de imágenes (mantenidas igual)
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
import logo15 from '../Images/Cursos/AWS_MYSQL.jpg';
import logo16 from '../Images/Cursos/AWS-Ransomware.jpg';
import logo17 from '../Images/Cursos/Ciberseguridad-SUP.jpg';
import logo18 from '../Images/Cursos/ScrumFunda.jpg';
import logo19 from '../Images/Cursos/Prevencion_delitos_Informaticos.jpg';
import logo20 from '../Images/Cursos/EstrategiaclienteconIABAM.jpg';
import logo21 from '../Images/Cursos/BIG-DATA-CONSU.jpg';
import logo22 from '../Images/Cursos/BIG-DATA-CRE.jpg';
import logo23 from '../Images/Cursos/BIG-DATA-IA.jpg';
import logo24 from '../Images/Cursos/DATA.jpg';
import logo25 from '../Images/Cursos/ISO27001.jpg';

const ShowUsuario = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // Estado para filtrar categorías

  // Animación para la sección de educación
  const educationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 }
  });

  // Funciones para el modal
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Categorías de certificaciones
  const categories = [
    { id: 'all', name: 'Todas', icon: faCertificate },
    { id: 'academic', name: 'Académico', icon: faGraduationCap },
    { id: 'security', name: 'Seguridad', icon: faShieldAlt },
    { id: 'data', name: 'Datos & IA', icon: faDatabase },
    { id: 'development', name: 'Desarrollo', icon: faCode },
    { id: 'cloud', name: 'Cloud', icon: faCloudUploadAlt },
    { id: 'methodology', name: 'Metodologías', icon: faProjectDiagram },
    { id: 'customer', name: 'Atención al Cliente', icon: faHeadset }
  ];

  // Certificaciones organizadas por categorías
  const certifications = [
    // Seguridad
    {
      title: "AUDITOR ISO 270001:2022 FUNDAMENTALS",
      institution: "Hacker Mentor",
      year: "2025",
      image: logo25,
      category: "security",
    },
    {
      title: "Programa de Capacitación sobre Ciberseguridad",
      institution: "Superintendencia de Bancos",
      year: "2025",
      image: logo17,
      category: "security",
    },
    {
      title: "AWS Security Incident Response - Ransomware Use Case",
      institution: "AWS training certification",
      year: "2025",
      image: logo16,
      category: "security",
    },
    {
      title: "AWS Security Best Practices: Monitoring and Alerting",
      institution: "AWS training certification",
      year: "2025",
      image: logo14,
      category: "security",
    },
    {
      title: "Introducción a la ciberseguridad",
      institution: "Cisco Networking Academy",
      year: "2025",
      image: logo12,
      category: "security",
    },
    {
      title: "Prevención de delitos cibernéticos",
      institution: "Fundación Carlos Slim",
      year: "2025",
      image: logo19,
      category: "security",
    },
    // Datos & IA
    {
      title: "Tecnico en Big Data",
      institution: "Fundación Carlos Slim",
      year: "2025",
      image: null,
      category: "data",
      inProgress: true,
    },
    {
      title: "Fundamentos profesionales del análisis de datos",
      institution: "Microsoft y LinkedIn",
      year: "2024",
      image: logo,
      category: "data",
    },
    {
      title: "Data Engineering on AWS - Foundations",
      institution: "aws training and certification",
      year: "2025",
      image: logo24,
      category: "data",
    },
    {
      title: "Análisis de datos y Big Data en operaciones con IA",
      institution: "BANTRAB|GUATEAPRENDE",
      year: "2025",
      image: logo23,
      category: "data",
    },
    {
      title: "Big data & Blockchain",
      institution: "crehana",
      year: "2025",
      image: logo22,
      category: "data",
    },
    {
      title: "Big data: En la mente del consumidor",
      institution: "BANTRAB|GUATEAPRENDE",
      year: "2025",
      image: logo21,
      category: "data",
    },
    {
      title: "Elementos de la IA",
      institution: "Universidad de Helsinki y Reaktor",
      year: "2025",
      image: logo13,
      category: "data",
    },
    {
      title: "Fundamentos profesionales de IA generativa",
      institution: "Microsoft y LinkedIn",
      year: "2025",
      image: logo11,
      category: "data",
    },
    // Desarrollo
    {
      title: "Curso C++",
      institution: "Sololearn",
      year: "2021",
      image: logo3,
      category: "development",
    },
    {
      title: "Curso Css",
      institution: "Sololearn",
      year: "2021",
      image: logo4,
      category: "development",
    },
    {
      title: "Estrucura de datos",
      institution: "Fundacion Carlos Slim",
      year: "2022",
      image: logo5,
      category: "development",
    },
    {
      title: "Curso html",
      institution: "Sololearn",
      year: "2021",
      image: logo6,
      category: "development",
    },
    {
      title: "Curso Java",
      institution: "Sololearn",
      year: "2021",
      image: logo7,
      category: "development",
    },
    {
      title: "Curso JavaScript",
      institution: "Sololearn",
      year: "2021",
      image: logo8,
      category: "development",
    },
    {
      title: "Curso Responsive",
      institution: "Sololearn",
      year: "2021",
      image: logo9,
      category: "development",
    },
    {
      title: "Curso SQL",
      institution: "Sololearn",
      year: "2021",
      image: logo10,
      category: "development",
    },
    // Cloud
    {
      title: "Amazon Relational Database Service for MySQL - Troubleshooting",
      institution: "AWS training certification",
      year: "2025",
      image: logo15,
      category: "cloud",
    },
    // Metodologías
    {
      title: "Scrum Fundamentals Certified | Fourth Edition",
      institution: "SCRUMstudy Targeting success",
      year: "2025",
      image: logo18,
      category: "methodology",
    },
    // Títulos académicos (categoría especial)
    {
      title: "Cierre de pensum Ingeniería en sistemas",
      institution: "Universidad Mariano Gálvez",
      year: "2024",
      image: logo2,
      category: "academic",
    },
    {
      title: "Hacker ético",
      institution: "Cisco Networking Academy",
      year: "2025",
      image: null,
      category: "security",
      inProgress: true,
    },
    //cliente
    {
      title: "Estrategia de servicio y atención al cliente con IA",
      institution: "BANTRAB|GUATEAPRENDE",
      year: "2025",
      image: logo20,
      category: "customer", // Asigna esta categoría a las certificaciones relacionadas
    }
  ];

  // Filtrar certificaciones según la categoría seleccionada
  const filteredCertifications = activeCategory === 'all' 
    ? certifications
    : certifications.filter(cert => cert.category === activeCategory);

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
              <Card className="p-4 shadow-sm h-100">
                <h4>Ingeniería en Sistemas de Información y Ciencias de la Computación</h4>
                <p className="text-muted">Universidad Mariano Gálvez de Guatemala</p>
                <p className="text-muted">2020 - 2024</p>
                <p>
                  Especialización en desarrollo de aplicaciones web y móviles, con enfoque en tecnologías modernas como
                  React, Node.js y bases de datos PostgreSQL.
                </p>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="p-4 shadow-sm h-100">
                <h4>Maestría en Seguridad Informática</h4>
                <p className="text-muted">Universidad Mariano Gálvez de Guatemala</p>
                <p className="text-muted">2025</p>
                <p>
                  Estudiante de maestría en seguridad informática con conocimientos en políticas y estándares de seguridad.
                </p>
              </Card>
            </Col>
          </Row>

          {/* Navegación por categorías */}
          <Row className="mb-4">
            <Col md={12}>
              <h3 className="mb-4">
                <FontAwesomeIcon icon={faCertificate} className="me-2" />
                Certificaciones
              </h3>
              <Nav tabs className="certification-categories mb-4">
                {categories.map(category => (
                  <NavItem key={category.id}>
                    <NavLink
                      className={activeCategory === category.id ? 'active' : ''}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <FontAwesomeIcon icon={category.icon} className="me-2" />
                      {category.name}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Col>
          </Row>

          {/* Certificaciones filtradas */}
          <Row>
            {filteredCertifications.map((cert, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="p-4 shadow-sm h-100 d-flex flex-column">
                  <h4>{cert.title}</h4>
                  <p className="text-muted">{cert.institution}</p>
                  <p className="text-muted">{cert.year}</p>
                  
                  {cert.inProgress ? (
                    <>
                      <p className="text-muted">En proceso</p>
                      <ProgressBar mode="indeterminate" style={{ height: '6px' }} />
                    </>
                  ) : cert.image ? (
                    <div className="mt-auto">
                      <Button color="primary" size="sm" onClick={() => openModal(cert.image)}>
                        Ver Certificado
                      </Button>
                    </div>
                  ) : null}
                </Card>
              </Col>
            ))}
          </Row>

          {/* Modal para mostrar la imagen */}
          <Modal isOpen={modalOpen} toggle={closeModal} centered className="modal-transparent modal-lg">
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
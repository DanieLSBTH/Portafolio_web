import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaEnvelope, 
  FaGraduationCap, 
  FaCode,
  FaServer,
  FaDatabase,
  FaMicrochip,
  FaNetworkWired
} from 'react-icons/fa';
import { 
  HiOutlineCode,
  HiOutlineMail,
  HiOutlineAcademicCap,
  HiOutlineMenu,
  HiOutlineX
} from 'react-icons/hi';
import './Navbar.css';
import logo from '../Images/backgrounds/fondo_antigua_1.png';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Efecto de scroll para cambiar el navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para verificar si la ruta está activa
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const NavContent = () => (
    <>
      <Nav className="me-auto nav-animate">
        <Link 
          className={`nav-link tech-nav-link ${isActiveRoute('/project') ? 'active' : ''}`} 
          to="/project" 
          onClick={handleClose}
        >
          <div className="nav-icon-wrapper">
            <HiOutlineCode className="nav-icon" />
            <FaCode className="nav-icon-hover" />
          </div>
          <span className="nav-text">Proyectos</span>
          <div className="nav-line"></div>
        </Link>
        
        <Link 
          className={`nav-link tech-nav-link ${isActiveRoute('/contact') ? 'active' : ''}`} 
          to="/contact" 
          onClick={handleClose}
        >
          <div className="nav-icon-wrapper">
            <HiOutlineMail className="nav-icon" />
            <FaEnvelope className="nav-icon-hover" />
          </div>
          <span className="nav-text">Contacto</span>
          <div className="nav-line"></div>
        </Link>
        
        <Link 
          className={`nav-link tech-nav-link ${isActiveRoute('/education') ? 'active' : ''}`} 
          to="/education" 
          onClick={handleClose}
        >
          <div className="nav-icon-wrapper">
            <HiOutlineAcademicCap className="nav-icon" />
            <FaGraduationCap className="nav-icon-hover" />
          </div>
          <span className="nav-text">Educación</span>
          <div className="nav-line"></div>
        </Link>
      </Nav>
      
      {/* Elementos decorativos tech */}
      <div className="tech-elements d-none d-lg-flex">
        <div className="tech-dot"></div>
        <div className="tech-line"></div>
        <div className="tech-bracket">[</div>
        <div className="status-indicator">
          <div className="status-dot"></div>
          <span className="status-text">Online</span>
        </div>
        <div className="tech-bracket">]</div>
      </div>
    </>
  );

  return (
    <Navbar 
      expand="lg" 
      className={`navbar tech-navbar ${scrolled ? 'scrolled' : ''}`} 
      variant="dark"
      fixed="top"
    >
      <Container fluid className="navbar-container">
        {/* Logo y Brand */}
        <div className="brand-section">
          <Navbar.Brand as={Link} to="/" className="tech-brand">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="brand-logo" />
              <div className="logo-overlay">
                <FaMicrochip className="tech-chip" />
              </div>
            </div>
            <div className="brand-info d-none d-md-block">
              <span className="brand-name">Portfolio</span>
              <span className="brand-subtitle">Ing. Sistemas</span>
            </div>
          </Navbar.Brand>
        </div>

        {/* Botón mobile personalizado */}
        <button 
          className="custom-toggle d-lg-none"
          onClick={handleShow}
          aria-label="Toggle navigation"
        >
          <div className="toggle-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <Navbar.Collapse id="navbar-content" className="d-none d-lg-flex justify-content-end">
          <NavContent />
        </Navbar.Collapse>

        {/* Mobile Offcanvas */}
        <Offcanvas 
          show={show} 
          onHide={handleClose} 
          placement="end" 
          className="tech-offcanvas d-lg-none"
        >
          <Offcanvas.Header className="tech-offcanvas-header">
            <div className="offcanvas-title-section">
              <FaNetworkWired className="offcanvas-icon" />
              <Offcanvas.Title className="tech-title">Navegación</Offcanvas.Title>
            </div>
            <button className="custom-close-btn" onClick={handleClose}>
              <HiOutlineX />
            </button>
          </Offcanvas.Header>
          
          <Offcanvas.Body className="tech-offcanvas-body">
            <NavContent />
            
            {/* Footer móvil con info tech */}
            <div className="mobile-footer">
              <div className="tech-info">
                <FaServer className="footer-icon" />
                <span>Sistema Activo</span>
              </div>
              <div className="connection-status">
                <div className="connection-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
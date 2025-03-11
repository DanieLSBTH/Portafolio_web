import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChartLine, FaRobot, FaComments, FaCommentAlt, FaPaperPlane, FaUsers, FaFemale, FaUserNurse, FaHospitalUser, FaUserMd, FaBaby, FaHeartbeat, FaFlask, FaWater, FaHandsHelping } from 'react-icons/fa';
import './Navbar.css';
import logo from '../Images/backgrounds/fondo_antigua_1.png';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NavContent = () => (
    <>
      <Nav className="me-auto nav-animate">
        <Link className="nav-link" to="/dashboard" onClick={handleClose}>
          <FaChartLine /> <span>Proyectos</span>
        </Link>
        <Link className="nav-link" to="/showpersonal" onClick={handleClose}>
          <FaUserNurse /> <span>Contacto</span>
        </Link>
        <Link className="nav-link" to="/showusuario" onClick={handleClose}>
          <FaUserNurse /> <span>Educación</span>
        </Link>
        
       
      </Nav>
    </>
  );

  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="navbar-logo ms-0">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </div>

        <div className="d-flex align-items-center">
          <Navbar.Toggle 
            aria-controls="navbar-content" 
            onClick={handleShow} 
            className="ms-2"
          />
        </div>

        {/* Desktop view */}
        <Navbar.Collapse id="navbar-content" className="d-none d-lg-flex justify-content-end">
          <NavContent />
        </Navbar.Collapse>
        
        {/* Mobile view */}
        <Offcanvas show={show} onHide={handleClose} placement="end" className="d-lg-none">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavContent />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
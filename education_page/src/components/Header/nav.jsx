import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/nav.css';
import 'boxicons/css/boxicons.min.css'; 

function CustomNav() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" expanded={expanded} className={`navbar ${expanded ? 'expanded' : ''}`}>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src="../../../Images/logo.png" alt="image" />
          <Navbar.Brand className='nav-brand' href="#home">
            Brain<span style={{ color: "#7eec6d", margin: "0 2.3px", fontSize: "23px" }}>BOOST</span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className={`me-auto navLink-div ${expanded ? 'expanded' : ''}`}>
            <Nav.Link className="navLink" href="#about">About</Nav.Link>
            <Nav.Link className="navLink" href="#features">Features</Nav.Link>
            <Nav.Link className="navLink" href="#courses">Courses</Nav.Link>
            <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
            <Button variant="none" href='#contact' className='contact-btn ' id="cont-btn">Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
       
        <i className={`bx bx-menu text-white ham ${expanded ? 'open' : ''}`} onClick={toggleNavbar}></i>
      </Container>
    </Navbar>
  );
}

export default CustomNav;

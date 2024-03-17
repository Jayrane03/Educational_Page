import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/nav.css';

function CustomNav() {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src="../../../Images/logo.png" alt="image" />
          <Navbar.Brand className='nav-brand' href="#home">
            Brain<span style={{ color: "#7eec6d", margin: "0 2.3px", fontSize: "23px" }}>BOOST</span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="me-auto navLink-div">
          <Nav.Link className="navLink" href="#about">About</Nav.Link>
            <Nav.Link className="navLink" href="#features">Features</Nav.Link>
            <Nav.Link className="navLink" href="#courses">Courses</Nav.Link>
          
            <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="none" href='#contact' className='contact-btn'>Contact Us</Button>
      </Container>
    </Navbar>
  );
}

export default CustomNav;

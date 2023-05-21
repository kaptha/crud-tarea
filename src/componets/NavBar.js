import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from '../images/carrito.png';
import logouno from '../images/tablets.png'
export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img className="logo" src={logouno}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Caracteristicas</Nav.Link>
            <Nav.Link href="#pricing">Precios</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Iniciar sesion</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img className="cart-logo" src={cart}></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import cart from '../images/carrito.png';
import logouno from '../images/tablets.png'
export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo" src={logouno}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Caracteristicas</Nav.Link>
            <Nav.Link href="#">Precios</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Iniciar sesion</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <img className="cart-logo" src={cart}></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
       <Outlet></Outlet>
    </section>
    </div>
  )
}

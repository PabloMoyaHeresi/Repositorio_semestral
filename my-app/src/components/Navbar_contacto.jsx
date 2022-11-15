import React from 'react';
import "./estilos.css";
import "./css/bootstrap.min.css";
import image4 from '../images/jarana-modified.png';
import icono from '../images/carrito-de-compras.png';
import { Nav, Navbar, Container, NavDropdown, Button} from 'react-bootstrap';

function Navbar_contacto() {
  return (
    <Navbar className='fondo1' expand="lg">
      <Container fluid>
      <Navbar.Brand href="/">
      <img
              src={image4}
              width="30"
              height="30"
              className="d-inline-block align-top espacio4"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="/"><h5 className='d-inline-block letra'>Jarana</h5></Nav.Link>
            <Nav.Link href="/Productos"><h6 className='d-inline-block letra'>Productos</h6></Nav.Link>
            <Nav.Link href="/Contacto"><h6 className='d-inline-block activo letra'>Contacto</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_contacto
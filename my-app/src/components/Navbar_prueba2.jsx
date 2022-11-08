import React from 'react';
import "./estilos.css";
import "./css/bootstrap.min.css";
import image4 from '../images/jarana-modified.png';
import image5 from '../images/tablero1.jpeg';
import image6 from '../images/tablero2.jpeg';
import image7 from '../images/tablero3.jpeg';
import image8 from '../images/foto1.jpeg';
import { Nav, Navbar, Container, NavDropdown, Button} from 'react-bootstrap';

function Navbar_prueba() {
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
            <Nav.Link href="/Productos"><h6 className='d-inline-block activo2 letra'>Productos</h6></Nav.Link>
            <Nav.Link href="/Nosotros"><h6 className='d-inline-block letra'>Nosotros</h6></Nav.Link>
            <Nav.Link href="/Contacto"><h6 className='d-inline-block letra'>Contacto</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_prueba
import { NavLink } from "react-router-dom";
// import { routes } from "../helpers/routes";
// import { Navbar, Container, Nav } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="bg-dark ">
          <Col xs={6} md={6}>
            <Image src="/171x181" className="logo" roundedCircle />
          </Col>
        </Row>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="bg-danger d-flex justify-content-center ">
            <Form.Control
              className="mt-md-2 w-50 d-flex justify-content-center   "
              type="text"
              placeholder="Buscar"
              id="inputSearch"
              aria-describedby="passwordHelpBlock"
            />
          </Row>
          {/* <form
    className="d-flex w-100 justify-content-center p-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 justify-content-md-end justify-content-lg-center justify-content-xl-center"
    role="search" id="buscador">
    <input className="form-control form-controlindex input  border fst-italic "
      type="search" placeholder="Buscar"
      aria-label="Search" />
      <ul id="listaArticulos">
        
     </ul>
    <button type="submit"
      className="bg-white d-flex gap-2 buttonindex text-dark border fst-italic">
      <i className="bi bi-search fs-5"></i>
    </button>

  </form> */}
          <Nav className="me-auto bg-warning ">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="productos">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="registro">
              Registro
            </Nav.Link>
            <Nav.Link as={NavLink} to="login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
//

// <nav>
{
  /* <ul className="container d-flex gap-3 p-4">
         <NavLink to="/">Inicio</NavLink>
         <NavLink to="/nosotros">Nosotros</NavLink>
         <NavLink to="/contacto">Contacto</NavLink>
         <NavLink to="/registro">Registro</NavLink>
         <NavLink to="/login">Login</NavLink> */
}

{
  /* {routes.map(({ label, path }) => {
          <li>
            <NavLink to={path}>{label}</NavLink>
          </li>;
        })} */
}
{
  /* </ul>
    </nav> */
}

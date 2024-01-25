import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import LogoYoCampo from "../assets/img/LogoYoCampo.jpg";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalEx from "./Modal";
import iconos from "../helpers/iconos";
// import {routes} from "../helpers/routes"

function NavBarEx() {
  return (
    <Navbar expand="lg" className=" sticky-top bg-info ">
      <Container className="gap-3  d-flex flex-lg-column  ">
        <Navbar className="  col-8 col-lg-12 ">
          <Container className="d-flex justify-content-between ">
            <Nav.Link as={NavLink} to="/" className="col-3">
              <Image src={LogoYoCampo} className="" roundedCircle />
            </Nav.Link>
            <Form className="d-flex col-6 d-none d-lg-flex ">
              <Form.Control
                type="search"
                placeholder="Buscar productos"
                className=" imputBuscar"
                aria-label="Search"
              />
              <Button variant="" className="iconoBuscar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-search"
                  viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Button>
            </Form>
            <ul className="d-flex justify-content-center gap-3  ">
            
              {
                 iconos.map((s)=> {
                 return (
                   
                   <li key={s.idSvg}>{s.svg}</li>

                 ) 
                 
                 })
              }
            </ul>
          </Container>
        </Navbar>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="w-100  justify-content-lg-center d-lg-flex  ">
          <Nav className="p-2">
            <Form className="d-flex  d-lg-none ">
              <Form.Control
                type="search"
                placeholder="Buscar productos"
                className=" imputBuscar"
                aria-label="Search"
              />
              <Button variant="" className="iconoBuscar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-search"
                  viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Button>
            </Form>
            <div>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
           
             <Nav.Link as={NavLink} to="productos">
              Productos
            </Nav.Link>
             <Nav.Link as={NavLink} to="contacto">
              Contacto
            </Nav.Link>
            <Nav.Link  >
              <ModalEx />
              {/* Registro */}
            </Nav.Link>
            <Nav.Link as={NavLink} to="login">
              Acceder
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarEx;






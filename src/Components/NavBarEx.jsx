import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import LogoYoCampo from "../assets/img/LogoYoCampo.jpg";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import iconos from "../helpers/iconos";
import ModalRegister from "./ModalRegistro";
import ModalLoguin from "./ModalLoguin";
import { useAuth } from "../Context/AuthContext";
// import PaginaRegistro from "../Pages/PaginaRegistro";
// import PaginaLoguin from "../Pages/PaginaLoguin";

function NavBarEx() {
  const { isAuthenticated, logout, user } = useAuth();
  // console.log(isAuthenticated);
  // console.log(user);

  return (
    <Navbar expand="lg" className=" sticky-top bg-info ">
      <Container className="  d-flex justify-content-center  flex-lg-column  ">
        <Navbar className=" bg-danger   col col-lg-12 order-2">
          <Container className="d-flex justify-content-center ">
            <Nav.Link as={NavLink} to="/" className="col-lg-3  ">
              <Image src={LogoYoCampo} className="" roundedCircle />
            </Nav.Link>

            <Form className=" col-lg-6 d-none d-lg-flex ">
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
            <ul className="  d-none d-lg-flex col-lg-3 justify-content-around mt-0 ">
              {iconos.map((s) => {
                return <li key={s.idSvg}>{s.svg}</li>;
              })}
            </ul>
          </Container>
        </Navbar>
        <div className="dropdown order-3 d-lg-none ">
          <NavLink
            className=" dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-person"
              viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {isAuthenticated && user.rule === "admin" ? (
              <>
                <p className="p-0">Hola soy el admin {user.nameUser}</p>
                <Nav.Link as={NavLink} to="admin">
                  Admin
                </Nav.Link>

                <Button
                  to="/contacto"
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </Button>
              </>
            ) : isAuthenticated ? (
              <>
                <p className="p-0">Hola soy el admin {user.nameUser}</p>
                <Nav.Link as={NavLink} to="admin">
                  Admin
                </Nav.Link>

                <Button
                  to="/contacto"
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/* <li>
                  <Nav.Link as={NavLink} to="registro">
                    Registro
                  </Nav.Link>
                </li> */}
                <Nav.Link as={NavLink} to="register">
                  <ModalRegister />
                </Nav.Link>
                <li>
                  <Nav.Link>
                    <ModalLoguin />
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} to="loguin">
                      Acceder
                    </Nav.Link> */}
                </li>
                {/* <li>
                  <Nav.Link as={NavLink} to="loguin">
                    Accederrr
                  </Nav.Link>
                </li> */}
              </>
            )}
          </ul>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="w-100  justify-content-lg-center d-lg-flex order-4 ">
          <Nav className="p-2">
            <Form className="d-flex  d-lg-none w-75  ">
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
                <Nav.Link as={NavLink} to="productos">
                  Productos de listas
                </Nav.Link>
              </NavDropdown>
            </div>

            <Nav.Link as={NavLink} to="contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="forgotPassword">
              Cambio  de contraseña
            </Nav.Link>
            <Nav.Link as={NavLink} to="resetPassword">
              Restablecer Contraseña
            </Nav.Link>
            <Nav.Link as={NavLink} to="nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="productos">
              Productos de listas
            </Nav.Link>

            {isAuthenticated && user.rule === "admin" ? (
              <>
                <p className="p-0">Hola soy el admin {user.nameUser}</p>
                <Nav.Link as={NavLink} to="admin">
                  Admin
                </Nav.Link>

                <Button
                  to="/contacto"
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </Button>
              </>
            ) : isAuthenticated ? (
              <>
                <p className="p-0">Hola {user.nameUser}</p>

                <Button
                  to="/contacto"
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <li>
                  <Nav.Link as={NavLink} to="/registro">
                    Registro
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/login">
                  Acceder
                  </Nav.Link>
                  </li>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarEx;

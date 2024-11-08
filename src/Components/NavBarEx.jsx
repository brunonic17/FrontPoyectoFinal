import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import LogoYoCampo from "../assets/img/LogoYoCampo.jpg";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import iconos, { iconoCarrito, iconofavorito } from "../helpers/iconos";
import { useAuth } from "../Context/AuthContext";

import { useProducts } from "../Context/ProductsContext";
import { useEffect } from "react";
import Buscador from "./Buscador";

function NavBarEx() {
  const { isAuthenticated, logout, user } = useAuth();
  const { productShopping, getProductShopping, quantity, search } =
    useProducts();

  useEffect(() => {
    getProductShopping();
  }, [quantity, isAuthenticated]);

  // console.log(productsPage);

  return (
    <>
      <Navbar expand="lg" className=" bg-body-secondary ">
        <Container className="  d-flex justify-content-center  flex-lg-column  ">
          <Navbar className="col col-lg-12 order-2 order-lg-0">
            <Container className="d-flex justify-content-center container ">
              <Nav.Link as={NavLink} to="/" className="col-lg-3  ">
                <Image src={LogoYoCampo} className="" roundedCircle />
              </Nav.Link>

              <div className=" col-lg-6 d-none d-lg-block order-lg-0 bg-warning">
                <Buscador buscar={search} />
              </div>
              <div className="d-none d-lg-flex col-lg-3 justify-content-end mt-0">
                <ul className=" d-flex gap-3">
                  {iconos.map((s) => {
                    return <li key={s.idSvg}>{s.svg}</li>;
                  })}
                </ul>
              </div>
            </Container>
          </Navbar>
          {/* moviles */}
          <div className="dropdown order-3 d-lg-none ">
            <NavLink
              className=" dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </NavLink>
            <ul
              className="dropdown-menu dropdown-menu1"
              aria-labelledby="dropdownMenuButton1"
              id="dropdownMenuButton1"
            >
              {isAuthenticated && user.rule === "admin" ? (
                <div className=" text-center ">
                  {/* <Nav.Link className=" mb-2" as={NavLink} to="admin">
                    Admin
                  </Nav.Link>
                  <Nav.Link className=" mb-2" as={NavLink} to="admin">
                    {iconoCarrito}
                  </Nav.Link>
                  <div className="contador">{productShopping.length}</div> */}
                  <Button
                    as={NavLink}
                    to="/"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </Button>
                </div>
              ) : isAuthenticated ? (
                <>
                  <p className="p-0">Hola {user.nameUser}</p>

                  <Button
                    as={NavLink}
                    to="/"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <li>
                    <Nav.Link as={NavLink} to="registro">
                      Registro
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} to="favorites">
                      {iconofavorito}
                    </Nav.Link>
                  </li>

                  <Nav.Link as={NavLink} to="login">
                    Acceder
                  </Nav.Link>
                </>
              )}
            </ul>
          </div>
          {/* Menu Hambuguesa */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="w-100  d-lg-flex order-4 justify-content-end align-items-center"
          >
            <Nav className="p-2 w-100 text-lg-start">
              <div className="d-lg-none d-flex w-100">
                <div className="  w-75">
                  <Buscador buscar={search} />
                </div>
                {/* <Button variant="" className="iconoBuscar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Button> */}
              </div>
              <div className="col d-lg-flex  w-25">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <Nav.Link className="" as={NavLink} to="productos">
                    Bombachas
                  </Nav.Link>
                  <Nav.Link className="" as={NavLink} to="productos">
                    Boinas
                  </Nav.Link>
                  <Nav.Link className="" as={NavLink} to="productos">
                    Accesorios
                  </Nav.Link>
                </NavDropdown>

                <Nav.Link as={NavLink} to="contacto">
                  Contacto
                </Nav.Link>
              <div className=" d-lg-none">
              {isAuthenticated && user.rule === "admin" ? (
                  <>
                    <Nav.Link as={NavLink} to="admin">
                      Admin
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="carrito">
                      {iconoCarrito}
                    </Nav.Link>
                    <div className="contadorMovil">{productShopping.length}</div>
                  </>
                ) : null}
              </div>
              </div>
              <div className=" col justify-content-end d-none d-lg-flex align-content-center g-2   ">
                {isAuthenticated && user.rule === "admin" ? (
                  <>
                    <Nav.Link className="userName">Hola {user.nameUser}!</Nav.Link>
                    <Nav.Link as={NavLink} to="admin">
                      Admin
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="favorites">
                      Favoritosssssss
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="carrito">
                      {iconoCarrito}
                    </Nav.Link>
                    <div className="contador">{productShopping.length}</div>
                    <Button
                      as={NavLink}
                      to="/"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : isAuthenticated ? (
                  <>
                    <p className="p-0">Hola {user.nameUser}</p>

                    <Nav.Link as={NavLink} to="favorites">
                      Favoritos
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="carrito">
                      {iconoCarrito}
                    </Nav.Link>
                    <div className="contador">{productShopping.length}</div>

                    <Button
                      as={NavLink}
                      to="/"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <li>
                      <Nav.Link as={NavLink} to="registro">
                        Registro
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={NavLink} to="login">
                        Acceder
                      </Nav.Link>
                    </li>

                    {/* <Nav.Link as={NavLink} to="login">
                      Acceder
                    </Nav.Link> */}
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarEx;

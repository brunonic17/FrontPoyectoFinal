import { NavLink } from "react-router-dom";
import logoAdidas from "../assets/img/logoAdidas.png";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import iconos from "../helpers/iconos";
import QRCode from "react-qr-code";

const Footer = () => {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center p-4 flex-column ">
        <div className=" d-lg-flex w-100 justify-content-center  align-items-lg-baseline ">
          <div className="col  d-flex justify-content-center">
            <Nav.Link as={NavLink} to="/" className="col-lg-3  ">
              <Image src={logoAdidas} className=""  />
            </Nav.Link>
          </div>
          <li className="col d-flex  flex-column justify-content-center align-items-center">
            <h4 className=" text-uppercase text-dark text-xl-center fw-semibold">
              Productos
            </h4>
            <ul>
              {" "}
              <NavLink>About us</NavLink>
            </ul>
            <ul>
              {" "}
              <NavLink>About us</NavLink>
            </ul>
          </li>
          <li className="col d-flex  flex-column justify-content-center align-items-center">
            <h4 className=" text-uppercase text-dark text-xl-center fw-semibold">
              Productos
            </h4>
            <ul>
              {" "}
              <NavLink>About us</NavLink>
            </ul>
            <ul>
              {" "}
              <NavLink>About us</NavLink>
            </ul>
          </li>
          <li className="col d-flex  flex-column justify-content-center align-items-center">
            <h4 className=" text-uppercase text-dark text-xl-center fw-semibold">
              Productos
            </h4>
            <ul>
              {" "}
              <NavLink>About us</NavLink>
            </ul>
            <ul>
              {" "}
              <NavLink>About us</NavLink>
            </ul>
          </li>
          <li className="col d-flex  flex-column justify-content-center align-items-center gap-2">
            <h4 className=" text-uppercase text-dark text-xl-center fw-semibold">
              Siguenos
            </h4>
            <ul
              className=" d-flex mt-0 mb-0 ps-0 justify-content-center gap-3 justify-content-lg-around
           "
            >
              {iconos.map((i) => {
                return <li key={i.idSvg}>{i.svg}</li>;
              })}
            </ul>
            
              <ul>
                {" "}
                <QRCode
                  size={256}
                  style={{ height: "100px", width: "100px" }}
                  value="www.google.com"
                  viewBox={`0 0 100 100`}
                />
              </ul>
            
          </li>
        </div>
        <div className="col bg-body-secondary text-dark p-2 text-center mt-2">
          <p>Copyright Todos los Derechos Reservados - Grupo Shifu</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

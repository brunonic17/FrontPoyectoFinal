import { NavLink } from "react-router-dom";
import LogoYoCampo from "../assets/img/LogoYoCampo.jpg";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import iconos from "../helpers/iconos";
import QRCode from "react-qr-code";

const Footer = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center p-2 d-flex flex-column">
        <div className="col  d-flex justify-content-center">
          <Nav.Link as={NavLink} to="/" className="col-lg-3  ">
            <Image src={LogoYoCampo} className="" roundedCircle />
          </Nav.Link>
        </div>
        <div className="col d-flex  flex-column justify-content-center align-items-center">
          <h3>Nosotros</h3>
          <NavLink>About us</NavLink>
          <NavLink>About us</NavLink>
        </div>
        <div className="col d-flex  flex-column align-items-center">
          <h3>Soporte</h3>

          <NavLink>Contacto</NavLink>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <div className="">
            <h3>Contacto</h3>
          </div>
          <NavLink>Contacto</NavLink>
          <div>
            <QRCode
              size={256}
              style={{ height: "100px", width: "100px" }}
              value="www.google.com"
              viewBox={`0 0 100 100`}
            />
          </div>
        </div>
        <div className="col mt-2">
          <ul className=" d-flex mt-0 mb-0 ps-0 justify-content-around ">
            {iconos.map((i) => {
              return <li key={i.idSvg}>{i.svg}</li>;
            })}
          </ul>
        </div>
        <div className="col bg-body-secondary text-dark p-2 text-center mt-2">
          <p>Copyright Todos los Derechos Reservados - Grupo Shifu</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

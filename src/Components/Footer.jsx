import { NavLink } from "react-router-dom";
import LogoYoCampo from "../assets/img/LogoYoCampo.jpg";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import iconos from "../helpers/iconos";
import QRCode from "react-qr-code";

const Footer = () => {
  return (
    <>
      <div className=" container ">
        <div className="row align-items-start p-2 ">
          <div className="col">
            <Nav.Link as={NavLink} to="/" className="col-lg-3  ">
              <Image src={LogoYoCampo} className="" roundedCircle />
            </Nav.Link>
          </div>
          <div className="col d-flex  flex-column justify-content-between">
            <h3>Nosotros</h3>
            <NavLink>About us</NavLink>
            <NavLink>About us</NavLink>
          </div>
          <div className="col d-flex  flex-column justify-content-between">
            <h3>Soporte</h3>
            
            <NavLink>Contacto</NavLink>
          </div>
          <div className="col flex-column  text-center">
            <ul className=" d-lg-flex justify-content-around mt-0 ">
              {iconos.map((i) => {
                return <li key={i.idSvg}>{i.svg}</li>;
              })}
            </ul>
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
        </div>
      </div>
      <div className="col bg-body-secondary text-dark p-2 text-center">
        <p>Copyright Todos los Derechos Reservados - Grupo Shifu</p>
      </div>
    </>
  );
};

export default Footer;

// import bgContact from "../assets/img/nosotros.jpg";
import "../Pages/CSS/Contacto.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";

import { useNavigate } from "react-router-dom";

function Contacto() {
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth();
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(user.nameUser, user.email, data);
  });

  const alertas = () => {
    if (!isAuthenticated) navigate("/login");
  };
  console.log(user);

  return (
    <>
      <main className="container">
        <h1 className="text-success text-center ">SOY LA PAGINA CONCTACTO</h1>
        <div className="contactoBg"></div>

        <form className=" mt-3">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nombre</label>
            <div className="col-sm-10">
              <input
                type="text"
                value={user.nameUser}
                className="form-control"
                placeholder={isAuthenticated ? user.nameUser : "Nombre"}
                disabled
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                placeholder={isAuthenticated ? user.email : "Email"}
                value={user.email}
                className="form-control"
                id="inputPassword3"
                disabled
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Comentario</label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                placeholder="Descripcion"
                rows="3"
                name="textArea"
                {...register("Description")}
                autoFocus
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={isAuthenticated ? onSubmit : alertas}
          >
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}

export default Contacto;

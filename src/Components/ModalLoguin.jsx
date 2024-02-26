import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
// import { registerRequest } from "../api/auth";
// import axios from "axios"
import { useAuth } from "../Context/AuthContext";
import ModalRegister from "./ModalRegistro";

function ModalLoguin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const navigate = useNavigate();

  const { signin, isAuthenticated, errors: signinErrors } = useAuth();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isAuthenticated);
    reset();
    setTimeout(() => {
      handleClose();
    }, 10000);
    // navigate("/");
  }, [isAuthenticated, reset]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  //   const backRegister = ()=> {
  //    navigate( "/")
  //   }

  return (
    <>
      <p onClick={handleShow}>Acceder</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ACCEDER</Modal.Title>
        </Modal.Header>

        <form className="p-2 bg-secondary ">
          {signinErrors !== "" && (
            <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
              {signinErrors}
            </span>
          )}

          <div className="mb-3">
            <label className="form-label fst-italic">Email</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Correo electrónico es requerido",
                },
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@”]+(.[^<>()[\].,;:\s@”]+)*)|(”.+”))@(([^<>()[\].,;:\s@”]+\.)+[^<>()[\].,;:\s@”]{2,})$/,
                  message: "Correo invalido",
                },
              })}
              className="form-control"
              id="exampleInputPassword"
            />
            {errors.email && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label fst-italic">Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Contraseña es requerida.",
                },
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres.",
                },
                maxLength: {
                  value: 20,
                  message: "La contraseña no puede superar los 20 caracteres",
                },
              })}
              className="form-control"
              id="exampleInputPassword1"
            />
            {errors.password && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.password.message}
              </span>
            )}
          </div>

          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSubmit}>
              Enviar
            </button>

            <Button variant="primary" onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
          <div className="d-flex justify-content-between">
            <p className="d-flex  fw-bold fs-4 text-white fst-italic">
              No tienes una cuenta?
            </p>
            <NavLink className="btn bg-success text-white ">
              <ModalRegister />
            </NavLink>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ModalLoguin;

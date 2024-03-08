import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { registerRequest } from "../api/auth";
// import axios from "axios"
import { useAuth } from "../Context/AuthContext";

function ModalRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { signup, isAuthenticated, errors: authErrors } = useAuth();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isAuthenticated)
    reset()
   const timer =setTimeout(() => {
      handleClose()
      navigate("/")
    }, 1000)
    return ()=> clearTimeout(timer)
    
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    signup(data);
    // const res = await registerRequest(data)
    // axios.post(`http://localhost:4040/api/register`, data)
  });

  return (
    <>
      <p onClick={handleShow}>Registro</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTRO</Modal.Title>
        </Modal.Header>

        <form className="p-2 bg-secondary ">
          <div className="mb-3">
            <label className="form-label fst-italic ">Nombre</label>
            <input
              type="text"
              name="nameUser"
              {...register("nameUser", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos dos letras.",
                },
                maxLength: {
                  value: 20,
                  message: "Tu nombre es demasiado largo, maximo 20 letras.",
                },
              })}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.nameUser && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.nameUser.message}
              </span>
            )}
          </div>
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
              id="exampleInputPassword1"
            />
            {errors.email && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.email.message}
              </span>
            )}

            {authErrors !== "" && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {authErrors}
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
                  message: "La contraseña no puede superar",
                },
              })}
              className="form-control"
              id="exampleInputPassword2"
            />
            {errors.password && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fst-italic">Comfirmar Password</label>
            <input
              type="password"
              name="confirmarPassword"
              {...register("confirmarPassword", {
                required: {
                  value: true,
                  message: "Confirmación de la Contraseña es requerido.",
                },
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
              className="form-control"
              id="exampleInputPassword3"
            />
            {errors.confirmarPassword && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.confirmarPassword.message}
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
        </form>
      </Modal>
    </>
  );
}

export default ModalRegister;

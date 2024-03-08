// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";

// import ModalRegister from "../Components/ModalRegistro";

const PaginaLoguin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 

  const {
    signin,
    errors: signinErrors,
  } = useAuth();

   

  const onSubmit = handleSubmit((data) => {
    console.log(signinErrors)
    signin(data);
  });
  return (
    <>
    <h1 className=" text-center ">Acceder</h1>
     <div className=" container justify-content-center align-items-center p-2 ">
      <form className=" bg-secondary p-2 " onSubmit={onSubmit}>
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
            autoComplete="username"
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
            autoComplete="current-password"
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

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        <div className="d-flex justify-content-between">
        <p className="d-flex  fw-bold fs-4 text-white fst-italic">
          No tienes una cuenta?
        </p>
          <NavLink to="/registro" className="btn bg-success text-white ">
             Registrarme
          </NavLink>
          {/* <NavLink className="btn bg-success text-white ">
             <ModalRegister />
          </NavLink> */}
        </div>
      </form>
    </div>
    </>
      
   
  );
};

export default PaginaLoguin;



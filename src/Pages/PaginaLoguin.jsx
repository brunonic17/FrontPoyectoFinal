// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { iconEyesBlock, iconEyes } from "../helpers/iconos";

const PaginaLoguin = () => {
  const [eyes, setEyes] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { signin, errors: setErrors, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  const cambiarVista = () => {
    setEyes(!eyes);
    console.log(eyes);
  };
  // console.log(setErrors);
  // console.log(setErrors.length);
  return (
    <>
      <h1 className=" text-center ">Acceder</h1>

      <div className=" container  d-flex justify-content-center  align-items-center p-2 maxW ">
        <form className=" p-2 bg-gradient w-100 " onSubmit={onSubmit}>
          {setErrors.length > 0 && (
            <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
              {setErrors}
            </span>
          )}

          <div className="mb-3">
            <label className="form-label fst-italic fw-bold">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="username"
              placeholder="Ingresa tu email"
              {...register("email", {
                //name onc
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
            <label className="form-label fst-italic fw-bold d-flex">
              Password
            </label>
            <div className="d-flex">
              <input
                type={eyes ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                placeholder="********"
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
              <div className="iconEyes" onClick={cambiarVista}>
                {eyes ? iconEyesBlock : iconEyes}
              </div>
            </div>

            {errors.password && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary mt-2 mb-2  d-flex w-100 justify-content-center"
            >
              Iniciar sesión
            </button>
          </div>
          <div>
            <NavLink to="/sendEmail" className=" text-black ">
              Olvidaste tu Contraseña?
            </NavLink>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="d-flex  fw-bold text-black fst-italic">
              No tienes una cuenta?
            </p>

            <NavLink to="/registro" className="btn bg-success text-white ">
              Registrarme
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaginaLoguin;

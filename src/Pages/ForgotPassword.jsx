import { useForm } from "react-hook-form";

// import { useAuth } from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { updatePasswordRequest } from "../api/auth";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useAuth } from "../Context/AuthContext";
import { iconEyes, iconEyesBlock } from "../helpers/iconos";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    // reset,
  } = useForm();

  const params = useParams();

  const { forgot, updatePassword } = useAuth();
  const [eyes, setEyes] = useState(false);
  const [eyesSecund, setEyesSecund] = useState(false);

  // useEffect(() => {
  //   console.log(params);
  // }, []);
  const cambiarVista = () => {
    setEyes(!eyes);
  };
  const cambiarVistaSecund = () => {
    setEyesSecund(!eyesSecund);
  };
  const navigate = useNavigate();

  const alertas = () => {
    return toast.success("Password reestablecida con exito");
  };
  const onSubmit = handleSubmit((data) => {
    if ((params.id, params.token)) {
       updatePassword(params.id, params.token, data);
      
    }
  });
  useEffect(() => {
    if (forgot === true) {
      console.log(forgot);
      alertas();
      const timer = setTimeout(() => {
        navigate("/succesPassword");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [forgot]);
  return (
    <>
      <h1 className=" text-center">Cambio de Contraseña</h1>
      <div className=" container  d-flex justify-content-center  align-items-center p-2 maxW ">
        <form onClick={onSubmit} className="p-2 bg-gradient w-100 ">
          <div className="mb-3">
            <label className="form-label fst-italic fw-bold d-flex">
              {" "}
              Nueva Contraseña
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
            {/* <input
              type={eyes ? "text" : "password"}
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
              className="form-control w-50"
              id="exampleInputPassword2"
            />
            <div className="iconEyes" onClick={cambiarVista}>
              {eyes ? iconEyesBlock : iconEyes}
            </div> */}
            {errors.password && (
              <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fst-italic fw-bold d-flex">
              Comfirmar Contraseña
            </label>
            <div className=" d-flex">
              <input
                type={eyesSecund ? "text" : "password"}
                name="confirmarPassword"
                placeholder="********"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message: "Confirmación de Contraseña es requerido.",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
                className="form-control "
                id="exampleInputPassword3"
              />
              <div className="iconEyes" onClick={cambiarVistaSecund}>
                {eyesSecund ? iconEyesBlock : iconEyes}
              </div>
            </div>
            {errors.confirmarPassword && (
              <span className="fs-4 text-center mt-1  text-white  bg-danger  ">
                {errors.confirmarPassword.message}
              </span>
            )}
          </div>

          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary mt-2 mb-2  d-flex w-100 justify-content-center"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Toaster
        theme="light"
        position="top-center"
        duration={2000}
        toastOptions={{
          style: { background: "gren" },
          className: "my-toast",
        }}
      />
    </>
  );
};

export default ForgotPassword;

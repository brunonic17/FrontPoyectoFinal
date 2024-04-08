import { useForm } from "react-hook-form";

// import { useAuth } from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { updatePasswordRequest } from "../api/auth";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { useAuth } from "../Context/AuthContext";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    // reset,
  } = useForm();

  const params = useParams();

  const { forgot } = useAuth();

  // useEffect(() => {
  //   console.log(params);
  // }, []);

  const navigate = useNavigate();

  const alertas = () => {
    return toast.success("Password reestablecida");
  };
  const onSubmit = handleSubmit((data) => {
    if (params.id, params.token) {
        updatePasswordRequest(params.id, params.token, data);
      
    }
  });
  useEffect(() => {
    if (forgot === true) {
      console.log(forgot)
      alertas();
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [forgot, navigate]);
  return (
    <div>
      <div className="container p-2 ">
        <form onClick={onSubmit} className="p-2 bg-secondary ">
          <h1>Cambio de Contraseña</h1>
          <div className="mb-3">
            <label className="form-label fst-italic"> Nueva Contraseña</label>
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
            <label className="form-label fst-italic">
              Comfirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmarPassword"
              {...register("confirmarPassword", {
                required: {
                  value: true,
                  message: "Confirmación de Contraseña es requerido.",
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

          <button className="btn btn-primary">Cambiar</button>
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
    </div>
  );
};

export default ForgotPassword;

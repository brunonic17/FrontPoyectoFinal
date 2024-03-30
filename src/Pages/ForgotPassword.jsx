import { useForm } from "react-hook-form";

// import { useAuth } from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { updatePasswordRequest } from "../api/auth";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    // reset,
  } = useForm();
  const params = useParams();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await updatePasswordRequest(params.id, data);
    navigate("/login");
    console.log(data);
  });
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
    </div>
  );
};

export default ForgotPassword;

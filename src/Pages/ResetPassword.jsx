// import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    // reset,
  } = useForm();

  // const navigate = useNavigate();
  const { errors: authErrors } = useAuth();

  //   useEffect(() => {
  //     if (isAuthenticated)
  //     reset()
  //    const timer =setTimeout(() => {
  //       handleClose()
  //       navigate("/")
  //     }, 1000)
  //     return ()=> clearTimeout(timer)

  //   }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    // signup(data);
    console.log(data);
    // const res = await registerRequest(data)
    // axios.post(`http://localhost:4040/api/register`, data)
  });

  return (
    <div className=" d-flex flex-column align-items-center ">
    <h1 className=" text-center ">Modificacion de contraseña</h1>
      <div className="container row justify-content-center  bg-dark">
        <form className="p-2 bg-secondary w-50  p-4 ">
          <div className="mb-3">
            <label className="form-label fst-italic">Email</label>
            <input
              type="email"
              name="email"
              placeholder="ej: juan@gmail.com"
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

          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

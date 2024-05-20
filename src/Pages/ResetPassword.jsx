import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    // reset,
  } = useForm();

  const navigate = useNavigate();
  const { errors: sendErrors, sendEmail, send } = useAuth();

  const alertas = () => {
    return toast.success("Correo enviado con éxito");
  };
  const onSubmit = handleSubmit(async (data) => {
    await sendEmail(data);
  });
  useEffect(() => {
    if (send === true) {
      console.log(send)
      alertas();
     const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer)
    }
  }, [send, navigate]);

  return (
    <div className=" d-flex flex-column align-items-center ">
      <h1 className=" text-center ">Modificacion de contraseña</h1>
      <div className="container row justify-content-center  bg-dark">
        <form className="p-2 bg-secondary w-50  p-4 ">
          {sendErrors !== "" && (
            <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
              {sendErrors}
            </span>
          )}
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
          </div>

          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Enviar
          </button>
          {/* <Button variant="info" onClick={onSubmit}>
            Enviar
          </Button> */}
        </form>
      </div>
      <Toaster theme="light" position="top-center"
      duration={2000}
      
      toastOptions={{
        style: { background: 'gren' },
        className: 'my-toast',
      }}
    />
    </div>
  );
};

export default ResetPassword;

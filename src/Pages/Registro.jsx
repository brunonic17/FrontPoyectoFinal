import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();
  

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    registerRequest(data)
    alert("Enviando datos")
    reset()
    
  });
  return (
    <>
      <Container>
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
            {errors.nombre && <span>{errors.nombre.message}</span>}
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
            {errors.email && <span>{errors.email.message}</span>}
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
              id="exampleInputPassword1"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="mb-3">
            <label className="form-label fst-italic">Comfirmar Password</label>
            <input
              type="password"
              name="confirmarPassword"
              {...register("confirmarPassword",{
                required: {
                  value:true,
                  message:"Confirmación de la Contraseña es requerido."
                },
                validate: (value) => value === watch("password") || "Las contraseñas no coinciden"
              })}
              className="form-control"
              id="exampleInputPassword1"
            />
            {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}
          </div>

          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Enviar
          </button>
        </form>
      </Container>
    </>
  );
}

export default Registro;

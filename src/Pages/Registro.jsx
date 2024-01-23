import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();
  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert("Enviando datos")
    reset()
  });
  return (
    <>
      <Container>
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              {...register("nombre", {
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
            <label className="form-label">Email</label>
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
            <label className="form-label">Password</label>
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
            <label className="form-label">Comfirmar Password</label>
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

          <pre>
            {
              JSON.stringify(watch(), null, 2)
            }
          </pre>
        </form>
      </Container>
    </>
  );
}

export default Registro;

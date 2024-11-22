import { useForm } from "react-hook-form";
import { useProducts } from "../Context/ProductsContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Comentarios = (props) => {
  // console.log(props.productCard._id)
  const params = useParams();
  const { getComentries, CreateComentries, comentries } = useProducts();
  const { register, handleSubmit } = useForm();

  const handleComentarios = handleSubmit((data) => {
    data.id = props.productCard._id;
    CreateComentries(data);
  });

  useEffect(() => {
    if (params.id) {
      getComentries(params.id);
    }
  }, []);

console.log(comentries)
 
 

  return (
    <div>
      {" "}
      <h2 className=" text-center">Comentarios</h2>
      <div className=" w-50 bg-body-secondary p-3">
        <form
          onSubmit={handleComentarios}
          className=" container d-flex justify-content-around align-items-center gap-2"
        >
          <textarea
            className="form-control"
            placeholder="Descripcion"
            rows="1"
            {...register("description")}
            autoFocus
          ></textarea>

          <button
            // onClick={handleComentarios}
            className="btn btn-primary"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className=" d-flex gap-2 mt-4 ">
        <div className=" col-6">
          {comentries.map((comentario, index)=> {
            return (
          <p key={index} className=" p-3 borderBotton">
         { comentario.description}
          </p>

            )
          })}
          <span className="borderBotton text-center">fechas de creacion</span>
        </div>

        <aside className="publicidadPageProduct col-6"></aside>
      </div>
    </div>
  );
};

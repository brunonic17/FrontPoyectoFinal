import { useForm } from "react-hook-form";
import { CreateProductAdmin } from "../api/shopping";
import { useState } from "react";

const FormAdminProduct = () => {
  const { register, handleSubmit } = useForm();
  const [files, setFiles] = useState(null);

  const formAdminProduct = async (data) => {
    const formData = new FormData();
    formData.append("IdProduct", data.IdProduct)
    formData.append("NombreProducto", data.NombreProducto)
    formData.append("Precio", data.Precio)
    formData.append("Detalle", data.Detalle)
    formData.append("Ultimoprecio", data.Ultimoprecio)
    formData.append("Categoria", data.Categoria)
    formData.append("UrlImagen", files)
  
    await CreateProductAdmin(formData);
 
  };
  return (
    <form
      className=" border border-success border-1 p-3 rounded mb-5"
      onSubmit={handleSubmit(formAdminProduct)}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
          ID Producto
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register("IdProduct")}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label fw-semibold"
        >
          Nombre del Producto
        </label>
        <input
          type="tetxt"
          className="form-control"
          id="exampleInputPassword1"
          {...register("NombreProducto")}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label fw-semibold"
        >
          Detalle
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          {...register("Detalle")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="htmlForm-label">
          Precio
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          {...register("Precio")}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label fw-semibold"
        >
          Ultimo Precio
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          {...register("UltimoPrecio")}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label fw-semibold"
        >
          Categoria
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          {...register("Categoria")}
        >
          <option selected>Selecciona una Categoria</option>
          <option value="Hombres">Hombres</option>
          <option value="Mujeres">Mujeres</option>
          <option value="Niños">Niños</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label fw-semibold">
          Cargar Imagen
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={(e) => {
            setFiles(e.target.files[0]);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormAdminProduct;

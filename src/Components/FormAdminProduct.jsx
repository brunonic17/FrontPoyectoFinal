import { useForm } from "react-hook-form";
import { CreateProductAdmin } from "../api/shopping";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import GetListaProductos from "../ComponentAdmin/ListaProductos";
import { useProducts } from "../Context/ProductsContext";

const FormAdminProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [files, setFiles] = useState();
  const { productsPage, getProducts } = useProducts();
  const [spinner, setSpinner] = useState(true);
  const alertas = () => {
    return toast.success("Producto en venta sastifactotiamente");
  };
  useEffect(() => {
    getProducts();
    console.log("renderizando productos")
  }, [spinner]);
  const formAdminProduct = async (data) => {
    const formData = new FormData();

    formData.append("IdProduct", data.IdProduct);
    formData.append("NombreProducto", data.NombreProducto);
    formData.append("Precio", data.Precio);
    formData.append("Detalle", data.Detalle);
    formData.append("Ultimoprecio", data.Ultimoprecio);
    formData.append("Categoria", data.Categoria);
    formData.append("UrlImagen", files);

    const res = await CreateProductAdmin(formData);
    console.log(res);
    reset();
    setFiles("");
    alertas();
    setSpinner(false)

    return {};
  };

  return (
    <>
      <form
        className=" border border-success border-1 p-3 rounded mb-5"
        onSubmit={handleSubmit(formAdminProduct)}
      >
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fw-semibold"
          >
            ID Producto
          </label>
          <input
            type="text"
            className="form-control"
            name="IdProduct"
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
            name="NombreDelProducto"
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
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-semibold"
          >
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
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <div
              className="w-100
      "
            >
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={(e) => {
                  setFiles(e.target.files[0]);
                }}
              />
            </div>

            {files && (
              <img
                className="card w-25"
                src={URL.createObjectURL(files)}
                alt={files.name}
              />
            )}
          </div>
        </div>
        {/* {URL.createObjectURL(files)} */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className=" container">
        <h2 className=" text-center fw-bold my-5">Agregar Espeficaciones</h2>

        <GetListaProductos />
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

export default FormAdminProduct;

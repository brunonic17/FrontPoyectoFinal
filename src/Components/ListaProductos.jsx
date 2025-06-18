import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import { GetProducts, DeleteEspecificaciones } from "../FetchAdmin/Products.js";
// import { useState, useEffect } from "react";
// import Modal from 'react-bootstrap/Modal';
// import EditProd from './EditProduct.jsx';
// import EditEsp from './EditEspecific.jsx';
// import { UseEdit } from "../ContextAdmin/EditContext.jsx";
// import ModalEdit from "../ComponentAdmin/ModalEditProduct.jsx";
// import ModalEditEspecific from "../ComponentAdmin/ModalEditEspecific.jsx";
// import { useAuth } from "../Context/AuthContext.jsx";
// import ModalEditProduct from "../ComponentAdmin/ModalEditProducto.jsx";
import { useProducts } from "../Context/ProductsContext.jsx";
import ModalCreateEspecific from "../ComponentAdmin/ModalCreateEspecific.jsx";
import { formatCurrency } from "../utils/index.js";
// import ModalEditProductos from "./ModalEditProductos.jsx";
import ModalEditProductss from "./ModalEditProductos.jsx";
import { DeleteProducts } from "../FetchAdmin/Products.js";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

// const ProductDb= await GetProducts();
// console.log(ProductDb.data);

function GetListaProductos() {
  const { productsPage, getProducts } = useProducts();

  const alertasDelete = () => {
     return toast.error("Eliminaste el producto de Administración");
   };
  useEffect(() => {
    getProducts();
  }, [alertasDelete]);
  return (
    <>
      {productsPage.map((product, index) => {
        return (
          <Table striped bordered hover key={index}>
            <thead className=" text-center">
              <tr>
                <th className=" w-25">Imagen</th>
                <th>Id Producto</th>
                <th>Nombre del Producto</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className=" text-center h-100 ">
              <tr className=" h-100">
                <td>
                  <img
                    className="card w-50"
                    src={product.UrlImagen[0].secure_url}
                    alt={`imagen ${index}`}
                  />
                </td>
                <td>{product.IdProduct}</td>
                <td>{product.NombreProducto}</td>
                <td>{formatCurrency(product.Precio)}</td>
                <td>{product.Detalle}</td>
                <td className=" d-flex  h-100 justify-content-center ">
                  <div className=" d-flex flex-column justify-content-center gap-2 ">
                    <div className=" btn-secondary">
                      <ModalEditProductss product={product} />
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={async () => {
                        await DeleteProducts(product._id);
                        alertasDelete();
                      }}
                    >
                      {" "}
                      Eliminar
                    </button>
                    <button className="btn btn-success"> Ver más</button>
                  </div>
                </td>
                {/* <td className="">
                </td> */}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="">
                  <ModalCreateEspecific Id={product._id}></ModalCreateEspecific>
                </td>
                <td colSpan={3} className="">
                  <Button variant="primary">Agregar Imagenes</Button>
                  {/* <Button variant="primary">Agregar Imagen</Button> */}
                </td>
              </tr>
            </tfoot>
          </Table>
        );
      })}
        <Toaster
        theme="dark"
        position="top-center"
        dir="ltr"
        duration={5000}
        closeButton={true}
        toastOptions={{
          style: { background: "red" },
          className: "my-toast",
        }}
      />
    </>
 
  );
}

export default GetListaProductos;



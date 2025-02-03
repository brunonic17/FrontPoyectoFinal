import AltaProducts from "../ComponentAdmin/AltaProductos.jsx";
import FormAdminProduct from "../Components/FormAdminProduct.jsx";
import ListaProducts from "../ComponentAdmin/ListaProductos.jsx";
import Especific from "../ComponentAdmin/AltaEspecificaciones.jsx";
import { Image } from "../ComponentAdmin/Altaimagen.jsx";
import { useProducts } from "../Context/ProductsContext.jsx";
import { useEffect } from "react";

const PageAdmin = () => {
  const { productsPage, getProducts } = useProducts();

useEffect(() => {
 
}, [productsPage.length, getProducts])

  return (
    <>
      <div className=" container">
        <h2 className=" text-center fw-bold my-5">Carga de Productos</h2>
        {/* <AltaProducts /> */}
        <FormAdminProduct />
      </div>

      <div>
        <Image />
      </div>

      <div>
        <ListaProducts />
      </div>
    </>
  );
};

export default PageAdmin;

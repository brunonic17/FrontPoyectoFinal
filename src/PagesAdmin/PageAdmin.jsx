import AltaProducts from "../ComponentAdmin/AltaProductos.jsx";
import ListaProducts from "../ComponentAdmin/ListaProductos.jsx";
import Especific from "../ComponentAdmin/AltaEspecificaciones.jsx";
import { Image } from "../ComponentAdmin/Altaimagen.jsx";
import { useProducts } from "../Context/ProductsContext.jsx";
import { useEffect } from "react";

const PageAdmin = () => {
  const { productsPage, getProducts } = useProducts();

  useEffect(() => {
    // getProducts();
    localStorage.setItem("Products", JSON.stringify(productsPage));

  }, [productsPage]);
  
  console.log(productsPage)
  return (
    <>
      <div className=" d-flex ">
        <div className="col">
          <AltaProducts />
        </div>
        <div className="col">
          <Especific />
        </div>
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

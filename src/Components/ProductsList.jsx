import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useFav } from "../Context/FavContext";

import { Toaster } from "sonner";
// import { iconoCarritoCart, iconofavorito } from "../helpers/iconos";
// import { createFavRequest } from "../api/favorite";
import PaginaArticulo from "../Pages/ProductCard";
import { useProducts } from "../Context/ProductsContext";

const ProductsList = () => {
  const [pageNumber, setPageNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [iconActive, setIconActive] = useState(false);

  const { favsPage } = useFav();
  const { getProducts, productsPage } = useProducts();

  const totalProducts = productsPage.length;

  useEffect(() => {
    getProducts();
  }, []);

  const lastIndex = currentPage * pageNumber;
  const firstIndex = lastIndex - pageNumber;

  return (
    <>
      <div className="container-products ">
        {productsPage
          .map((product) => {
            return <PaginaArticulo product={product} key={product._id} />;

            // <>
          })
          .slice(firstIndex, lastIndex)}
      </div>
      <Toaster
        theme="light"
        position="top-center"
        duration={2000}
        toastOptions={{
          style: { background: "black" },
          className: "myToast",
        }}
      />

      <div className="p-3">
        <Pagination
          pageNumber={pageNumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </>
  );
};

export default ProductsList;
// favsPage.includes("agregado")=== false? "hola" : <button><button/>
{
  /* {favsPage
                      .map((f) => f.product._id)
                      .includes(product._id) ? (
                      <button
                        className="text-danger"
                        type="submit"
                        onClick={() => {
                      
                        
                          
                        }}>
                        {iconofavorito}
                      </button>
                    ) : (
                      <button
                        className="text-white "
                        type="submit"
                        onClick={async () => {
                          if (user === null) {
                            alertas();
                          } else {
                            const product1 = {
                              product: product._id,
                              user: user.id,
                            };

                            const res = await createFavorite(product1);
                          
                            alertas1()
                           
                          }
                        }}>
                        {iconofavorito}
                      </button>
                    )} */
}
{
  /* <div className=" card-product " key={product._id}>
    <figure className="container-img">
      <img
        className=""
        src={product.UrlImagen}
        alt={product.NombreProducto}
      />
    </figure>

    <div className="info-product">
      <h3>{product.NombreProducto} </h3>
    </div>
    <div className="btnIcon">
      <div className=" col-4 ">
        <p className="price">$ {product.Precio} </p>
      </div>
      <div className=" d-flex col-8 justify-content-end g-3 ">
        <button type="submit" onClick={() => {}}>
          {iconoCarritoCart}
        </button>
        <button
          className="text-white "
          type="submit"
          onClick={async () => {
            if (user === null) {
              alertas();
            } else {
              const product1 = {
                product: product._id,
                user: user.id,
              };

              const res = await createFavRequest(product1);
              console.log(res)
              alertas1();
              

            }
          }}>
          {iconofavorito}
        </button>

      
      </div>
    </div>
  </div> */
}
{
  /* </> */
}
//  return ( );

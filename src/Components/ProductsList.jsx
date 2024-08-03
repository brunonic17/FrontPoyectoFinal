import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useFav } from "../Context/FavContext";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { iconofavorito, iconoFavoritoAgregado } from "../helpers/iconos";
// import { createFavRequest } from "../api/favorite";
// import PaginaArticulo from "../Pages/ProductCard";
import { useProducts } from "../Context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { createFavRequest } from "../api/favorite";

const ProductsList = () => {
  const [pageNumber, setPageNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { user, isAuthenticated } = useAuth();
  const {
    favsPage,
    getProductsFavorite,
    deleteProductFavorites,
    DecrementQty,
    IncrementQty,
  } = useFav();
  const { getProducts, productsPage, getProduct } = useProducts();
  const [cambiar, setCambiar] = useState(false);
  const navigate = useNavigate();
  const totalProducts = productsPage.length;

  const lastIndex = currentPage * pageNumber;
  const firstIndex = lastIndex - pageNumber;

  const alertas = () => {
    return toast.success("Debes iniciar sesion");
  };
  const alertas1 = () => {
    return toast.success("Agregaste a favoritos");
  };

  const handclick = (product) => {
    setCambiar((cambiar) => !cambiar);
    deleteProductFavorites(product._id);
  };

  useEffect(() => {
    getProductsFavorite();
    getProducts();
   
  }, [cambiar]);

console.log(favsPage);
  return (
    <>
      <div className="container-products ">
        {productsPage
          .map((product, index) => {
            return (
              <>
                <div className=" card-product" key={index}>
                  <figure className="container-img">
                    <img key={index}
                      className=""
                      src={product.UrlImagen[0]}
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
                      <button
                        onClick={async () => {
                          await getProduct(product._id);
                          navigate(`/productCard/${product._id}`);
                        }}
                      >
                        Ver Mas
                      </button>

                      {favsPage
                        .map((f) => f.product._id)
                        .includes(product._id) ? (
                        <button
                          className="CorazonRed"
                          type="submit"
                          onClick={() => {
                            handclick(product);
                            DecrementQty();
                          }}
                        >
                          {iconoFavoritoAgregado}
                        </button>
                      ) : (
                        <button
                          className=""
                          type="submit"
                          onClick={async () => {
                            if (!isAuthenticated) {
                              alertas();
                            } else {
                              const product1 = {
                                product: product._id,
                                user: user.id,
                              };

                              const res = await createFavRequest(product1);

                              alertas1();
                            }
                            // handclick();
                            setCambiar(!cambiar);
                            IncrementQty();
                          }}
                        >
                          {iconofavorito}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })
          .slice(firstIndex, lastIndex)}
      </div>
      <Toaster
        theme="light"
        position="top-center"
        duration={2000}
        toastOptions={{
          style: { background: "blue" },
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

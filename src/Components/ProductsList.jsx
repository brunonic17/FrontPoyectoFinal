import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useFav } from "../Context/FavContext";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { iconoFavorito, iconoFavoritoAgregado } from "../helpers/iconos";
// import { createFavRequest } from "../api/favorite";
// import PaginaArticulo from "../Pages/ProductCard";
import { useProducts } from "../Context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { formatCurrency } from "../utils";

// import  Buscador  from "./Buscador";
// import { createFavRequest } from "../api/favorite";

const ProductsList = () => {
  const [pageNumber, setPageNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { user, isAuthenticated } = useAuth();
  const {
    favsPage,
    getProductsFavorite,
    deleteProductFavorites,
    createFavorite,
  } = useFav();
  const { getProducts, productsPage, getProduct, search } = useProducts();
  const [cambiar, setCambiar] = useState(false);
  const navigate = useNavigate();
  const totalProducts = productsPage.length;

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

let filteredProducts = productsPage.flat();
  if (search) {
    filteredProducts = productsPage.filter((product) =>
      product.NombreProducto.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <div className=" container-products mt-4 h-100 overflow-y-scroll">
        <div className=" d-flex flex-wrap gap-3 justify-content-center">
          {filteredProducts.map((product) => {
            return (
              <>
                <div className=" card mb-4 boxShadow containerCard overflow-hidden">
                  <div
                    key={product.id}
                    className="card h-100 text-center wCard"
                  >
                    <div className=" overflow-hidden">
                      <img
                        src={product.UrlImagen[0].secure_url}
                        className="  imgCard"
                        alt={product.NombreProducto}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.NombreProducto.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">
                       {formatCurrency(product.Precio)}
                      </p>
                      <a
                        className="btn btn-outline-dark"
                        onClick={async () => {
                          await getProduct(product._id);
                          navigate(`/productCard/${product._id}`);
                        }}
                      >
                        Ver más
                      </a>

                      {favsPage
                        .map((f) => f.product._id)
                        .includes(product._id) ? (
                        <button
                          key={product._id}
                          className=" btn CorazonRed"
                          type="submit"
                          onClick={() => {
                            handclick(product);
                          }}
                        >
                          {iconoFavoritoAgregado}
                        </button>
                      ) : (
                        <button
                          className="btn "
                          type="submit"
                          key={product._id}
                          onClick={async () => {
                            if (!isAuthenticated) {
                              alertas();
                            } else {
                              const product1 = {
                                product: product._id,
                                user: user.id,
                              };

                              //  await createFavRequest(product1);
                              await createFavorite(product1);
                              
                              alertas1();
                            }
                            // handclick();
                            setCambiar(!cambiar);
                          }}
                        >
                          {iconoFavorito}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {!search ? (
        <div className="p-3">
          <Pagination
            pageNumber={pageNumber}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProducts={totalProducts}
          />
        </div>
      ) : null}

      <Toaster
        theme="light"
        position="top-center"
        duration={2000}
        toastOptions={{
          style: { background: "green" },
          className: "myToast",
        }}
      />
    </>
  );
};

export default ProductsList;

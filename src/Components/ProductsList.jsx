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

  let results = [];
  {
    !search
      ? productsPage
      : (results = productsPage.filter((item) =>
          item.NombreProducto.toLowerCase().includes(search.toLowerCase())
        ));
  }

  // if (!search) {
  // results= productsPage;
  // } else {
  //   results = productsPage.filter((item) =>
  //     item.NombreProducto.toLowerCase().includes(search.toLowerCase())
  //   );
  // }
  return (
    <>
      <div className="container-products">
        <div className=" d-flex flex-wrap justify-content-between p-2">
          {
            !search
              ? productsPage
                  .map((product, index) => {
                    return (
                      <>
                        <div className=" card-product" key={index}>
                          <figure className="container-img">
                            <img
                              key={index}
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
                                  key={product._id}
                                  className="CorazonRed"
                                  type="submit"
                                  onClick={() => {
                                    handclick(product);
                                  }}
                                >
                                  {iconoFavoritoAgregado}
                                </button>
                              ) : (
                                <button
                                  className=""
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
                                  {iconofavorito}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                  .slice(firstIndex, lastIndex)
              : results.map((product, index) => {
                  return (
                    <>
                      <div className=" card-product" key={index}>
                        <figure className="container-img">
                          <img
                            key={index}
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
                                key={product._id}
                                className="CorazonRed"
                                type="submit"
                                onClick={() => {
                                  handclick(product);
                                }}
                              >
                                {iconoFavoritoAgregado}
                              </button>
                            ) : (
                              <button
                                className=""
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
                                {iconofavorito}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
            // .slice(firstIndex, lastIndex)
          }
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
          style: { background: "blue" },
          className: "myToast",
        }}
      />
    </>
  );
};

export default ProductsList;

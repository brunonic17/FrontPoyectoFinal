// import { Toaster, toast } from "sonner";
// import { iconoCarritoCart } from "../helpers/iconos";
import { useAuth } from "../../Context/AuthContext"
import "./favorite.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFav } from "../../Context/FavContext";
import {
  iconoCarritoCart, 
} from "../../helpers/iconos";
import { useProducts } from "../../Context/ProductsContext";
import { toast, Toaster } from "sonner";

const Favorit = () => {
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const { favsPage, getProductsFavorite, deleteProductFavorites } = useFav();
    const { isAuthenticated } = useAuth();

  useEffect(() => {
    getProductsFavorite();
    if (!isAuthenticated) navigate("/");
  }, []);
  const alertas = () => {
    return toast.success("Eliminaste el producto de Mis Favoritos");
  };
  return (
    <>
      <h1 className=" text-uppercase text-center my-3">Favoritos</h1>
      <div
        className=" d-flex justify-content-around p-4
      "
      >
        {favsPage.map((product) => {
          return (
            <>
              <div
                key={product.product.UrlImagen[0].secure_url}
                className=" card mb-4 boxShadow containerCard "
              >
                <div className="card h-100 text-center wCard">
                  <div className=" overflow-hidden">
                    <img
                      src={product.product.UrlImagen[0].secure_url}
                      className="  imgCard"
                      alt={product.NombreProducto}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.product.NombreProducto.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">
                      $ {product.product.Precio}
                    </p>
                  </div>
                  <div className=" w-100 d-flex justify-content-around p-3">
                    <button
                      className="bg-white buttonHoverCart border border-black w-25 rounded-1 p-1
                      "
                      onClick={async () => {
                        await getProduct(product.product._id);
                        navigate(`/productCard/${product.product._id}`);
                      }}
                    >
                      {iconoCarritoCart}
                    </button>
                    <button
                      className="bg-white border border-black w-25 rounded-1 p-1 buttonHoverDelete"
                      onClick={() => {
                        deleteProductFavorites(product.product._id);
                        alertas();
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Toaster
        theme="light"
        position="top-center"
        duration={5000}
        toastOptions={{
          style: { background: "red" },
          className: "my-toast",
        }}
      />
    </>
  );
};

export default Favorit;

import { useEffect } from "react";

import { useFav } from "../Context/FavContext";
// import { getFavsRequest } from "../api/favorite";
import { Toaster, toast } from "sonner";
import { iconoCarritoCart } from "../helpers/iconos";

 const Favorites = () => {
  const { favsPage, getProductsFavorite, deleteProductFavorites } = useFav();
  const { user} = useAuth()
  // console.log(user);
  const alertas = () => {
    return toast.success("Eliminaste el producto de Mis Favoritos");
  };

  useEffect(() => {
    getProductsFavorite();
  }, []);
  console.log(favsPage);

  return (
    <>
      {favsPage.length === 0 ? (
        <h1 className=" text-center bg-secondary ">No tienes Favoritos</h1>
      ) : (
        <>
          <h1 className=" text-center ">favoritos</h1>
          <div className="container-products">
            {favsPage.map((favorite) => {
              return (
                <div className=" card-product " key={favorite.product._id}>
                  <figure className="container-img">
                    <img
                      className=""
                      src={favorite.product.UrlImagen}
                      alt={favorite.product.NombreProducto}
                    />
                  </figure>

                  <div className="info-product">
                    <h3>{favorite.product.NombreProducto} </h3>
                  </div>

                  <div className="btnIcon bg-white ">
                    <div className=" col-4 ">
                      <p className="price text-danger ">
                        $ {favorite.product.Precio}{" "}
                      </p>
                    </div>
                    <div className=" d-flex col-8 justify-content-end g-3 ">
                      <button
                        className="bg-white"
                        type="submit"
                        onClick={() => {}}
                      >
                        {iconoCarritoCart}
                      </button>
                      <button
                        className="text-primary bg-white "
                        type="submit"
                        onClick={() => {
                          // console.log(favorite.product._id)
                          deleteProductFavorites(favorite.product._id);
                          alertas();
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Toaster
            theme="light"
            position="top-center"
            duration={5000}
            toastOptions={{
              style: { background: "green" },
              className: "my-toast",
            }}
          />
        </>
      )}
    </>
  );
};

// // Fetch products data from API and store it in the `products` state variable.
// // You can use the `fetch()` function to make HTTP requests. Here's an example of how you might fetch data from a JSON
{
  /* <div>
        <figure>
          <img src={product.image} alt={product.title} />
          <figcaption>{product.description}</figcaption>
        </figure>
        <div>
          <h3>{product.title}</h3>
          <p>$ {product.price}</p>
          <button>Añadir  al carrito</button>
        </div>
      </div> */
}

export default Favorites;

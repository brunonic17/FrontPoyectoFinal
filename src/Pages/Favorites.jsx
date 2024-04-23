import { useEffect, useState } from "react";

import { getFavoritesApi } from "../api/favorites";
// import { useFav } from "../Context/FavContext";
// import { getFavsRequest } from "../api/favorite";

import { iconoCarritoCart } from "../helpers/iconos";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // const { createFavorite, fav } = useFav();
 

  const productsFAv = async () => {
    try {
      const res = await getFavoritesApi();
      const favorites = res.data;
      setFavorites(favorites);
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    productsFAv();
  }, []);

  return (
    <>
      <h1 className=" text-center ">Soy la pagina favoritos</h1>
      <div className="container-products ">
        {favorites.map((favorite) => {
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
                <p className="price">$ {favorite.product.Precio} </p>
              </div>

              <div className="btnIcon">
                <button type="submit" onClick={() => {"agregado a carrito"}}>
                  {iconoCarritoCart}
                </button>
              </div>
            </div>
          );
        })}
      </div>
     
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

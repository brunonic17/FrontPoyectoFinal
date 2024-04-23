import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { getProductsApi } from "../api/products";
// import { useFav } from "../Context/FavContext";
import { createFavRequest } from "../api/favorite";
import { useAuth } from "../Context/AuthContext";
import { Toaster, toast } from "sonner";
import { iconoCarritoCart, iconofavorito } from "../helpers/iconos";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length;

  // const { createFavorite } = useFav();
  const { user } = useAuth();

  const productsList = async () => {
    try {
      const res = await getProductsApi();
      const products = res.data;
      console.log(products)
      setProducts(products);
    } catch (e) {
      console.log(e);
    }
  };
  const alertas = () => {
    return toast.success("Debes iniciar sesion");
  };

  useEffect(() => {
    productsList();
  }, []);

  const lastIndex = currentPage * pageNumber;
  const firstIndex = lastIndex - pageNumber;

  return (
    <>
      <div className="container-products ">
        {products
          .map((product) => {
            return (
              <div className=" card-product " key={product._id}>
                <figure className="container-img">
                  <img
                    className=""
                    src={product.UrlImagen}
                    alt={product.NombreProducto}
                  />
                </figure>

                <div className="info-product">
                  <h3>{product.NombreProducto} </h3>
                  <p className="price">$ {product.Precio} </p>
                </div>

                <div className="btnIcon">
                  <button
                    type="submit"
                    onClick={async () => {
                      // console.log(product)

                      if (user === null) {
                        alertas();
                      } else {
                        const product1 = {
                          product: product._id,
                          user: user.id,
                        };
                        console.log(user);
                        console.log(product1);

                        //    const res= await createFavorite(product1);
                        //  console.log(res)

                        // const res =  await createFavRequest(product1)
                        // console.log(res)
                      }
                    }}>
                    {iconoCarritoCart}
                  </button>
                  <button
                    type="submit"
                    onClick={async () => {
                      // console.log(product)

                      if (user === null) {
                        alertas();
                      } else {
                        const product1 = {
                          product: product._id,
                          user: user.id,
                        };
                        console.log(user);
                        console.log(product1);

                        //    const res= await createFavorite(product1);
                        //  console.log(res)

                        const res =  await createFavRequest(product1)
                        console.log(res)
                      }
                    }}>
                    {iconofavorito}
                  </button>
                </div>
              </div>
            );
          })
          .slice(firstIndex, lastIndex)}
      </div>
      <Toaster
        theme="light"
        position="top-center"
        duration={2000}
        toastOptions={{
          style: { background: "red" },
          className: "my-toast",
        }}
      />
      <div>
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

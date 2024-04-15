import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { getProductsApi } from "../api/auth";
// import axios from "axios";
import { useForm } from "react-hook-form";
  import { useFav } from "../Context/FavContext";


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length;

  const { handleSubmit} = useForm();

  // const {fav} = useFav()
  // console.log(fav)

  const productsList = async () => {
    try {
      const res = await getProductsApi();
      const products = res.data;
      console.log(products);
      setProducts(products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    productsList();
  }, []);

  const lastIndex = currentPage * pageNumber;
  const firstIndex = lastIndex - pageNumber;
  // const onSubmit =  (product) => {
    
  //   console.log(products[product.id])
  // };

  return (
    <>
      <div className="container-products ">
        {products
          .map((product) => {
            return (
              <div className=" card-product " key={product.id}>
                <figure className="container-img">
                  <img className="" src={product.image} alt={product.title}/>
                </figure>

                <div className="info-product">
                  <h3>{product.title} </h3>
                  <p className="price">$ {product.price} </p>

                  <button onClick={ ()=> {
                     console.log(product.id)
                  }}>Añadir a favoritos</button>
                </div>
              </div>
            );
          })
          .slice(firstIndex, lastIndex)}
      </div>

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

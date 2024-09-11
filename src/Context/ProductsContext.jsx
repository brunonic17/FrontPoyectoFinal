import { createContext, useContext, useState } from "react";
import {
  getProductsRequest,
  getProductCardRequest,
  getProductsShoppingRequest,
} from "../api/products";



const ProductsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) throw new Error("useFav must be used within the FavProvider");
  return context;
};
// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [productsPage, setProductsPage] = useState([]);
  const [productCard, setProductCard] = useState();
  const [productShopping, setProductShopping] = useState([]);
 

  

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProductsPage(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductCardRequest(id);
      setProductCard(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // TRAER TODOS LOS PRODUCTOS DEL CARRRITO
  const getProductShopping = async () => {
    try {
      const res = await getProductsShoppingRequest();
      setProductShopping(res.data.DetalleCarro);
      console.log(res.data.DetalleCarro);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  // const DeleteCarProduct = async (id) => {
  //   try {
  //     const res = await deleteFavRequest(id);

  //     if (res.status === 204)
  //       setFavsPage(favsPage.filter((product) => product.product._id !== id));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        getProduct,
        getProductShopping,
        productsPage,
        productShopping,
        productCard,
 
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

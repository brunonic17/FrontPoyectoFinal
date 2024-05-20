import { createContext, useContext, useState } from "react";
import { getProductsRequest, getProductCardRequest } from "../api/products";

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

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        productsPage,
        getProduct,
        productCard
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

import { createContext, useContext, useState } from "react";
import {
  getProductsRequest,
  getProductCardRequest,
  getProductsShoppingRequest,
  deleteShoppingRequest,
} from "../api/products";
import { DeleteProduct, PostShoppings } from "../fetch/shopping";

const ProductsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context)
    throw new Error("useProducts debe utilizarse dentro del ProductsProvider");
  return context;
};
// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [productsPage, setProductsPage] = useState([]);
  const [getCarroId, setGetCarroId] = useState("");
  const [productCard, setProductCard] = useState();
  const [productShopping, setProductShopping] = useState([]);
  const [quantity, setQuantity] = useState(productShopping.length);
  const [cantidad, setCantProduct] = useState();
  const DecrementQty = () => {
    if (productShopping.length > 0) {
      setQuantity((prevCont) => prevCont - 1);
    }
  };

  const IncrementQty = () => {
    setQuantity((prevCont) => prevCont + 1);
  };

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProductsPage(res.data);
    } catch (error) {
      console.log(error, "estoy aca");
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
      setGetCarroId(res.data._id);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const DeleteShoppingProduct = async (Product) => {
    try {
      const res = await DeleteProduct(Product);

      if (res.status === "ok")
        setProductShopping(
          productShopping.filter((shopping) => shopping.eid._id !== Product.eid)
        );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteShopping = async (id) => {
    try {
      const res = await deleteShoppingRequest(id);
      if (res.status === 204) setProductShopping([]);
    } catch (error) {
      console.log(error);
    }
  };
  const ModificarCantidadShopinng = async (Product) => {
    try {
      const res = await PostShoppings(Product);
      console.log(res);

      if (res.status === "ok") setProductShopping(res.data.DetalleCarro);
    } catch (error) {
      console.log(error, "no me estoy aplicando");
    }
  };
  // porducto = porductoss
  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        getProduct,
        getProductShopping,
        productsPage,
        productShopping,
        getCarroId,
        productCard,
        DeleteShoppingProduct,
        deleteShopping,
        quantity,
        DecrementQty,
        IncrementQty,
        cantidad,
        setCantProduct,
        ModificarCantidadShopinng,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

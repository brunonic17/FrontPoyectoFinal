import { createContext, useContext, useState } from "react";
import {
  createFavRequest,
  getFavsRequest,
  deleteFavRequest,
} from "../api/favorite";

const FavContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useFav = () => {
  const context = useContext(FavContext);

  if (!context) throw new Error("useFav must be used within the FavProvider");
  return context;
};
// eslint-disable-next-line react/prop-types
export const FavoritesProvider = ({ children }) => {
  const [favsPage, setFavsPage] = useState([]);
  const [favsCreate, setFavsCreate] = useState([]);
  const [removeId, setRemoveId] = useState([]);
  const [errors, setErrors] = useState("");
  const [quantity, setQuantity] = useState(favsPage.length);

  const DecrementQty = () => {
    if (favsPage.length > 0) {
      setQuantity((prevCont) => prevCont - 1);
    }
  };

  const IncrementQty = () => {
    setQuantity((prevCont) => prevCont + 1);
  };
  
  const createFavorite = async (product1) => {
    try {
      const res = await createFavRequest(product1);
    } catch (error) {
      setErrors(error.message);
      console.log(error);
    }
  };

  const getProductsFavorite = async () => {
    try {
      const res = await getFavsRequest();
      setFavsPage(res.data);
      console.log(favsPage);
    } catch (error) {
      console.log(error.response);
    }
  };

  
  const deleteProductFavorites = async (id) => {
    try {
      const res = await deleteFavRequest(id);

      if (res.status === 204)
        setFavsPage(favsPage.filter((product) => product.product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <FavContext.Provider
      value={{
        favsPage,
        createFavorite,
        getProductsFavorite,
        deleteProductFavorites,
        // remove,
        favsCreate,
        removeId,
        errors,
        quantity,
        DecrementQty,
        IncrementQty,

      }}
    >
      {children}
    </FavContext.Provider>
  );
};

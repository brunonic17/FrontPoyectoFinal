import { createContext, useContext, useState } from "react";
import { createFavRequest, getFavsRequest } from "../api/favorite";
import { getProductsApi } from "../api/products";

const FavContex = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useFav = () => {
  const context = useContext(FavContex);

  if (!context) throw new Error("useFav must be used within the FavProvider");
  return context;
};
// eslint-disable-next-line react/prop-types
export function FavoritesProvider({ children }) {
  const [fav, useFav] = useState([]);

  const createFavorite = async (id) => {
    const res = await createFavRequest(id);
    console.log(res);
  };

  const getProductsFavorite = async () => {
    try {
      const res = await getFavsRequest();
      useFav(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavContex.Provider
      value={{
        fav,
        createFavorite,
        getProductsFavorite,
      }}>
      {children}
    </FavContex.Provider>
  );
}

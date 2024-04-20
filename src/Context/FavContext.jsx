import { createContext, useContext, useState } from "react";
import { createFavRequest } from "../api/favorite";

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
   
    const res =  await createFavRequest(id)
    console.log(res)
   
   
  };

  return (
    <FavContex.Provider
      value={{
        fav,
        createFavorite,
      }}>
      {children}
    </FavContex.Provider>
  );
}

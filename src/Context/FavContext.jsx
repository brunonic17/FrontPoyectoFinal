import { createContext, useContext, useState } from "react";

const FavContex = createContext();

export const useFav = () => {
  const context = useContext(FavContex);

  if (!context) throw new Error("useFav must be used within the FavProvider");
  return context;
};
export function FavoritesProvider({ children }) {
  const [fav, useFav] = useState();

  return (
    <FavContex.Provider
      value={{
        fav,
      }}>
        {children}
      </FavContex.Provider>
  );
}

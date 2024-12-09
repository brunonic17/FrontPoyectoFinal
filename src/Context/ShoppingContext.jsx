
import { createContext, useContext, useState } from "react";
import { ShoppingPaymentRequest } from "../api/shopping";

const ShoppingContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);

  if (!context) throw new Error("useFav must be used within the FavProvider");
  return context;
};
// eslint-disable-next-line react/prop-types
export const ShoppingProvider = ({ children }) => {
  const [payment, setPayment ]  = useState([]);
  const [paymentId, setPaymentID ]  = useState(null);

  const createOrderPayment = async (carrito) => {
    try {
      const res = await ShoppingPaymentRequest(carrito);
      setPayment(res);
      setPaymentID(res.data.id)
    console.log(payment)
    console.log(paymentId)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShoppingContext.Provider
      value={{
        createOrderPayment,
        payment,
        paymentId
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

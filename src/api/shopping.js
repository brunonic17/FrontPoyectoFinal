import instance from "./axios";



// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingPaymentRequest= (carrito) => instance.post(`/create-order`, carrito)
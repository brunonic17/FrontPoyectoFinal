import axios from "./axios";
export const getProductsApi = () => axios.get( `/products` )
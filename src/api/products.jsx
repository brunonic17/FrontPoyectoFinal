import axios from "./axios";


export const getProductsApi = () => axios.get( `/products` )

export const getFavoritesApi = () => axios.get( `/pageFavorites` )
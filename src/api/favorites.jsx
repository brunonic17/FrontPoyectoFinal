import axios from "./axios";
export const getFavoritesApi = () => axios.get( `/pageFavorites` )
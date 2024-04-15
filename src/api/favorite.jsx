import axios from "axios";
export const getFavsRequest = ()=> axios.get("/favorites");
export const getFavRequest = (id)=> axios.get(`/favorites/${id}`);
export const createFavRequest = (fav)=> axios.post("/favorites", fav);
export const deleteFavRequest = (id)=> axios.delete(`/favorites/${id}`);

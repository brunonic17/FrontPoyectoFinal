import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});
export default instance;

export const instanceApiFake = axios.create({
  baseURL: "https://fakestoreapi.com"
})



//for local server use http://localhost:3001/ and for heroku app use https://build-week-anywhere-

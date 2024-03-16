import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4040/api",
  withCredentials: true,
});
export default instance;

export const instanceApiFake = axios.create({
  baseURL: "https://fakestoreapi.com"
})
// export const getProductsApi = async () => {
//   axios
//     .get("https://fakestoreapi.com/products")

//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => console.log(error));
// };

//for local server use http://localhost:3001/ and for heroku app use https://build-week-anywhere-

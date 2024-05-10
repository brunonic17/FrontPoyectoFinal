import instance from "./axios";
//productos
export const getProductsRequest = () => instance.get(`/products`);

export const getProductCardRequest = (id)=> instance.get(`/productCard/${id}`);


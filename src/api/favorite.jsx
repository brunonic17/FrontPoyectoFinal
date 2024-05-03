import instance from "./axios";

export const getProductsRequest = () => instance.get(`/products`);

// export const createFavRequest = (product1) => {
//   instance.post(`/favorites`, product1);
// };

export const getFavsRequest = () => instance.get("/pageFavorites");

// export const getFavRequest = (id)=> axios.get(`/pageFavorites/${id}`);

export const deleteFavRequest = (id)=> instance.delete(`/pageFavorites/${id}`);

export const createFavRequest = async(id)=> {
                                    console.log(id)
                                    let idjson=JSON.stringify(id);
                                    console.log(idjson)
                                    const response=await fetch(`http://localhost:5050/api/favorites`,
                                {body:idjson,
                                    method:"POST",
                            headers:{"content-type":"application/json"},

                        });
                        const data=response.json();
                        return data

}

import axios from "axios";

// export const createFavRequest = (id)=> axios.post("/favorites", id);

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

export const getFavsRequest = ()=> axios.get("/pageFavorites");

export const getFavRequest = (id)=> axios.get(`/pageFavorites/${id}`);

export const deleteFavRequest = (id)=> axios.delete(`/favorites/${id}`);

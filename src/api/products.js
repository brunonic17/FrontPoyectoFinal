import instance from "./axios";
//productos
export const getProductsRequest = () => instance.get(`/products`);

export const getProductCardRequest = (id)=> instance.get(`/productCard/${id}`);

export const getEspecificaciones =  async (Cart)=> {
    let CartJson=JSON.stringify(Cart)

const response=await fetch(`http://localhost:5050/api/productCardE`,{
    method:"POST",
    body:CartJson ,
    headers:{
        "content-type":"application/json"
       
    },

  
    
});

    const data=response.json();

    return data
}





// () => instance.post(`/productsCardE`, data);



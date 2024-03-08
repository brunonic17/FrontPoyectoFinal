

const GetShoppings = async (id)=> {

    const response=await fetch(`http://localhost:5050/api/carrito/${id}`,{
        method:"GET",
        headers:{
            "content-type":"aplication/json"
           
        },
        
    });

        const data=response.json();

        return data
}

export { GetShoppings}
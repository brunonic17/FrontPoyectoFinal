

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


const PostShoppings = async (Cart)=> {
        let CartJson=JSON.stringify(Cart)

    const response=await fetch(`http://localhost:5050/api/carrito`,{
        method:"POST",
        body:CartJson ,
        headers:{
            "content-type":"application/json"
           
        },

      
        
    });

        const data=response.json();

        return data
}

export { GetShoppings,PostShoppings}
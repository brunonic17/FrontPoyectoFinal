

const GetShoppings = async ()=> {

    const response=await fetch(`http://localhost:5050/api/carritos`,{
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

const GetIdUsu = async (Cart)=> {
    let CartJson=JSON.stringify(Cart)

const response=await fetch(`http://localhost:5000/api/carrito/IdUsu`,{
    method:"POST",
    body:CartJson ,
    headers:{
        "content-type":"application/json"
       
    },

  
    
});

    const data=response.json();

    return data
}

const DeleteProduct = async (Product)=> {
    let ProductJson=JSON.stringify(Product)

    const response=await fetch(`http://localhost:5000/api/carrito`,{
    method:"DELETE",
    body:ProductJson ,
    headers:{
        "content-type":"application/json"
       
    },
    });

    const data=response.json();

    return data
}

const PagoPay = async (Carrito)=> {
    let CarritoJson=JSON.stringify(Carrito)

    const response=await fetch(`http://localhost:5000/api/carrito/confirma`,{
    method:"POST",
    body:CarritoJson ,
    headers:{
        "content-type":"application/json"
       
    },

  
    
});

    const data=response.json();

    return data
}

export { GetShoppings,PostShoppings,DeleteProduct,PagoPay,GetIdUsu}


const GetShoppings = async (id)=> {

    const response=await fetch("http://localhost:5050/api/carrito",{
        method:"POST",
        headers:{
            "content-type":"aplication/json"
        },
       body:{IdUsu:id}
    });

        const data=response.json();

        return data
}

export default GetShoppings
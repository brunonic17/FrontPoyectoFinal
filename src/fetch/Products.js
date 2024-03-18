


const GetProducts=async  ()=>{
  const response= await  fetch(`http://localhost:3000/api/Admin`,{
    method:"GET",
    headers:{"content-type":"application/json"},
    })
    const data=response.json();
    return data

};

const GetProduct=async  (id)=>{
  const response= await  fetch(`http://localhost:3000/api/Admin/${id}`,{
    method:"GET",
    headers:{"content-type":"application/json"},
    })
    const data=response.json();
    return data

};

const GetCompleteProduct=async  (Prod)=>{
  let ProdString=JSON.stringify(Prod)
    const response= await fetch(`http://localhost:3000/api/Admin/Product`,{
      body:ProdString,
      method:"POST",
      headers:{"content-type":"application/json"},
          });
          const data=response.json();

          return data
  };


const PostProducts=async  (Prod)=>{
  let ProdString=JSON.stringify(Prod)
    const response= await fetch(`http://localhost:3000/api/Admin`,{
      body:ProdString,
      method:"POST",
      headers:{"content-type":"application/json"},
          });
          const data=response.json();

          return data
  }
 


export {GetProducts,PostProducts,GetProduct,GetCompleteProduct}
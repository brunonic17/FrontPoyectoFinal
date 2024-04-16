


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
 

  const PostEspecificaciones=async  (Especificacion)=>{
  let ProdString=JSON.stringify(Especificacion)
    const response= await fetch(`http://localhost:3000/api/Admin/Especificaciones`,{
      body:ProdString,
      method:"POST",
      headers:{"content-type":"application/json"},
          });
          const data=response.json();

          return data
  };
  
  const UploadProducts=async  (Prod)=>{
  let ProdString=JSON.stringify(Prod)
    const response= await fetch(`http://localhost:3000/api/Admin/Product`,{
      body:ProdString,
      method:"PUT",
      headers:{"content-type":"application/json"},
          });
          const data=response.json();

          return data
  };

  const UploadEspecificaciones=async  (Especificacion)=>{
    let ProdString=JSON.stringify(Especificacion)
      const response= await fetch(`http://localhost:3000/api/Admin/Especificaciones`,{
        body:ProdString,
        method:"PUT",
        headers:{"content-type":"application/json"},
            });
            const data=response.json();
  
            return data
    };

    const UploadImage=async  (Image)=>{
      let ProdString=JSON.stringify(Image)
        const response= await fetch(`http://localhost:3000/api/Admin/Picture`,{
          body:ProdString,
          method:"PUT",
          headers:{"content-type":"application/json",
          'Content-Type': 'application/x-www-form-urlencoded'},
              });
              const data=response.json();
    
              return data
      };

      const DeleteProducts=async  (Prod)=>{
        let ProdString=JSON.stringify(Prod)
          const response= await fetch(`http://localhost:3000/api/Admin/Product`,{
            body:ProdString,
            method:"DELETE",
            headers:{"content-type":"application/json"},
                });
                const data=response.json();
      
                return data
        };

      const DeleteEspecificaciones=async  (Especificacion)=>{
        let ProdString=JSON.stringify(Especificacion)
          const response= await fetch(`http://localhost:3000/api/Admin/Especificaciones`,{
            body:ProdString,
            method:"DELETE",
            headers:{"content-type":"application/json"},
                });
                const data=response.json();
      
                return data
        };

       const DeleteImage=async  (Image)=>{
      let ProdString=JSON.stringify(Image)
        const response= await fetch(`http://localhost:3000/api/Admin/Picture`,{
          body:ProdString,
          method:"DELETE",
          headers:{"content-type":"application/json",
          'Content-Type': 'application/x-www-form-urlencoded'},
              });
              const data=response.json();
    
              return data
      };
 



export {GetProducts,PostProducts,GetProduct,GetCompleteProduct,PostEspecificaciones,UploadImage}
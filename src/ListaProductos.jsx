import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetProducts,UploadProducts,GetProduct,GetCompleteProduct,PostEspecificaciones,} from './fetch/Products.js';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import EditProd from './EditProduct.jsx';
import EditEsp from './EditEspecific.jsx';
import { UseEdit } from './fetch/EditContext.jsx';




const ProductDb= await GetProducts();
console.log(ProductDb.data);

localStorage.setItem("Products",JSON.stringify(ProductDb.data));

function ResponsiveExample() {
  
  const{NewEditProduct,setNewEditProduct,NewEditEspecific,setNewEditEspecific}=UseEdit()
  const [show, setShow] = useState(false);
  const[EdiProduct,setEdiProduct]=useState(); 
  const[EditEspecific,setEditEspecific]=useState(); 

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [Product,setProduct]=useState(JSON.parse(localStorage.getItem("Products")));
    
   console.log(Product);

  //  const Edit= async(product)=>{
  //   var count=0;
  //   var array=Product;
  //   array.map(async(element)=>{
  //     if(element._id==product._id){
  //      const Prod=new Object;
  //      Prod.NombreProducto=element.NombreProducto;
  //      Prod.UltPrecio=array[count].Precio;
  //      Prod.Precio=element.Precio;
  //      Prod.Detalle=element.Detalle;
  //      Prod.id=element._id;
      
  //      const res= await UploadProducts(Prod);
  //      console.log(res)
  //     }

  //   })

  //  };
    
    
    
    const FindProd= (product)=>{

    var array=Product;
     console.log(array)

   let i= array.find((element)=>element._id===product._id
    )
return i
   };

  

  return (<>
   

    <Table responsive border="1"
>
  
      
        {Array.from({ length: Product.length}).map((_, index) => (
           <tbody key={index}>
           <tr key={index}>
            <td colSpan={4} key={index}><h4>Nombre del Producto:{Product[index].NombreProducto}</h4></td>
            </tr>
            <tr >
            <td >Id:{Product[index].IdProduct}</td>
            <td >Ult. Precio:{Product[index].UltimoPrecio}</td>
            <td >Precio:{Product[index].Precio}</td>
            <td >Categoria:{Product[index].Categoria}</td>
            </tr>
            <tr >
            <td colSpan={4} >Descripcion</td>
            </tr>
           
            <tr>
            <td colSpan={4} ><p>{Product[index].Detalle}</p></td>
            </tr>
            <tr>



  <Button variant="primary"
   onClick={ async ()=>{
    handleShow();
    const EditProduct=Product[index];
setNewEditProduct({
  ...NewEditProduct,
     id:EditProduct._id,
     UltimoPrecio:EditProduct.Precio
   })
   console.log(FindProd(EditProduct))
   setEdiProduct(FindProd(EditProduct));
}}>
Editar Producto 
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>Editar Producto</Modal.Title>
</Modal.Header>
<Modal.Body>
<EditProd
element={EdiProduct}
></EditProd>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Cerrar
</Button>
<Button variant="primary" onClick={async()=>{
handleClose();

const ProductEdit=await UploadProducts(NewEditProduct);
console.log(ProductEdit)



}}>
Guardar Cambios
</Button>
</Modal.Footer>
</Modal>
</tr>
            <tr >
            <td colSpan={4} >Imagenes</td>
            </tr>
            <tr >
            <td colSpan={4} >
            <Container>
           <Row>
            {Array.from({ length: Product[index].UrlImagen.length }).map((_, indeex) => (
              <Col key={indeex}>
           <Image  src={Product[index].UrlImagen[indeex]} fluid />
           </Col>
          ))}
          </Row>
          </Container>
            </td>
            </tr>
            <tr>
              <td colSpan={4}>Especificaciones</td>
            </tr>
            <tr>
              

              {Array.from({ length: Product[index].Especificaciones.length }).map((_, indeeex) => (
                <td colSpan={1} key={indeeex}>
                       <tr>
                       <td >Cod. Producto:{Product[index].Especificaciones[indeeex].id.CodProducto}</td>
                       </tr>
                       <tr>
                       <td >Color:{Product[index].Especificaciones[indeeex].id.Color}</td>
                      </tr>
                      <tr>
                       <td >Cod. Color:{Product[index].Especificaciones[indeeex].id.CodColor}</td>
                      </tr>
                      <tr>
                       <td >Talle:{Product[index].Especificaciones[indeeex].id.Talle}</td>
                      </tr>
                      <tr>
                       <td >Stock:{Product[index].Especificaciones[indeeex].id.Stock}</td>
                      </tr>
                      <tr>
                       <td >Fecha de Alta:{Product[index].Especificaciones[indeeex].id.Fecha}</td>
                      </tr>
                      <tr>
                       <td >Estado:{Product[index].Especificaciones[indeeex].id.Estado}</td>
                      </tr>
                      <tr>
                      <Button   variant="danger" onClick={()=>{console.log(indeeex)}}>Eliminar</Button>{' '}
                      {/* <Button variant="primary"
                           onClick={ async ()=>{
                            handleShow();
                            const EditEsp=Product[index].Especificaciones[indeeex].id;
                           
                            const ids={
                              id2:EditEsp._id,
                              id:EditEsp._IdProduct
                            }
                            const GetEspecificProduct=await GetCompleteProduct(ids)
                          setEditEspecific(GetEspecificProduct) 
                        setNewEditEspecific({
                          ...NewEditEspecific,
                             id:EditEsp._id,
                             
                           })
                           console.log(EditEspecific)
                          
                        }}>
                        Editar Especificacion 
                         </Button>

                      <Modal show={show} 
                      onHide={handleClose}
                      >
                        <Modal.Header closeButton>
                        <Modal.Title>Editar Especificacion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <EditEsp
                        element={EditEspecific}
                        ></EditEsp>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary"
                         onClick={handleClose}
                         >
                        Cerrar
                        </Button>
                        <Button variant="primary" onClick={async()=>{
                        handleClose();
                        
                        
                        
                        
                        
                        // console.log(NewEditProduct);
                        const ProductEdit=await UploadProducts(NewEditProduct);
                        console.log(ProductEdit)
                        
                        
                        
                        }}>
                        Guardar Cambios
                        </Button>
                        </Modal.Footer>
                      </Modal> */}
                      </tr>
     
               </td>
          
            
          ))}
             
            </tr>
            
           </tbody>
         
               
          
        ))}
         
         {/* {Array.from({ length: 1 }).map((_, index) => (
           
        ))}
      */}
       
      
      
    
     {/* <tr>
          {Array.from({ length: 1 }).map((_, index) => (
         <td key={index}>Especificaciones</td>
       ))}
       {Array.from({ length: 1 }).map((_, index) => (
         <td key={index}>Id</td>
       ))}
        {Array.from({ length: 1 }).map((_, index) => (
         <td key={index}>Ult. Precio</td>
       ))} 
       {Array.from({ length: 1 }).map((_, index) => (
         <td key={index}>Precio</td>
       ))} 
       {Array.from({ length: 1 }).map((_, index) => (
         <td key={index}>Categoria</td>
       ))}
     </tr> */}
   
  </Table>
 
  </> );
}

export default ResponsiveExample;
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetProducts,UploadProducts,GetProduct,GetCompleteProduct,PostEspecificaciones,} from './fetch/Products.js';
import { useState,useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import EditProd from './EditProduct.jsx';
// import EditEsp from './EditEspecific.jsx';
import { UseEdit } from './fetch/EditContext.jsx';
import ModalEdit from "./ModalEditProduct.jsx";
import ModalEditEspecific from "./ModalEditEspecific.jsx"
import ModalCreateEspecific from "./ModalCreateEspecific.jsx"





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
            <td colSpan={4} >
              <h4>Descripcion</h4>Descripcion
              </td>
            </tr>
           
            <tr>
            <td colSpan={4} ><p>{Product[index].Detalle}</p></td>
            </tr>
            <tr>
            <ModalEdit element={Product[index]}></ModalEdit>




</tr>
            <tr >
            <td colSpan={4} >
             <h4>Imagenes</h4>
              </td>
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
              <td colSpan={4}>
                <h4>Especificaciones</h4>
              </td>
              <td colSpan={4}>
               <ModalCreateEspecific
                Id={Product[index]._id}
                ></ModalCreateEspecific>
              </td>
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

                      <ModalEditEspecific element={Product[index].Especificaciones[indeeex].id}></ModalEditEspecific>

                      </tr>
     
               </td>
          
            
          ))}
             
            </tr>
            
           </tbody>
         
               
          
        ))}
         
         
   
  </Table>
 
  </> );
}

export default ResponsiveExample;
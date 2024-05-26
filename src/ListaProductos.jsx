import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { GetProducts,PostProducts,GetProduct,GetCompleteProduct,PostEspecificaciones} from './fetch/Products.js';

const Products0= await GetProducts();
console.log(Products0.data[0].Especificaciones[0])


function ResponsiveExample() {
  return (<>
    {/* // <Table responsive striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th colSpan={4}>Nombre Producto</th>
    //       </tr>
    //   </thead>
    //   <tbody>  
    //     <tr>
    //       <td>id</td>
    //       <td>Ult. Precio</td>
    //       <td>Precio</td>
    //       </tr>
    //     <tr >
    //       <td colSpan={4}>Descripcion</td>
    //     </tr>
    //     <tr>
    //     <td colSpan={4}>asdasdasd</td>
    //     </tr>
    //     <tr>
    //       <td colSpan={4}>Imagenes</td>
    //     </tr>
    //     <tr>
    //       <td colSpan={4}>Imagen</td>
    //     </tr>
    //     <tr>
    //       <td colSpan={4}>Especificaciones</td>
    //     </tr>
    //     <tr>
         
    //       <td colSpan={1}>Cod. Producto</td>
    //       <td colSpan={1}>codigo</td>
    //       </tr>
    //       <tr>
    //       <td colSpan={1} >Color</td>
    //       <td>codigo</td>
    //       </tr>
    //       <tr>
    //       <td colSpan={1} >Cod. Color</td>
    //       <td colSpan={1} >codigo</td>
    //       </tr>
    //       <tr>
    //       <td colSpan={1} >Taller</td>
    //       <td colSpan={1}>talle</td>
    //       </tr>
    //       <tr>
    //       <td colSpan={1}>Fecha Alta</td>
    //       <td colSpan={1}>fecha</td>
    //       </tr>
    //       <tr>
    //       <td colSpan={1} >Estado</td>
    //       <td colSpan={1}> alta</td>
    //       </tr>

          
        
    //   </tbody>
    // </Table> */}

    <Table responsive border="1">
  
      
        {Array.from({ length: Products0.data.length}).map((_, index) => (
           <tbody key={index}>
           <tr key={index}>
            <td colSpan={4} key={index}><h4>Nombre del Producto:{Products0.data[index].NombreProducto}</h4></td>
            </tr>
            <tr >
            <td >Id:{Products0.data[index].IdProduct}</td>
            <td >Ult. Precio:{Products0.data[index].UltPrecio}</td>
            <td >Precio:{Products0.data[index].Precio}</td>
            <td >Categoria:{Products0.data[index].Categoria}</td>
            </tr>
            <tr >
            <td colSpan={4} >Descripcion</td>
            </tr>
            <tr>
            <td colSpan={4} ><p>{Products0.data[index].Detalle}</p></td>
            </tr>
            <tr >
            <td colSpan={4} >Imagenes</td>
            </tr>
            <tr >
            <td colSpan={4} >
            <Container>
           <Row>
            {Array.from({ length: Products0.data[index].UrlImagen.length }).map((_, indeex) => (
              <Col key={indeex}>
           <Image  src={Products0.data[index].UrlImagen[indeex]} fluid />
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
              

              {Array.from({ length: Products0.data[index].Especificaciones.length }).map((_, indeeex) => (
                <td colSpan={1} key={indeeex}>
                       <tr>
                       <td >Cod. Producto:{Products0.data[index].Especificaciones[indeeex].id.CodProducto}</td>
                       </tr>
                       <tr>
                       <td >Color:{Products0.data[index].Especificaciones[indeeex].id.Color}</td>
                      </tr>
                      <tr>
                       <td >Cod. Color:{Products0.data[index].Especificaciones[indeeex].id.CodColor}</td>
                      </tr>
                      <tr>
                       <td >Talle:{Products0.data[index].Especificaciones[indeeex].id.Talle}</td>
                      </tr>
                      <tr>
                       <td >Stock:{Products0.data[index].Especificaciones[indeeex].id.Stock}</td>
                      </tr>
                      <tr>
                       <td >Fecha de Alta:{Products0.data[index].Especificaciones[indeeex].id.Fecha}</td>
                      </tr>
                      <tr>
                       <td >Estado:{Products0.data[index].Especificaciones[indeeex].id.Estado}</td>
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
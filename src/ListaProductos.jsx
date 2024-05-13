import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

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

    <Table responsive>
  
      
        {Array.from({ length: 4 }).map((_, index) => (
           <tbody key={index}>
           <tr key={index}>
            <td colSpan={4} key={index}><h4>Nombre del Producto</h4></td>
            </tr>
            <tr >
            <td >Id</td>
            <td >Ult. Precio</td>
            <td >Precio</td>
            <td >Categoria</td>
            </tr>
            <tr >
            <td colSpan={4} >Descripcion</td>
            </tr>
            <tr>
            <td colSpan={4} ><p>Descripcion</p></td>
            </tr>
            <tr >
            <td colSpan={4} >Imagenes</td>
            </tr>
            <tr >
            <td colSpan={1} >
            <Container>
           <Row>
            {Array.from({ length: 3 }).map((_, index) => (
              <Col key={index}>
           <Image  src="holder.js/171x180" fluid />
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
              

              {Array.from({ length: 4 }).map((_, index) => (
                <td colSpan={1} key={index}>
                       <tr>
                       <td >Cod. Producto</td>
                       </tr>
                       <tr>
                       <td >Color</td>
                      </tr>
                      <tr>
                       <td >Cod. Color</td>
                      </tr>
                      <tr>
                       <td >Talle</td>
                      </tr>
                      <tr>
                       <td >Stock</td>
                      </tr>
                      <tr>
                       <td >Fecha de Alta</td>
                      </tr>
                      <tr>
                       <td >Estado</td>
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
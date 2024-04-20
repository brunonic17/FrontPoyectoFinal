
import {GetShoppings,DeleteProduct,PagoPay} from "./fetch/shopping";
import {FormaPago} from "../src/Shopping.jsx";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


let shopping = await GetShoppings('65f59b4fbbd09518d0b7e9f1');
console.log(shopping.Cart);


// const Car={IdUsu:"13",
// CantProduct:3,
// FechaCarro:12-12-2012,
// IdProduct:116,
// eid:'65e66dd6ea9d3d7580646ec3'
// } 

// let Post=await PostShoppings(Car)
// console.log(Post.data);


let Total = 0;
     for (let i = 0; i < shopping.Cart.DetalleCarro.length; i++) {
        Total =  Total + (shopping.Cart.DetalleCarro[i].CantProduct) * (shopping.Cart.DetalleCarro[i].pid.Precio)
     }

export const App = () => {
  return (<>
  
  <Table responsive bordered >
<tbody>
  <thead>
    <td>
      <th>cod. producto</th>
      {shopping.Cart.DetalleCarro.map((element,index) => (
        <tr key={index}>{element.pid.IdProduct}{index}</tr>
      ))}
    </td>
    <td>
      <th>Producto</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.pid.NombreProducto}>{element.pid.NombreProducto}</tr>
      ))}
    </td>
    <td>
      <th>cantidad</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.CantProduct}>{element.CantProduct}</tr>
      ))}
    </td>
    
    <td>
      <th>Precio unitario</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.pid.Precio}>{element.pid.Precio}</tr>
      ))}
    </td>
    <td>
      <th>Precio Parcial</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.CantProduct}>{element.CantProduct*element.pid.Precio}</tr>
      ))}
     
    </td>
    <td>
      <th>Eliminar Producto</th>
      {shopping.Cart.DetalleCarro.map((element,index) => (
        <tr key={index}> 
            <Button variant="outline-success">Modificar</Button>{' '}
            <Button variant="outline-danger"
            onClick={()=>
            { let eid =  shopping.Cart.DetalleCarro[index].eid._id;
              console.log(shopping.Cart.DetalleCarro[index])
              let IdUsu = shopping.Cart.IdUsu;
              let Product = {IdUsu,eid};
                
                DeleteProduct(Product);
                window.location.reload()}}
            >Eliminar</Button>{' '}
        </tr>
      ))}
     
    </td>
    <tr>
    <td colSpan={4}  >Total</td>
    
    <td>{Total}</td>
    <Button variant="outline-warning">Eliminar El Carrito</Button>{' '}
    </tr>
    
    
    
  </thead>
 
  </tbody>
</Table>

  <div>
  <h4>FORMA DE PAGO</h4>
    <FormaPago/>
    {console.log({FormaPago})}
  </div>

  <Button variant="outline-primary"
    // onClick={()=>
    //   { let cid =  shopping.Cart._id;
    //     let IdUsu = shopping.Cart.IdUsu;
    //     let Product = {IdUsu,eid};
          
    //       DeleteProduct(Product);
    //       window.location.reload()}}
  >CONFIRMA COMPRA CARRITO</Button>{' '}
  </>
       
      );
};

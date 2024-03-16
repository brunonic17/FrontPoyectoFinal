import { Table } from "react-bootstrap";
import {GetShoppings,PostShoppings} from "./fetch/shopping";

let shopping = await GetShoppings("65e8d4a09f78ed1bc62d2aa8");
console.log(shopping.Cart);


const Cart={IdUsu:"115",
CantProduct:6,
FechaCarro:12-12-2012,
IdProduct:15,
eid:'65e66d03ea9d3d7580646eb5'
} 

let Post=await PostShoppings(Cart)
console.log(Post.data)


// let id = '65e8d4a09f78ed1bc62d2aa8';
// let CantProduct = 2;
// let  Fecha;
// let Postshopping = {id:id, CantProduct:CantProduct, Fecha:Fecha};
// let PostShop = JSON.stringify(Postshopping);

// fetch(await PostShoppings(), {
//   method: 'POST',
//   body : PostShop
// })
// // await PostShoppings('65e8d4a09f78ed1bc62d2aa8', 2, "02-23-24", '15', '65e66d03ea9d3d7580646eb5');
// console.log(Postshopping.Cart);

export const App = () => {
  return (
        <Table responsive bordered>
        <tbody>
          <thead>
            <td>
              <th>cod. producto</th>
              {shopping.Cart.DetalleCarro.map((element) => (
                <tr key={element.pid.IdProduct}>{element.pid.IdProduct}</tr>
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
                <tr key={element.ParcialProduct}>{element.ParcialProduct}</tr>
              ))}
            </td>
          </thead>
        
          </tbody>
        </Table>
      );
  
    
};

import { Table } from "react-bootstrap";
import GetShoppings from "./fetch/shopping";

let shopping = await GetShoppings("65e8d4a09f78ed1bc62d2aa8");
console.log(shopping.Cart);

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

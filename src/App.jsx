import Table from 'react-bootstrap/Table';
import GetShoppings from "./fetch/shopping"



const shopping = GetShoppings("13");

console.log(shopping);


function ResponsiveExample() {
  return (
    <Table responsive bordered>
    <tbody>
      <thead>
        <td>
          <th>cod. producto</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr key={index}>Table heading</tr>
          ))}
        </td>
        <td>
          <th>Producto</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr key={index}>Table cell {index}</tr>
          ))}
        </td>
        <td>
          <th>cantidad</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr key={index}>Table cell {index}</tr>
          ))}
        </td>
        
        <td>
          <th>Precio unitario</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr key={index}>Table cell {index}</tr>
          ))}
        </td>
        <td>
          <th>Precio Parcial</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <tr key={index}>Table cell {index}</tr>
          ))}
        </td>
      </thead>
    
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
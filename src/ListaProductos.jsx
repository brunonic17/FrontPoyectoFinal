import Table from 'react-bootstrap/Table';

function ResponsiveExample() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Table heading</th>
          {Array.from({ length: 3 }).map((_, index) => (
            <th key={index}>n°{index}</th>
            
          ))}
        </tr>
      </thead>
      <tbody>
      <td>
         
         {Array.from({ length: 5 }).map((_, index) => (
           <tr key={index}>* {index}</tr>
         ))}
       </td>
       <td>
        
         {Array.from({ length: 5 }).map((_, index) => (
           <tr key={index}>Table cell {index}</tr>
         ))}
       </td>
        <td>
         
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>Table cell {index}</tr>
          ))}
        </td>
        <td>
         
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>Table cell {index}</tr>
          ))}
        </td>
       
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
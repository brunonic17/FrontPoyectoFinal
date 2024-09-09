import {UseEdit } from './fetch/EditContext.jsx';
import Form from 'react-bootstrap/Form';


function Example({element}) {

  const{NewEditProduct,setNewEditProduct}=UseEdit()
  const ChangeEdit=(e)=>{
   setNewEditProduct({
    ...NewEditProduct,
      [e.target.name]:e.target.value
      
  })
  };
 
  return (
    <>
    
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" name="NombreProducto" value={element.NombreProducto} onChange={ChangeEdit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" name="Precio" placeholder={element.Precio}  onChange={ChangeEdit} />
            </Form.Group>
          
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Detalle</Form.Label>
              <Form.Control as="textarea" rows={3} name="Detalle" placeholder={element.Detalle} onChange={ChangeEdit}/>
            </Form.Group>
          </Form>
        
    </>
  );
}

export default Example;

 
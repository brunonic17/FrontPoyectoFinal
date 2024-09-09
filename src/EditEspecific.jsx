import {UseEdit } from './fetch/EditContext.jsx';
import Form from 'react-bootstrap/Form';


function Example({element}) {

  const{NewEditEspecific,setNewEditEspecific}=UseEdit()
  const ChangeEdit=(e)=>{
    setNewEditEspecific({
    ...NewEditEspecific,
      [e.target.name]:e.target.value
      
  })
  };
 
  return (
    <>
    
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" name="Stock" value={element.Especificaciones.id.Stock} onChange={ChangeEdit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="select" name="Estado" placeholder={element.Especificaciones.id.Estado}  onChange={ChangeEdit} />
              <option disabled>Seleccione un estado</option>
             <option value="Alta">Alta</option>
             <option value="Baja">Baja</option>
            </Form.Group>
          
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Codigo de Color</Form.Label>
              <Form.Control  type="text" rows={3} name="CodColor" placeholder={element.Especificaciones.id.CodColor} onChange={ChangeEdit}/>
              <Form.Control  type="color" rows={3} name="CodColor" placeholder={element.Especificaciones.id.CodColor} onChange={ChangeEdit}/>
            </Form.Group>
          </Form>
        
    </>
  );
}

export default Example;

 
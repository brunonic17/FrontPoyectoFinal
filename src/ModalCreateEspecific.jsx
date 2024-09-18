import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {UseEdit } from './fetch/EditContext.jsx';
import {PostEspecificaciones} from './fetch/Products.js'


function Example(Id) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const{NewEditEspecific,setNewEditEspecific}=UseEdit();
  const id=Id.Id;

  const ChargeId=()=>{
    setNewEditEspecific({
      ...NewEditEspecific,
        _IdProduct:id
       });
  }
  

  const ChangeEdit=(e)=>{
    setNewEditEspecific({
    ...NewEditEspecific,
      [e.target.name]:e.target.value
 


 
  })};
  return (
    <>
      <Button variant="primary" onClick={
        ()=>{
                                                handleShow
                                                ();
                                                ChargeId()
                                                }
                                                }>
       Agregar una Especificacion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Especificacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" name="Color" placeholder="Blanco" onChange={ChangeEdit}   />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Talle</Form.Label>
              <Form.Control type="text" name="Talle" placeholder="45" onChange={ChangeEdit}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de Alta</Form.Label>
              <Form.Control type="Date" name="Fecha"  onChange={ChangeEdit}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Codigo de producto</Form.Label>
              <Form.Control type="text" name="CodProducto" placeholder="130002" onChange={ChangeEdit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" name="Stock" placeholder="5" onChange={ChangeEdit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <Form.Select  name="Estado"   onChange={ChangeEdit} >
              <option disabled>Seleccione un estado</option>
             <option value="Alta">Alta</option>
             <option value="Baja">Baja</option>
             </Form.Select>
            </Form.Group>
          
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Codigo de Color</Form.Label>
              <Form.Control  type="color" rows={3} name="CodColor"  onChange={ChangeEdit}/>
              <Form.Control  type="text" rows={3} name="CodColor" value={NewEditEspecific.CodColor} />
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
            handleClose()
          }}>
            Close
          </Button>
          <Button variant="primary"
           onClick={async()=>{
           
            const NewEspecific=await PostEspecificaciones(NewEditEspecific)
            console.log(NewEspecific)

            handleClose()
          }}
>
           Agregar Especificacion
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
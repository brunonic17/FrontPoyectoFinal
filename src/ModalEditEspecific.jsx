import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {UseEdit } from './fetch/EditContext.jsx';
import {GetCompleteProduct} from './fetch/Products.js';


function Example({element}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const{NewEditEspecific,setNewEditEspecific}=UseEdit();
  const ChangeEdit=(e)=>{
    setNewEditEspecific({
    ...NewEditEspecific,
      [e.target.name]:e.target.value
      
  })};
 
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Modificar Especificacion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Especificacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" name="Stock" placeholder={element.Stock} onChange={ChangeEdit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <Form.Select  name="Estado" placeholder={element.Estado}  onChange={ChangeEdit} >
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
              <Form.Control  type="color" rows={3} name="CodColor" placeholder={element.CodColor} onChange={ChangeEdit}/>
              <Form.Control  type="text" rows={3} name="CodColor" placeholder={element.CodColor} value={NewEditEspecific.CodColor} onChange={ChangeEdit}/>
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ async ()=>{
                            handleShow();
                            const EditEsp=element;
                           
                            const ids={
                              id2:EditEsp._id,
                              id:EditEsp._IdProduct
                            }

                            const GetEspecificProduct=await GetCompleteProduct(ids)
                           
                          
                        setNewEditEspecific({
                          ...NewEditEspecific,
                             id:EditEsp._id,
                             
                           })
                           console.log(GetEspecificProduct)
                           console.log(NewEditEspecific)
                          
                        }}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
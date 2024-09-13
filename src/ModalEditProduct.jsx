import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {UseEdit } from './fetch/EditContext.jsx';
import {UploadProducts} from './fetch/Products.js';


function Example({element}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const{NewEditProduct,setNewEditProduct}=UseEdit()
  const ChangeEdit=(e)=>{
   setNewEditProduct({
    ...NewEditProduct,
      [e.target.name]:e.target.value})}
    

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modificar Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar el producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={
            
            async()=>{
                handleClose();
                
                const ProductEdit=await UploadProducts(NewEditProduct);
                console.log(ProductEdit)
                
                
                
                }
          }>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
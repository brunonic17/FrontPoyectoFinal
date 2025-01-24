import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {UseEdit } from '../ContextAdmin/EditContext.jsx';
import {UploadImage} from '../FetchAdmin/Products.js';


function Example(element) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const{NewEditProduct,setNewEditProduct}=UseEdit()

  
  ;
  const ChangeEdit=(e)=>{
   setNewEditProduct({
    ...NewEditProduct,
      [e.target.name]:e.target.value})}
    

  return (
    <>
      <Button  onClick={handleShow}>
       Agregar Imagen
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Agregar Imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" name="file"  onChange={ChangeEdit} />
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
                const Id=element.element

                setNewEditProduct({
                    ...NewEditProduct,
                      "_id":Id});
                      
                const FormD=new FormData();
                console.log(NewEditProduct);

                FormD.set("_id",NewEditProduct._id);
                FormD.set("file",NewEditProduct.file);
                
                console.log(FormD)
                const ProductEdit=await UploadImage(FormD);
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
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from "../Context/AuthContext";
import { PostShoppings } from "../fetch/shopping";

  function  Example(element) {
  console.log(element)
  const [show, setShow] = useState(false);
  const [cantidad,setCantProduct]=useState();
  const { user, isAuthenticated } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Modificar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cantidad Nueva</Form.Label>
              <Form.Control
                type="number"
                placeholder={element.element.CantProduct} 
                onChange={(e)=>{setCantProduct(e.target.value)}}
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={async()=>{
            let eid=element.element.eid._id;
            let IdUsu=user.id;
            let IdProduct=element.element.pid.IdProduct;
            let Product={IdUsu,eid,IdProduct,cantidad}
          
            const Modific= await PostShoppings(Product)
            console.log(Modific)

          }}>
             Guardar Cambio
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, FormGroup } from "react-bootstrap";

import Form from "react-bootstrap/Form";

function ModalEx() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow}>
        Registro
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
      <Form>
        <FormGroup className="mb-3">
      <Form.Label>Nombre</Form.Label>
      <Form.Control
        type="text"
        placeholder="ej: Federico"
        />
</FormGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ej: fede@gmail.com" />
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handleClose}>
          Enviar
        </Button>
      </Form>
      </Container>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEx;
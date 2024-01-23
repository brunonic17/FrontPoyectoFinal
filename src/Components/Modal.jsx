
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Registro from "../Pages/Registro"
import {useForm} from "react-hook-form"

function ModalEx() {

  const {register, handleSubmit} = useForm()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p  onClick={handleShow}>
        Registro
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTRO</Modal.Title>
        </Modal.Header>

   
      < Registro />
        
    

        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEx;

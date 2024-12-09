import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useProducts } from "../Context/ProductsContext";



export const EditModal = ({show, handleClose, cantidad}) => {
  const { getProductShopping, productShopping } = useProducts();



// useEffect(() => {
//   getProductShopping();
// }, [])

  console.log(show)


  return (
    <div>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Editar cantidad</h2>
          <p>Cantidad actual: {cantidad.CantProduct}</p>
        {/* {cantidad.map(()=> {
          return (
            <div key={productShopping.id}>
              <h2>{productShopping.name}</h2>
            </div>
          )
        })} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

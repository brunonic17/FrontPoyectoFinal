// import BottonModificar from "./BotonModificar.jsx";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useProducts } from "../Context/ProductsContext";
import { useEffect } from "react";

const Carrito = () => {
  const { productShopping,getProductShopping } = useProducts();

  useEffect(() => {
    getProductShopping()
   console.log(productShopping.DetalleCarro[0].IdProductCarro)
  }, []);

  return (
    <div>
      <Table responsive bordered>
        <tbody>
          <thead>
            <td>
              <th>Cod. Producto</th>

              <tr></tr>
            </td>
            <td>
              <th>Cod. Art.</th>

              <tr>hola</tr>
            </td>
            <td>
              <th>Producto</th>

              <tr></tr>
            </td>
            <td>
              <th>cantidad</th>

              <tr></tr>
            </td>

            <td>
              <th>Precio unitario</th>

              <tr></tr>
            </td>
            <td>
              <th>Precio Parcial</th>

              <tr></tr>
            </td>
            <td>
              <th>Acciones Producto</th>

              <tr>
                <Button variant="outline-success">Modificar</Button>
                <Modal>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Modificar Cantidad</Form.Label>
                        <Form.Control type="text" rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Guardar Cambios</Button>
                  </Modal.Footer>
                </Modal>
                <Button variant="outline-success">Modificar</Button>{" "}
                <Button variant="outline-danger">Eliminar</Button>{" "}
              </tr>
            </td>
            <tr>
              <td colSpan={4}>Total</td>
              <td>total</td>
              <Button variant="outline-warning">
                Eliminar El Carrito
              </Button>{" "}
            </tr>
          </thead>
        </tbody>
      </Table>
      <div>
        <h4>FORMA DE PAGO</h4>
        <Form.Select aria-label="Forma de Pago">
          <option disabled>Seleccione La Forma de Pago</option>
          <option value="Tarjeta Credito">Tarjeta Credito</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Mercado Pago">Mercado Pago</option>
        </Form.Select>
      </div>
      <Button variant="outline-primary">CONFIRMA COMPRA CARRITO</Button>{" "}
    </div>
  );
};

export default Carrito;

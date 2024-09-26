import { useProducts } from "../Context/ProductsContext";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import EditModalCarrito from "../Components/ModalEditCarrito";
import Button from "react-bootstrap/Button";
import { PagoPay } from "../fetch/shopping";

export const Carrito = () => {
  const { user, isAuthenticated } = useAuth();
  const {
    getProductShopping,
    productShopping,
    DeleteShoppingProduct,
    DecrementQty,
    getCarroId,
    deleteShopping,
  } = useProducts();
  const [formapago, setForma] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    getProductShopping();

    if (!isAuthenticated) navigate("/");
  }, []);

  console.log(productShopping.length);
  let Total = 0;
  for (let i = 0; i < productShopping.length; i++) {
    Total =
      Total + productShopping[i].CantProduct * productShopping[i].pid.Precio;
  }

  return (
    <>
      <h1 className=" text-center">Carrito</h1>
      {productShopping.length === 0 ? (
        <h1 className=" text-center bg-secondary ">No tienes Carrito</h1>
      ) : (
        <>
          <Table responsive bordered className=" d-flex justify-content-center">
            <tbody>
              <thead>
                <td>
                  <th>Color</th>
                  {productShopping.map((element, index) => (
                    <tr key={index}>{element.eid.Color}</tr>
                  ))}
                </td>

                <td>
                  <th>Talle</th>
                  {productShopping.map((element) => (
                    <tr key={element.eid}>{element.eid.Talle}</tr>
                  ))}
                </td>
                <td>
                  <th>Producto</th>
                  {productShopping.map((element) => (
                    <tr key={element.pid.NombreProducto}>
                      {element.pid.NombreProducto}
                    </tr>
                  ))}
                </td>
                <td>
                  <th>Cantidad</th>
                  {productShopping.map((c, index) => {
                    return (
                      <>
                        <tr key={index}>
                          {productShopping[index].CantProduct}
                        </tr>
                      </>
                    );
                  })}
                </td>

                <td>
                  <th>Precio unitario</th>
                  {productShopping.map((element) => (
                    <tr key={element.pid.Precio}>{element.pid.Precio}</tr>
                  ))}
                </td>
                <td>
                  <th>Precio Parcial</th>
                  {productShopping.map((element) => (
                    <tr key={element.CantProduct}>
                      {element.CantProduct * element.pid.Precio}
                    </tr>
                  ))}
                </td>

                <td>
                  <th>Acciones Producto</th>
                  {productShopping.map((element, index) => (
                    <tr key={index}>
                      <EditModalCarrito element={element} />

                      <Button
                        variant="outline-danger"
                        onClick={async () => {
                          let eid = productShopping[index].eid._id;
                          console.log(productShopping[index]);
                          let IdUsu = user.id;
                          let Product = { IdUsu, eid };

                          await DeleteShoppingProduct(Product);
                          DecrementQty();
                          // console.log(Product.eid);
                          // console.log(productShopping.DetalleCarro);
                        }}
                      >
                        Eliminar
                      </Button>
                    </tr>
                  ))}
                </td>
                <tr>
                  <td colSpan={4}>Total</td>
                  <td>{Total}</td>
                  <Button
                    variant="outline-warning"
                    onClick={() => {
                      deleteShopping(getCarroId);
                      console.log(getCarroId)
                    }}
                  >
                    Eliminar El Carrito
                  </Button>
                </tr>
              </thead>
            </tbody>
          </Table>
          <div>
            <h4>FORMA DE PAGO</h4>
            <Form.Select
              aria-label="Forma de Pago"
              onChange={(event) => {
                console.log(event.target.value);
                setForma(event.target.value);
              }}
            >
              <option disabled>Seleccione La Forma de Pago</option>
              <option value="Tarjeta Credito">Tarjeta Credito</option>
              <option value="Transferencia">Transferencia</option>
              <option value="Mercado Pago">Mercado Pago</option>
            </Form.Select>
          </div>
          <Button
            variant="outline-primary"
            onClick={async () => {

              let PayShopping = {
                cid: getCarroId,//
                PayTipoPay: formapago,
                TotalCarro: Total,
                
            
              };

              const Pay = await PagoPay(PayShopping);
              console.log(PayShopping);console.log(Pay)
              // deleteShopping(getCarroId);
            }}
          >
            CONFIRMA COMPRA CARRITO
          </Button>{" "}
          <script src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
data-preference-id="1273324264-f92cada3-65b7-4a53-a55b-af7cfb015eb6" data-source="button">
</script>
        </>
      )}
    </>
  );
};

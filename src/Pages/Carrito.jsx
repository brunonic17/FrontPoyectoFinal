import { useProducts } from "../Context/ProductsContext";
import { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import EditModalCarrito from "../Components/ModalEditCarrito";
import Button from "react-bootstrap/Button";
// // import { PagoPay } from "../fetch/shopping";
import { useShoppingContext } from "../Context/ShoppingContext";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export const Carrito = () => {
  initMercadoPago("APP_USR-ee7c2a9d-4725-4e64-bf91-ad5ba9a3c2a2", { locale: "es-AR" });
  const { user, isAuthenticated } = useAuth();
  const { createOrderPayment, payment, paymentId } = useShoppingContext();
  const {
    getProductShopping,
    productShopping,
    DeleteShoppingProduct,
    DecrementQty,
    getCarroId,
    deleteShopping,
  } = useProducts();

  // const [formapago, setForma] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    getProductShopping();
   
    if (!isAuthenticated) navigate("/");
  }, []);

  console.log(user.email)
  let Total = 0;
  for (let i = 0; i < productShopping.length; i++) {
    Total =
      Total + productShopping[i].CantProduct * productShopping[i].pid.Precio;
  }
  let cantidadTotal = 0;
  for (let i = 0; i < productShopping.length; i++) {
    cantidadTotal = cantidadTotal + productShopping[i].CantProduct;
  }
  console.log(cantidadTotal);
  console.log(paymentId);
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
                          console.log(
                            productShopping[index].pid.NombreProducto
                          );
                          let IdUsu = user.id;
                          let Product = { IdUsu, eid };

                          // await DeleteShoppingProduct(Product);
                          DecrementQty();
                          console.log(Product.eid);

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
                      console.log(productShopping);
                      // deleteShopping(getCarroId);
                      // console.log(getCarroId);
                    }}
                  >
                    Eliminar El Carrito
                  </Button>
                </tr>
              </thead>
            </tbody>
          </Table>
          {/* <div>
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
          </div> */}
          <Button
            variant="outline-primary"
            onClick={() => {
              const carrito = {
                user: user.nameUser,
                userEmail: user.email,
                TotalCarro: Total,
              };
              createOrderPayment(carrito);
              // let PayShopping = {
              //   cid: getCarroId,
              //   TotalCarro: Total,
              // };
              // window.location.href = payment;
              console.log(payment);
              console.log(paymentId);

              // const Pay = await PagoPay(PayShopping);
              // console.log(PayShopping);console.log(Pay)
              // deleteShopping(getCarroId);
            }}
          >
            CONFIRMA COMPRA CARRITO
            </Button>
            {paymentId && 
          <Button
          onClick={() => {
            deleteShopping(getCarroId);

          }}>
         <Wallet
            initialization={{ preferenceId: paymentId }}
            customization={{ texts: { valueProp: "smart_option" } }}

            /> 
            </Button>
            }
          
        </>
      )}
    </>
  );
};

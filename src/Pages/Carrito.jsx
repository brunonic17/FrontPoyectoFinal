import { useProducts } from "../Context/ProductsContext";
import { useEffect, useMemo } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import EditModalCarrito from "../Components/ModalEditCarrito";
import Button from "react-bootstrap/Button";
// import { PagoPay } from "../fetch/shopping";
import { useShoppingContext } from "../Context/ShoppingContext";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { formatCurrency } from "../utils";

export const Carrito = () => {
  initMercadoPago("APP_USR-ee7c2a9d-4725-4e64-bf91-ad5ba9a3c2a2", {
    locale: "es-AR",
  });
  //---
  const { user, isAuthenticated } = useAuth();
  const { createOrderPayment, payment, paymentId, setTotal } = useShoppingContext();
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
    console.log("renderizando")
    // if (!isAuthenticated) navigate("/carrito");
  }, []);
 console.log(productShopping)
  // console.log(productShopping[0].pid.Precio);
  let Total = 0;
  for (let i = 0; i < productShopping.length; i++) {
    Total = Total + productShopping[i].cantidad * productShopping[i].pid.Precio;
  }

  const resultTotal = useMemo(
    () =>
      productShopping.reduce(
        (acum, element) => acum + element.cantidad * element.pid.Precio,
        0
      ),
    [productShopping]
  );
  //usar useMemo
  // let cantidadTotal = 0;
  // for (let i = 0; i < productShopping.length; i++) {
  //   cantidadTotal = +productShopping[i].cantidad;
  // }
 

  return (
    <>
      <h1 className=" text-center">Carrito</h1>
      {productShopping.length === 0 ? (
        <h1 className=" text-center bg-secondary ">No tienes Carrito</h1>
      ) : (
        <>
          <Table striped bordered hover className=" container">
            <thead>
              <tr className=" text-center">
                <th>Color</th>
                <th>Talle</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Precio Parcial</th>
                <th>Acciones de Productos</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {productShopping.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item.eid.Color}</td>

                    <td>{item.eid.Talle}</td>
                    <td>{item.pid.NombreProducto}</td>
                    <td>{item.cantidad}</td>
                    <td>{formatCurrency(item.pid.Precio)}</td>
                    <td>{formatCurrency(item.cantidad * item.pid.Precio)}</td>
                    <td className=" d-flex flex-column flex-lg-row justify-content-center gap-2">
                      <div>
                        <button
                          className="btn btn-success "
                          onClick={() => {
                            console.log(item.cantidad);
                          }}
                        >
                          <EditModalCarrito element={item} />
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={async () => {
                            let eid = productShopping[index].eid._id;
                            console.log(
                              productShopping[index].pid.NombreProducto
                            );
                            console.log(eid);
                            let IdUsu = user.id;
                            let Product = { IdUsu, eid };

                            await DeleteShoppingProduct(Product);
                            DecrementQty();
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="text-center">Total</th>
                <th colSpan={4}></th>
                <th className="text-center">{formatCurrency(resultTotal)}</th>
                <td
                  colSpan={1}
                  className=" d-flex justify-content-center gap-2"
                >
                  <div>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        console.log(productShopping);
                        deleteShopping(getCarroId);
                        console.log(getCarroId);
                      }}
                    >
                      {" "}
                      Eliminar El Carrito
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
           
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
            onClick={async () => {
              const carrito = {
                user: user.nameUser,
                userEmail: user.email,
                TotalCarro: Total,
              };
              console.log(carrito);
              createOrderPayment(carrito);
              // setTotal(Total)

              // let PayShopping = {
              //   cid: getCarroId,
              //   TotalCarro: Total,
              // };
              // console.log(PayShopping);
              // // console.log(payment);
              // console.log(paymentId);

              // const Pay = await PagoPay(PayShopping);

              // console.log(Pay);
              // deleteShopping(getCarroId);
            }}
          >
            CONFIRMA COMPRA CARRITO
          </Button>
          {paymentId && (
            <btn
              className="btn btn-primary"
              onClick={() => {
            
                window.location.href = payment.data.init_point;
              }}
            >
              <Wallet
                initialization={{ preferenceId: paymentId,
                  redirectMode: "target_blank" 
                 }}
          
                customization={{ texts: { valueProp: "smart_option" } }}
              />
            </btn>
          )}
        </>
      )}
    </>
  );
};

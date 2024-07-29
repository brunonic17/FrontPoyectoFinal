// import BottonModificar from "./BotonModificar.jsx";
import { Table } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
import { useProducts } from "../Context/ProductsContext";
import { useEffect } from "react";
// import { useAuth } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import {
//   DeleteProduct,
//   PagoPay,
//   PostShoppings,
//   GetIdUsu,
// } from "../fetch/shopping";
// import BottonModificar from "../BotonModificar";

const Carrito = () => {
  const { getProductShopping, productShopping } = useProducts();
  // const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    getProductShopping();
    // if (!isAuthenticated) navigate("/");
  }, []);

  console.log(productShopping);

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
        <Table responsive bordered>
          <tbody>
            <thead>
              <td>
                <th>Cod. Producto</th>
                {productShopping.map((element, index) => (
                  <tr key={index}>{element.pid.IdProduct}</tr>
                ))}
              </td>

              <td>
                <th>Cod. Art.</th>
                {productShopping.map((element) => (
                  <tr key={element.IdArtCarro}>{element.IdArtCarro}</tr>
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
                <th>cantidad</th>
                {productShopping.map((element) => (
                  <tr key={element.CantProduct}>{element.CantProduct}</tr>
                ))}
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
            </thead>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Carrito;

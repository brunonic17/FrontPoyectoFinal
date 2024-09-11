import { useProducts } from "../Context/ProductsContext";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { EditModal } from "../Components/Modal";
import {
  DeleteProduct,
  // PagoPay,
  PostShoppings,
} from "../fetch/shopping";
import EditModalCarrito from "../Components/ModalEditCarrito";

import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { useFav } from "../Context/FavContext";

export const Carrito = () => {
  const [show, setShow] = useState(false);
  const [EditProduct, setEditProduct] = useState();
  const { user, isAuthenticated } = useAuth();

  const { getProductShopping, productShopping } = useProducts();
  const { DeleteCarProduct } = useFav();
  const navigate = useNavigate();
  //  console.log(user);
  // let repuesta = await GetShoppings(user);

  useEffect(() => {
    getProductShopping();
    if (!isAuthenticated) navigate("/");
  }, []);

  // const [cantidad, setCantidad] = useState(
  //   productShopping.map((e) => {
  //     return e.CantProduct;
  //   })
  // );
  console.log(productShopping);

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
                      <tr key={index}>{productShopping[index].CantProduct}</tr>
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

                        await DeleteProduct(Product);
                      }}
                    >
                      Eliminar
                    </Button>
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

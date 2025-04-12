import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetProducts, DeleteEspecificaciones } from "../FetchAdmin/Products.js";
import { useState, useEffect } from "react";
// import Modal from 'react-bootstrap/Modal';
// import EditProd from './EditProduct.jsx';
// import EditEsp from './EditEspecific.jsx';
import { UseEdit } from "../ContextAdmin/EditContext.jsx";
import ModalEdit from "./ModalEditProduct.jsx";
import ModalEditEspecific from "./ModalEditEspecific.jsx";
import ModalCreateEspecific from "./ModalCreateEspecific.jsx";
import { useProducts } from "../Context/ProductsContext.jsx";
import { useAuth } from "../Context/AuthContext.jsx";

// const ProductDb= await GetProducts();
// console.log(ProductDb.data);

function GetListaProductos() {
  
  const { productsPage, getProducts } = useProducts();



 

  
  return (
    <>

      {productsPage.map((product, index) => {
        return (
          <Table striped bordered hover key={index}>
            <thead className=" text-center">
              <tr>
                <th className=" w-25">Imagen</th>
                <th>Id Producto</th>
                <th>Nombre del Producto</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className=" text-center h-100 ">
              <tr className=" h-100">
                <td>
                  <img
                    className="card w-50"
                    src={product.UrlImagen[0].secure_url}
                    alt={`imagen ${index}`}
                  />
                </td>
                <td>{product.IdProduct}</td>
                <td>{product.NombreProducto}</td>
                <td>{product.Detalle}</td>
                <td className=" d-flex  h-100 justify-content-center ">
                  <div className=" d-flex flex-column justify-content-center gap-2 ">
                    <button className="btn btn-secondary"> Modificar</button>
                    <button className="btn btn-danger"> Eliminar</button>
                    <button className="btn btn-success"> Ver más</button>
                  </div>
                </td>
                {/* <td className="">
                </td> */}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}  className="">
                  <ModalCreateEspecific
                    Id={product._id}
                  ></ModalCreateEspecific>
                  {/* <Button variant="primary">Agregar Imagen</Button> */}
                </td>
                <td colSpan={3}  className="">
                  <Button variant="primary">Agregar Imagenes</Button>
                  {/* <Button variant="primary">Agregar Imagen</Button> */}
                </td>
               
              </tr>
            </tfoot>
          </Table>
        );
      })}
    </>
    // productsPage.map((product) => {

    // })
  );
}

export default GetListaProductos;
{
  /* <Table responsive border="4" className="mt-4 container">
        {Array.from({ length: productsPage.length }).map((_, index) => (
          <>
            <tbody key={index} className=" shadow">
              <tr key={index}>
                <td colSpan={4} key={index}>
                  <h4>
                    Nombre del Producto:{productsPage[index].NombreProducto}
                  </h4>
                </td>
              </tr>
              <tr>
                <td>Id:{productsPage[index].IdProduct}</td>
                <td>Ult. Precio:{productsPage[index].UltimoPrecio}</td>
                <td>Precio:{productsPage[index].Precio}</td>
                <td>Categoria:{productsPage[index].Categoria}</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <h4>Descripcion</h4>
                </td>
              </tr>

              <tr>
                <td colSpan={4}>
                  <p>{productsPage[index].Detalle}</p>
                </td>
              </tr>
              <tr>
                <ModalEdit element={productsPage[index]}></ModalEdit>
              </tr>
              <tr>
                <td colSpan={4}>
                  <h4>Imagenes</h4>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <Container>
                    <Row>
                      {Array.from({
                        length: productsPage[index].UrlImagen.length,
                      }).map((_, indeex) => (
                        <Col key={indeex}>
                          <Image
                            width={200}
                            height={200}
                            className=" bg-red"
                            src={productsPage[index].UrlImagen[indeex]}
                            fluid
                          />
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <h4>Especificaciones</h4>
                </td>
                <td colSpan={4}>
                  <ModalCreateEspecific
                    Id={productsPage[index]._id}
                  ></ModalCreateEspecific>
                </td>
              </tr>
              <tr>
                {Array.from({
                  length: productsPage[index].Especificaciones.length,
                }).map((_, indeeex) => (
                  <td colSpan={1} key={indeeex}>
                    <tr>
                      <td>
                        Cod. Producto:
                        {
                          productsPage[index].Especificaciones[indeeex].id
                            .CodProducto
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Color:
                        {productsPage[index].Especificaciones[indeeex].id.Color}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Cod. Color:
                        {
                          productsPage[index].Especificaciones[indeeex].id
                            .CodColor
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Talle:
                        {productsPage[index].Especificaciones[indeeex].id.Talle}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Stock:
                        {productsPage[index].Especificaciones[indeeex].id.Stock}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Fecha de Alta:
                        {productsPage[index].Especificaciones[indeeex].id.Fecha}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Estado:
                        {
                          productsPage[index].Especificaciones[indeeex].id
                            .Estado
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button
                          variant="danger"
                          onClick={async () => {
                            const Esp = {
                              id: productsPage[index]._id,
                              id2: productsPage[index].Especificaciones[indeeex]
                                .id._id,
                            };
                            const Delete = await DeleteEspecificaciones(Esp);
                            console.log(Delete);
                          }}
                        >
                          Eliminar Especificacion
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <ModalEditEspecific
                        element={
                          productsPage[index].Especificaciones[indeeex].id
                        }
                      ></ModalEditEspecific>
                    </tr>
                  </td>
                ))}
              </tr>
            </tbody>
            <hr className=" border-4 w-100" />
            <hr className=" border-4 w-100" />
          </>
        ))}
      </Table> */
}

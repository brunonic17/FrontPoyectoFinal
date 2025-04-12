import DataTble from "react-data-table-component";
import { useAuth } from "../Context/AuthContext";
import { useProducts } from "../Context/ProductsContext";
import { useEffect } from "react";

const TableProductsList = () => {
  const { user } = useAuth();
  const { productsPage, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(productsPage);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Nombre Producto",
      selector: (row) => row.nombreProducto,
    },
    {
      name: "Ultimo Precio",
      selector: (row) => row.ultimoPrecio,
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
    },

    {
      name: "Color",
      selector: (row) => row.color,
    },
    {
      name: "Categoria",
      selector: (row) => row.categoria,
    },
  ];
  const data = productsPage.map((product) => {
    return {
      id: product.IdProct,
      nombreProducto: product.NombreProducto,
      ultimoPrecio: product.UltimoPrecio,
      precio: product.Precio,
      color: product.Especificaciones.Color,
      categoria: product.Categoria,
    };
  });
  // {
  //     id: 1,
  //     nombreProducto: "Producto 1",
  //     ultimoPrecio: 100,
  //     precio: 150,
  //     color: "Rojo",
  //     categoria: "Electronicos"
  // }

  return (
    <>
      <h1 className=" text-center fw-bold">
        Mostrando tabla de proaductos{" "}
        <span className=" text-danger-emphasis fs-3 text-center mt-2">
          Hola Admin {user.nameUser}
        </span>
      </h1>
      <div>
        <DataTble columns={columns} data={data} />
      </div>
    </>
  );
};
export default TableProductsList;

import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useProducts } from "../Context/ProductsContext";
const Buscador = () => {
  const { searcher, search } = useProducts();
  //  const buscar = (e)=> {
  //    console.log(e.target.value)
  //  }

  return (
    <div>
      {/* <InputGroup className="">
        <Form.Control
          placeholder="Buscar Producto"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={search}
          onChange={searcher}
        />
      </InputGroup> */}

      <Form className="d-flex ">
        <Form.Control
          type="search"
          placeholder="Buscar productos"
          className=" imputBuscar"
          aria-label="Search"
          value={search}
          onChange={searcher}
        />
        {/* <Button variant="" className="iconoBuscar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Button> */}
      </Form>
    </div>
  );
};
export default Buscador;

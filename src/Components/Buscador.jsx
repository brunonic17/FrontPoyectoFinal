import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useProducts } from "../Context/ProductsContext";
const Buscador = () => {
  const {
    searcher,
    search,
  } = useProducts();
  //  const buscar = (e)=> {
  //    console.log(e.target.value)
  //  }
 
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
            value= {search}
            onChange={searcher}
        />
      </InputGroup>

      {/* <InputGroup className="  mt-3">
        <Form.Control
          placeholder="Buscar Producto"
          aria-label="Username"
          aria-describedby="basic-addon1"
      
        />
      </InputGroup> */}
    </div>
  );
};
export default Buscador;

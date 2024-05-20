
import {GetShoppings,DeleteProduct,PagoPay,PostShoppings,GetIdUsu} from "./fetch/shopping";
// import BottonModificar from "./BotonModificar.jsx";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const shopping= await GetShoppings('66427a8c1ae245297e67dc43')
console.log(shopping.Cart._id)
// const Car={
// IdUsu:"17",
// CantProduct:3,
// FechaCarro:6-6-2023,
// IdProduct:116,
// eid:'65e66dd6ea9d3d7580646ec3'
// } 

// let Post=await PostShoppings(Car)
// console.log(Post.data);


let Total = 0;
     for (let i = 0; i < shopping.Cart.DetalleCarro.length; i++) {
        Total =  Total + (shopping.Cart.DetalleCarro[i].CantProduct) * (shopping.Cart.DetalleCarro[i].pid.Precio)
     }

export const App = () => {
    const [show, setShow] = useState(false);
    const [CantProduct, setCantProduct] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [formapago,setForma]=useState({});
console.log(formapago)
  console.log(CantProduct)
 



  return (<>
  
  <Table responsive bordered >
<tbody>
  <thead>
    <td>
      <th>Cod. Producto</th>
      {shopping.Cart.DetalleCarro.map((element,index) => (
        <tr key={index}>{element.pid.IdProduct}</tr>
      ))}
    </td>
    <td>
      <th>Cod. Art.</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.IdArtCarro}>{element.IdArtCarro}</tr>
      ))}
    </td>
    <td>
      <th>Producto</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.pid.NombreProducto}>{element.pid.NombreProducto}</tr>
      ))}
    </td>
    <td>
      <th>cantidad</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.CantProduct}>{element.CantProduct}</tr>
      ))}
    </td>
    
    <td>
      <th>Precio unitario</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.pid.Precio}>{element.pid.Precio}</tr>
      ))}
    </td>
    <td>
      <th>Precio Parcial</th>
      {shopping.Cart.DetalleCarro.map((element) => (
        <tr key={element.CantProduct}>{element.CantProduct*element.pid.Precio}</tr>
      ))}
     
    </td>
    <td>
      <th>Acciones Producto</th>
      {shopping.Cart.DetalleCarro.map((element,index) => (
        <tr key={index}> 

      <Button variant="outline-success" onClick={handleShow}>
        Modificar
      </Button>

      <Modal show={show} onHide={handleClose}>
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
              <Form.Control  type="text" rows={3} onChange={(event)=>{
      setCantProduct(event.target.value);
      console.log(CantProduct)
    }}  placeholder={element.CantProduct} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={async()=>{
              let eid =  shopping.Cart.DetalleCarro[index].eid._id;
              console.log(index)
              let IdUsu = shopping.Cart.IdUsu;
              let IdProduct=shopping.Cart.DetalleCarro[index].pid.IdProduct;
              let Product = {IdUsu,eid,CantProduct,IdProduct};
              console.log(Product)
                
             await PostShoppings(Product);

              


          }}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
            {/* <BottonModificar></BottonModificar> */}
            {/* <Button variant="outline-success" onClick={()=>
            { let eid =  shopping.Cart.DetalleCarro[index].eid._id;
              console.log(shopping.Cart.DetalleCarro[index])
              let IdUsu = shopping.Cart.IdUsu;
              let Product = {IdUsu,eid};
                
              PostShoppings(Product);
                window.location.reload()}}>Modificar</Button>{' '} */}

            <Button variant="outline-danger"
            onClick={()=>
            { let eid =  shopping.Cart.DetalleCarro[index].eid._id;
              console.log(shopping.Cart.DetalleCarro[index])
              let IdUsu = shopping.Cart.IdUsu;
              let Product = {IdUsu,eid};
                
              DeleteProduct(Product);
                window.location.reload()}}
            >Eliminar</Button>{' '}
        </tr>
      ))}
     
    </td>
    <tr>
    <td colSpan={4}  >Total</td>
    
    <td>{Total}</td>
    <Button variant="outline-warning">Eliminar El Carrito</Button>{' '}
    </tr>
    
    
    
  </thead>
 
  </tbody>
</Table>

  <div>
  <h4>FORMA DE PAGO</h4>
  <Form.Select aria-label="Forma de Pago" onChange={(event) => {
      setForma(event.target.value)
    }}>
      <option disabled  >Seleccione La Forma de Pago</option>
      <option value="Tarjeta Credito" >Tarjeta Credito</option>
      <option value="Transferencia">Transferencia</option>
      <option value="Mercado Pago">Mercado Pago</option>
    </Form.Select>
   
  </div>

  <Button variant="outline-primary" 
    onClick={
      async()=>
      { const cart={IdUsu:shopping.Cart.IdUsu}
     
         let cid =  await GetIdUsu(cart);
         
        let PayShopping = {cid:cid.data,PayTipoPay:formapago,TotalCarro:Total};
          
      const Pay=await  PagoPay(PayShopping);
      console.log(Pay)
          // window.location.reload()
        }}
  >CONFIRMA COMPRA CARRITO</Button>{' '}
  </>
       
      );
};

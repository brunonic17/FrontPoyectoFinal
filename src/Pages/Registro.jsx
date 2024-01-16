import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Registro() {
  return (
    <>
      <h1 className="container text-center">SOY LA PAGINA DE REGISTRO</h1>
      <Form>
        <FormGroup className="mb-3">
      <Form.Label>Nombre</Form.Label>
      <Form.Control
        type="text"
        placeholder="ej: Federico"
        />
</FormGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ej: fede@gmail.com" />
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Registro;

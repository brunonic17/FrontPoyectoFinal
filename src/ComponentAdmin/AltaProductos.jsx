
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

import { PostProducts } from "../FetchAdmin/Products.js";

const Product = {
  IdProduct: "",
  NombreProducto: "",
  Precio: "",
  UltimoPrecio: "",
  Detalle: "",
  Categoria: "",
};

const Products = () => {
  return (
    <div className="mt-4">
      <h1>Agregar Producto</h1>
      <div className=" bg-body-secondary">
        <Formik
          initialValues={Product}
          onSubmit={async (values) => {
            const Products0 = JSON.parse(localStorage.getItem("Products"));
            
            if (Products0.data === undefined) {
              const IdAterior = Products0[Products0.data.length - 1].IdProduct;
              const IdNuevo = parseInt(IdAterior) + 1;
              values.IdProduct = IdNuevo;
              console.log(values.IdProduct);
              const Post = await PostProducts(values);
              console.log(Post.data);
              const Id = Post.data._id;
              localStorage.setItem("Id", JSON.stringify(Id));
            } else {
              values.IdProduct = 1;
              const Post = await PostProducts(values);
              console.log(Post.data);
            }
            console.log(Products0)
          }}
        >
          {({ values }) => (
            <Form className=" d-flex flex-column container bg-warning">
              <label htmlFor="NombreProducto">NombreProducto</label>
              <Field
                className=" w-50"
                name="NombreProducto"
                placeholder="Alpargata Lisa"
                type="text"
              />

              <label htmlFor="Precio">Precio</label>
              <Field
                className=" w-50"
                name="Precio"
                placeholder="$99"
                type="number"
              />

              <label htmlFor="Detalle">Detalle</label>
              <Field className=" w-50" name="Detalle" as="textarea" />

              <label htmlFor="Categoria">Categoria</label>
              <Field
                className=" w-50"
                name="Categoria"
                placeholder="Alpargata"
                component="select"
              >
                <option disabled>Seleccione una categoria</option>
                <option value="Boina">Boina</option>
                <option value="Alpargata">Alpargata</option>
                <option value="Bombacha">Bombacha</option>
              </Field>
              <button type="button" className="btn btn-success w-50 mt-4">Enviar</button>
              {/* <button className= " w-50 mt-4 btn btn-oline-black" type="submit">Submit</button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Products;
{
  /* <div>
  <Especific/>
</div>

<div>
  <Image/>
  
</div>


<div>
 <T/>
 </div>  */
}
// await new Promise((r) => setTimeout(r, 500));
// alert(JSON.stringify(values, null, 2));}

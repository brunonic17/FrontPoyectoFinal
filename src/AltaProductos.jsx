

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import T from './ListaProductos.jsx'
import Especific from './AltaEspecificaciones.jsx';
import { GetProducts,PostProducts,GetProduct,GetCompleteProduct} from './fetch/Products.js';


// const Products1= await GetProduct();
// console.log(Products1)

const Products0= await GetProducts();
console.log(Products0.data);

const Ids={id:'65e66c5eea9d3d7580646eae',id2:'65e66ccbea9d3d7580646eb3'};
const completeProduct=await GetCompleteProduct(Ids);
console.log(completeProduct.data)


// const OneProduct={NombreProducto:"Bombacha",Precio:2020,Detalle:"Perfecto a la medida",Categoria:"Bombacha",IdProduct:"1"};
// const Post= await PostProducts(OneProduct);
// console.log(Post.data);









const Product = {
  
    IdProduct: '' ,
    NombreProducto: '' ,
    Precio: '' ,
    UltimoPrecio: '' ,
    Detalle: '' ,
    Categoria: '',
    UrlImagen: [{file:''}]
};




const Products = () => (
 <> <div>
    <h1>Agregar Producto</h1>
    <Formik
      initialValues={Product}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
 
      {({ values }) => (
        <Form>
        <label htmlFor="NombreProducto">NombreProducto</label>
        <Field name="NombreProducto" placeholder="Alpargata Lisa" type= "text"/>

        <label htmlFor="Precio">Precio</label>
        <Field name="Precio" placeholder="$99" type= "number"/> 

        <label htmlFor="Detalle">Detalle</label>
        <Field name="Detalle" as="textarea"   />

        <label htmlFor="Categoria">Categoria</label>
        <Field name="Categoria" placeholder="Alpargata" component="select" >
              <option value="Boina">Boina</option>
             <option value="Alpargata">Alpargata</option>
             <option value="Bombacha">Bombacha</option>
             
             </Field>
        <FieldArray name="UrlImagen">
          {({ insert, remove, push }) => (
            <div>
              {values.UrlImagen.length > 0 &&
                values.UrlImagen.map((UrlImagen, index) => (
                  <div className="row" key={index}>
                    <div className="col">
                      <label htmlFor={`UrlImagen.${index}.file`}>file</label>
                      <Field
                        name={`UrlImagen.${index}.file`}
                        type="file"
                      />
                     
                      <ErrorMessage
                        name={`UrlImagen.${index}.file`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                    
                    <div className="col">
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => remove(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              <button
                type="button"
                className="secondary"
                onClick={() => push({
                              
                })}
              >
                Agregar Imagen
              </button>
            </div>
          )}
        </FieldArray>

        <button type="submit" >
          Submit
        </button>
      </Form>
      )}
    </Formik>
  </div>

<div>
  <Especific/>
</div>


<div>
 <T/>
 </div>
 </> 
);
 

 
 export default Products;

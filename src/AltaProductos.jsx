

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import T from './ListaProductos.jsx'
import Especific from './AltaEspecificaciones.jsx';
import {Image} from './Altaimagen.jsx';
import { GetProducts,PostProducts,GetProduct,GetCompleteProduct,PostEspecificaciones} from './fetch/Products.js';


// const Products1= await GetProduct();
// console.log(Products1)

// const Products0= await GetProducts();
// console.log(Products0.data);

// const Ids={id:'65e66c5eea9d3d7580646eae',id2:'65e66ccbea9d3d7580646eb3'};
// const completeProduct=await GetCompleteProduct(Ids);
// console.log(completeProduct.data)

// const Especificacion= await PostEspecificaciones();

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
  <Image/>
  
</div>


<div>
 <T/>
 </div>
 </> 
);
 
 
 export default Products;

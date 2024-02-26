

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import T from './ListaProductos.jsx'

const Product = {
  
    IdProduct: '' ,
    NombreProducto: '' ,
    Precio: '' ,
    UltimoPrecio: '' ,
    Detalle: '' ,
    Categoria: '',
    UrlImagen:'',
    Epecificaciones: [
      {
        Color: '',
        CodColor:'',
        Talle: '',
        Stock: '',
        Fecha: '',
        CodProducto: '',
       
      }]
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
        <Field name="Detalle"  type="text" />

        <label htmlFor="Urlimage">UrlImage</label>
        <Field name="Urlimage"  type="file" />

        <label htmlFor="Categoria">Categoria</label>
        <Field name="Categoria" placeholder="Alpargata" component="select" >
              <option value="Boina">Boina</option>
             <option value="Alpargata">Alpargata</option>
             <option value="Bombacha">Bombacha</option>
             
             </Field>
        <FieldArray name="Epecificaciones">
          {({ insert, remove, push }) => (
            <div>
              {values.Epecificaciones.length > 0 &&
                values.Epecificaciones.map((Epecificaciones, index) => (
                  <div className="row" key={index}>
                    <div className="col">
                      <label htmlFor={`Epecificaciones.${index}.Color`}>Color</label>
                      <Field
                        name={`Epecificaciones.${index}.Color`}
                        placeholder="Azul"
                        type="text"
                      />
                     
                      <ErrorMessage
                        name={`Epecificaciones.${index}.Color`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                    <div className="col">
                    <label htmlFor={`Epecificaciones.${index}.CodColor`}>CodColor</label>
                    <Field
                        name={`Epecificaciones.${index}.CodColor`}
                        placeholder="asd123"
                        type="text"
                      />
                      <Field
                        name={`Epecificaciones.${index}.CodColor`}
                        type="color"
                      />
                       <ErrorMessage
                        name={`Epecificaciones.${index}.Color`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`Epecificaciones.${index}.Talle`}>Talle</label>
                      <Field
                        name={`Epecificaciones.${index}.Talle`}
                        placeholder="38"
                        type="text"
                      />
                      <ErrorMessage
                        name={`Epecificaciones.${index}.Talle`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`Epecificaciones.${index}.Stock`}>Stock</label>
                      <Field
                        name={`Epecificaciones.${index}.Stock`}
                        placeholder="4"
                        type="number"
                      />
                      <ErrorMessage
                        name={`Epecificaciones.${index}.Stock`}
                        component="div"
                        className="field-error"
                      />
                    </div> 
                    <div className="col">
                      <label htmlFor={`Epecificaciones.${index}.Fecha`}>Fecha</label>
                      <Field
                        name={`Epecificaciones.${index}.Fecha`}
                        placeholder="12-02-2024"
                        type="date"
                      />
                      <ErrorMessage
                        name={`Epecificaciones.${index}.Fecha`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`Epecificaciones.${index}.CodProducto`}>CodProducto</label>
                      <Field
                        name={`Epecificaciones.${index}.CodProducto`}
                        placeholder="asd23"
                        type="text"
                      />
                      <ErrorMessage
                        name={`Epecificaciones.${index}.CodProducto`}
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
                  Color: '',
                  Talle: '',
                  Stock: '',
                  Fecha: '',
                  CodProducto: ''
                })}
              >
                Add Especificacion
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
 <T/>
 </div>
 </> 
);
 

 
 export default Products;

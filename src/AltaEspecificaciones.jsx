
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { GetProducts,PostProducts,GetProduct,GetCompleteProduct,PostEspecificaciones} from './fetch/Products.js';




const Especificaciones={
    Color: '',
    CodColor:'',
    Talle: '',
    Stock: '',
    Fecha: '',
    CodProducto: '',
    id:''
   };


   const Especific = () => (
    <> <div>
       <h3>Agregar Especificacion</h3>
       <Formik
         initialValues={Especificaciones}
         onSubmit={async (values) => {
          const Id=JSON.parse(localStorage.getItem('Id'));
          values.id=Id;
          const PostE=await PostEspecificaciones(values)
          console.log(PostE.data);
          //  await new Promise((r) => setTimeout(r, 500));
          //  alert(JSON.stringify(values, null, 2));
         }}
       >
    
         {({ values }) => (
           <Form>
           <label htmlFor="Color">Color</label>
           <Field name="Color" placeholder="Azul" type= "text"/>
   
           <label htmlFor="CodColor">CodColor</label>
           <Field name="CodColor"  type= "text"/>
           <Field name="CodColor"  type= "color"/> 
   
           <label htmlFor="Talle">Talle</label>
           <Field name="Talle"  type="text" />
   
           <label htmlFor="Stock">Stock</label>
           <Field name="Stock"  type="text" />

           <label htmlFor="Fecha">Fecha</label>
           <Field name="Fecha"  type="Date" />

           <label htmlFor="CodProducto">CodProducto</label>
           <Field name="CodProducto"  type="tex" />
         
   
           <button type="submit" >
             Submit
           </button>
         </Form>
         )}
       </Formik>
     </div>
   
    </> 
   );

export default Especific
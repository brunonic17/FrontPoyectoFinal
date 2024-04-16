
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray ,useFormik,FormikProvider} from 'formik';
import React, {Component,useState} from 'react';
import PreviewImagen from './RenderImagen.jsx';
import {UploadImage} from './fetch/Products.js'





function Image() {
  const picture= useFormik({
    initialValues:{
      imagenes:""
    },
    onSubmit:()=>{
      async(values)=>{
      const Id=JSON.parse(localStorage.getItem('Id'));
      const image=  await UploadImage(Id,values);
      console.log(picture.values)
      console.log(image)
      }
  }})
   
  return(
    <>
  <div className='Image'>
    <form onSubmit={picture.handleSubmit}>
    <input
    type="file"
    name="imagenes"
    onChange={(e)=>picture.setFieldValue("imagenes",e.target.files[0])}   />
    <button type='Submit'> Cargar Imagen</button>
</form>
<div>
{picture.values.imagenes && <PreviewImagen file={picture.values.imagenes} />}
</div>
  </div>
  </>
   )
 
}


  export {Image}
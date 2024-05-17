
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray ,useFormik,FormikProvider} from 'formik';
import React, {Component,useState} from 'react';
import PreviewImagen from './RenderImagen.jsx';
import {UploadImage} from './fetch/Products.js'



function Image() {
  const picture= useFormik({
    initialValues:{
      file:""
    },
    onSubmit:async(values)=>{
      const FormD=new FormData();
      const Id=JSON.parse(localStorage.getItem('Id'));
     FormD.append('_id',Id);
     FormD.append('file',picture.values.file);
      const image=await  UploadImage(FormD);
      console.log(picture.values.file)
      console.log(image)
    
  }})
   
  return(
    <>
  <div className='Image'>
    <form onSubmit={picture.handleSubmit}>
    <input
    type="file"
    name="file"
    onChange={(e)=>picture.setFieldValue("file",e.target.files[0])}   />
    <button type='Submit'> Cargar Imagen</button>
</form>
<div>
{picture.values.file && <PreviewImagen file={picture.values.file} />}
</div>
  </div>
  </>
   )
 
}


  export {Image}
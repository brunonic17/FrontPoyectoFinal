
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray ,useFormik,FormikProvider} from 'formik';
import React, {Component,useState} from 'react';
import PreviewImagen from './RenderImagen.jsx';
import {UploadImage} from '../FetchAdmin/Products.js'



function Image(Id) {
  const picture= useFormik({
    initialValues:{
      file:""
    },
    onSubmit:async(values)=>{
      console.log(Id.values.element)
    const _id=Id.values.element
      const FormD=new FormData();
     FormD.append('_id',_id);
     FormD.append('file',picture.values.file);
      const image=await  UploadImage(FormD);
      console.log(picture.values.file)
      console.log(image)
      console.log(FormD)
    
  }})
   
  return(
    <>
  <div className='Image'>
    <form onSubmit={picture.handleSubmit}>
    <input
    type="file"
    name="file"
    onChange={(e)=>picture.setFieldValue("file",e.target.files[0])}   />
    <div>
{picture.values.file && <PreviewImagen file={picture.values.file} />}
</div>
    <button type='Submit'> Cargar Imagen</button>
</form>

  </div>
  </>
   )
 
}


  export default Image
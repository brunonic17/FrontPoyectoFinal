
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray ,useFormik,FormikProvider} from 'formik';
import React, {Component,useState} from 'react';
import Dropzone,{useDropzone} from 'react-dropzone';
import PreviewImagen from './RenderImagen.jsx';


// const initialValues = {
//     _id:'',
//     Imagenes: [
//       {
//         file:'',
//       },
//     ],
//   };
  
//   const ImputImagen = () => (
//     <div>
//       <h3>Subir Imagen</h3>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={async (values) => {
//           await new Promise((r) => setTimeout(r, 500));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         {({ values }) => (
//           <Form>
//             <FieldArray name="Imagenes">
//               {({ insert, remove, push }) => (
//                 <div>
//                   {0 < values.Imagenes.length <= 4 &&
//                     values.Imagenes.map((Imagen, index) => (
//                       <div className="row" key={index}>
//                         <div className="col">
//                           <label htmlFor={`Imagenes.${index}.file`}>Archivo</label>
//                           <Field
//                             name={`Imagenes.${index}.file`}
//                            onChange={(e)=>ImputImagen.setFieldValue(`Imagenes.${index}.file`, e.target.files[0])}
//                             type="file"
//                           />
//                           <ErrorMessage
//                             name={`Imagenes.${index}.file`}
//                             component="div"
//                             className="field-error"
//                           />
//                         </div>
                        
//                         <div className="col">
//                           <button
//                             type="button"
//                             className="secondary"
//                             onClick={() => remove(index)}
//                           >
//                             X
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   <button
//                     type="button"
//                     className="secondary"
//                     onClick={() => push({ file: ''})}
//                   >
//                     Agregar Imagen
//                   </button>
//                 </div>
//               )}
//             </FieldArray>
//             <button type="submit">Subir</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );


// class Basic extends Component {
//   constructor() {
//     super();
//     this.onDrop = (files) => {
//       this.setState({files})
//     };
//     this.state = {
//       files: []
//     };
//   }

//   render() {
//     const files = this.state.files.map(file => (
//       <li key={file.name}>
//         {file.name} - {file.size} bytes
//       </li>
//     ));

//     return (
//       <Dropzone onDrop={this.onDrop}>
//         {({getRootProps, getInputProps}) => (
//           <section className="container">
//             <div {...getRootProps({className: 'dropzone'})}>
//               <input {...getInputProps()} />
//               <p>Drag 'n' drop some files here, or click to select files</p>
//             </div>
//             <aside>
//               <h4>Files</h4>
//               <ul>{files}</ul>
//             </aside>
//           </section>
//         )}
//       </Dropzone>
//     );
//   }
// }

// <Basic />


// function Plugin(props) {
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
//     getFilesFromEvent: event => myCustomFileGetter(event)
//   });

//   const files = acceptedFiles.map(f => (
//     <li key={f.name}>
//       {f.name} has <strong>myProps</strong>: {f.myProp === true ? 'YES' : ''}
//     </li>
//   ));

//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }

// async function myCustomFileGetter(event) {
//   const files = [];
//   const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

//   for (var i = 0; i < fileList.length; i++) {
//     const file = fileList.item(i);
    
//     Object.defineProperty(file, 'myProp', {
//       value: true
//     });

//     files.push(file);
//   }

//   return files;
// }

// <Plugin />



// function Image() {
//   const picture= useFormik({
//     initialValues:{
//       imagenes:""
//     },
//     onSubmit:()=>{
//       console.log(picture.values)
//   }})
   
//   return(
//     <>
//   <div className='Image'>
//     <form onSubmit={picture.handleSubmit}>
//     <input
//     type="file"
//     name="imagenes"
//     onChange={(e)=>picture.setFieldValue("imagenes",e.target.files[0])}   />
//     <button type='Submit'> Cargar Imagen</button>
// </form>
// <div>
// {picture.values.imagenes && <PreviewImagen file={picture.values.imagenes} />}
// </div>
//   </div>
//   </>
//    )
 
// }

function Image() {
  const picture= useFormik({
    initialValues:{
      imagenes:[]
    },
    onSubmit:()=>{
      console.log(picture.values)
  }})
   
  return(
    <>
      <div className='Image'>
      <FormikProvider value={picture}>
        <form onSubmit={picture.handleSubmit}>

    {/* <input
    type="file"
    name="imagenes"
    onChange={(e)=>picture.setFieldValue("imagenes",e.target.files[0])}   /> */}
    
      <FieldArray
          name="imagenes"
          render={(arrayHelpers) => (
            <div>
              {picture.values.imagenes.map((imagen, index) => (
                <div key={index}>
                  {/** both these conventions do the same  */}

                  <input
                   type="file"
                   name={`imagenes.${index}.imagen`}
                   value={picture.values.imagenes[index].imagen}
                  onChange={(e)=>picture.imagenes[index].setFieldValue(`imagen`,e.target.files[0])}   />
                
                 
                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                   Quitar imagen
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => arrayHelpers.push({ imagen:""})}
              >
                Agregar imagen
              </button>
            </div>
          )}/>

      <button type='Submit'> Cargar Imagen</button>
    </form>

      
</FormikProvider>
<div>
{/* {picture.values.imagenes && <PreviewImagen file={picture.values.imagenes} />} */}
</div>
  </div>
  </>
   )
 
}
  export {Image}
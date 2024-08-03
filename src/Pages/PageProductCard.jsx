import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import "./CSS/PageProductCard.css";
import { getEspecificaciones } from "../api/products";
import { PostShoppings } from "../fetch/shopping";
import { useNavigate, useParams } from "react-router-dom";
import spinnerLoading from "../assets/img/spinnerLoading.svg";
// import { Form, FormCheck } from "react-bootstrap";

const PageProductCard = () => {
  const { productCard, getProduct } = useProducts();
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [imgs, setImgs] = useState("");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }

    setTimeout(() => {
      setSpinner(false);
    }, 2000);

    // if (!isAuthenticated) navigate("/login");
  }, []);

  useEffect(() => {
    getProduct();
    console.log(productCard);
    // console.log(productCard.UrlImagen[0]);
  }, [productCard]);

  const onSubmit = handleSubmit(async (data) => {
    if(user=== null) navigate("/login")
    data.IdProduct = productCard.IdProduct;
    data.IdUsu = user.id;
    const res = await getEspecificaciones(data);

    data.eid = res._id;

    const resshopping = await PostShoppings(data);
    console.log(data, res._id, resshopping);
    // console.log(await getProductsRequest())
  });

  return (
    <>
      {spinner ? (
        <img src={spinnerLoading} />
      ) : (
        <div className="productDisplay container text-center  ">
          <h1>{productCard.NombreProducto}</h1>
          <div className="productDisplayLeft ">
            <div className=" productDisplayImgList ">
              {productCard.UrlImagen.map((img, index) => {
                return (
                  <div key={index}>
                    <btn
                      className="btnImg"
                      onClick={() => {
                        setImgs(img);
                      }}
                    >
                      <img src={img} alt={`imagen ${index}`} />
                    </btn>
                  </div>
                );
              })}
            </div>

            <figure className="productDisplayImg">
              <img className="porductDisplayMainImg" src={imgs} alt="" />
            </figure>
            <div className="porductDisplayRight">
              <h1>{productCard.NombreProducto}</h1>

          <div className="productDisplayRightPriceLast">
            ${productCard.UltimoPrecio}
          </div>
          <div className="productDisplayRightPrice">${productCard.Precio}</div>
          <div className="productDisplayRightDescription">
            {productCard.Detalle}
          </div>
          <div className="productDisplayRightTalle">
            <h3>Talle</h3>
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("talle")}
            >
              {productCard.Especificaciones.map((t, index) => {
                // <option htmlFor="">Elementos</option>
                return (
                  <>
                    <option key={index} name="talle" className={index}>
                      {t.id.Talle}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="productDisplayRightCantidad">
            <h3>Cantidad</h3>
            <input
              type="number"
              name="cantidad"
              min={1}
              max={10}
              {...register("cantidad")}
            />
          </div>
          <div className="productDisplayRightColor">
            <h3>Seleccione Color</h3>
            <div className="form-check d-flex gap-5">
              {productCard.Especificaciones.map((c) => {
                return (
                  <>
                    <div>
                      <input
                        type="radio"
                        id="huey"
                        name="color"
                        value={c.id.Color}
                        checked
                        {...register("color")}
                      />
                      <label htmlFor={c.id.Color}>{c.id.Color}</label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

              <div className="productDisplayRightTalleBtn">
                <btn onClick={onSubmit}>AGREAGAR AL CARRITO</btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageProductCard;
// import { useEffect, useState } from "react";
// import { useProducts } from "../Context/ProductsContext";
// import { useForm } from "react-hook-form";
// import { useAuth } from "../Context/AuthContext";
// import "./CSS/PageProductCard.css";
// import { getEspecificaciones, getProductsRequest } from "../api/products";
// import { PostShoppings } from "../fetch/shopping";
// import { useNavigate } from "react-router-dom";
// // import { Form, FormCheck } from "react-bootstrap";

// const PageProductCard = () => {
//   const { productCard, getProduct } = useProducts();
//   const { register, handleSubmit } = useForm();
//   const { user, isAuthenticated } = useAuth();
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     setImgs(primeraimg);
//     getProduct();
//     if(!isAuthenticated) navigate("/login")
//     // console.log(productCard);
//     // console.log(productCard.UrlImagen[0]);
//   }, [productCard]);

//   const primeraimg = productCard.UrlImagen;
//   const [imgs, setImgs] = useState(primeraimg);

//   const onSubmit = handleSubmit(async (data) => {
//     if(!isAuthenticated) navigate("/login")
//     data.IdProduct = productCard.IdProduct;
//     data.IdUsu = user.id;
//       const res = await getEspecificaciones(data);

//     data.eid=res._id;

//     const resshopping= await PostShoppings(data);
//       console.log(data, 
//         res._id, 
//         resshopping
//       );
//       // console.log(await getProductsRequest())
    
//   });

//   return (
//     <div className="productDisplay container text-center  ">
//       <h1>{productCard.NombreProducto}</h1>
//       <div className="productDisplayLeft ">
//         <div className=" productDisplayImgList ">
//           {productCard.UrlImagen.map((img, index) => {
//             return (
//               <div key={index}>
//                 <btn
//                   onClick={() => {
//                     setImgs(img);
//                   }}
//                 >
//                   <img src={img} alt={`imagen ${index}`} />
//                 </btn>
//               </div>
//             );
//           })}
//         </div>

//         <figure className="productDisplayImg">
//           <img className="porductDisplayMainImg" src={imgs} alt="" />
//         </figure>
//         <div className="porductDisplayRight">
//           <h1>{productCard.NombreProducto}</h1>

//           <div className="productDisplayRightPriceLast">
//             ${productCard.UltimoPrecio}
//           </div>
//           <div className="productDisplayRightPrice">${productCard.Precio}</div>
//           <div className="productDisplayRightDescription">
//             {productCard.Detalle}
//           </div>
//           <div className="productDisplayRightTalle">
//             <h3>Talle</h3>
//             <select
//               className="form-select"
//               aria-label="Default select example"
//               {...register("talle")}
//             >
//               {productCard.Especificaciones.map((t, index) => {
//                 // <option htmlFor="">Elementos</option>
//                 return (
//                   <>
//                     <option key={index} name="talle" className={index}>
//                       {t.id.Talle}
//                     </option>
//                   </>
//                 );
//               })}
//             </select>
//           </div>
//           <div className="productDisplayRightCantidad">
//             <h3>Cantidad</h3>
//             <input
//               type="number"
//               name="cantidad"
//               min={1}
//               max={20}
//               {...register("cantidad")}
//             />
//           </div>
//           <div className="productDisplayRightColor">
//             <h3>Seleccione Color</h3>
//             <div className="form-check d-flex gap-5">
//               {productCard.Especificaciones.map((c) => {
//                 return (
//                   <>
//                     <div>
//                       <input
//                         type="radio"
//                         id="huey"
//                         name="color"
//                         value={c.id.Color}
//                         checked
//                         {...register("color")}
//                       />
//                       <label htmlFor={c.id.Color}>{c.id.Color}</label>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="productDisplayRightTalleBtn">
//             <btn onClick={onSubmit}>AGREAGAR AL CARRITO</btn>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageProductCard;
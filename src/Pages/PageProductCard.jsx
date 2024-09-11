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
  const { user, isAuthenticated } = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [imgs, setImgs] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [spinnerColors, setSpinnerColors] = useState(false);
  const [talle, setTalle] = useState(0);
  const [talleOk, setTalleOk] = useState(true);

  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }

    const time = setTimeout(() => {
      setSpinner(false);
    }, 2000);
    return () => clearTimeout(time);

    // if (!isAuthenticated) navigate("/login");
  }, []);

  useEffect(() => {
    getProduct();

    const timer = setTimeout(() => {
      setImgs(productCard.UrlImagen[0]);
    }, 2000);
    return () => clearTimeout(timer);
    
  }, [productCard, talle]);

  useEffect(() => {
 

    const timerColor = setTimeout(() => {
      setTalleOk(false);
      setSpinnerColors(false);
    }, 2000);
    return () => clearTimeout(timerColor);
    
  }, [talle]);

  const onSubmit = handleSubmit(async (data) => {
    // if (!isAuthenticated) navigate("/login");
    // data.IdProduct = productCard.IdProduct;
    // data.IdUsu = user.id;

    // const res = await getEspecificaciones(data);

    // data.eid = res._id;
    // const resshopping = await PostShoppings(data);
    // console.log(data, res, res._id, resshopping);
    // console.log(await getProductsRequest())
    console.log(data);
  });
  const cambioIndexColor = (colorIndex) => {
    setTalle(colorIndex);
    setTalleOk(true);
    setSpinnerColors(true);

    console.log(colorIndex);
  };
  // console.log(productCard.Especificaciones[0].id.Color);
  console.log(talle);
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
              <div className="productDisplayRightPrice">
                ${productCard.Precio}
              </div>
              <div className="productDisplayRightDescription">
                {productCard.Detalle}
              </div>
              <div className="productDisplayRightTalle">
                <h3>Talle</h3>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("talle")}
                  // onChange={() => {

                  // }}
                >
                  <option value="" selected disabled>
                    Seleccione su talle
                  </option>

                  {productCard.Especificaciones.map((t, index) => {
                    return (
                      <>
                        <option
                          onClick={() => {
                            cambioIndexColor(index);
                          }}
                          key={t.id}
                          name="talle"
                          value={t.id.Talle}
                        >
                          <button key={t.id.Stock}>{t.id.Talle}</button>
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="productDisplayRightColor">
                {spinnerColors ? (
        <img src={spinnerLoading} />
                ) : (
                  <div className="form-check d-flex gap-5">
                    <h3>Seleccione un Color</h3>
                    <div>
                      <input
                        type="radio"
                        id="huey"
                        name="color"
                        value={productCard.Especificaciones[talle].id.Color}
                        {...register("color")}
                      />
                      <label
                        htmlFor={productCard.Especificaciones[talle].id.Color}
                      >
                        {productCard.Especificaciones[talle].id.Color}
                      </label>
                    </div>
                  </div>
                )}

                {/* <div>
    <input type="radio" id="dewey" name="color" value="dewey"  disabled {...register("color")} />
    <label htmlFor="dewey">Dewey</label>
  </div>

  <div>
    <input type="radio" id="louie" name="color" value="louie"  {...register("color")} disabled/>
    <label htmlFor="louie">Louie</label>
  </div> */}

                {/* {productCard.Especificaciones.map((c, index) => {
                    return (
                      <>
                        <div>
                          <input
                            type="radio"
                            id="huey"
                            name="color"
                            value={c.id.Color}
                            
                            {...register("color")}
                          />
                          <label htmlFor={c.id.Color[index]}>
                            {c.id.Color}
                          </label>
                        </div>
                      </>
                    );
                  })} */}

                <div className="productDisplayRightCantidad">
                  <h3>Cantidad</h3>
                  <input
                    type="number"
                    name="cantidad"
                    min={1}
                    max={productCard.Especificaciones.map((c) => {
                      return c.id.Stock;
                    })}
                    {...register("cantidad")}
                  />
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

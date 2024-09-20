import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import "./CSS/PageProductCard.css";
import { getEspecificaciones } from "../api/products";
import { PostShoppings } from "../fetch/shopping";
import { useNavigate, useParams } from "react-router-dom";
import spinnerLoading from "../assets/img/spinnerLoading.svg";
import { Toaster, toast } from "sonner";
// import { Form, FormCheck } from "react-bootstrap";

const PageProductCard = () => {
  const { productCard, getProduct,IncrementQty, } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: setErrorsEspecificaciones } = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const [imgs, setImgs] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [spinnerColors, setSpinnerColors] = useState(true);
  const [talle, setTalle] = useState(0);
  const [talleOk, setTalleOk] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }

    const time = setTimeout(() => {
      setSpinner(false);
    }, 1000);
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
    }, 500);
    return () => clearTimeout(timerColor);
  }, [talle]);
  const alertas = () => {
    return toast.success("Se agrego a tu carrito");
  };

  const onSubmit = handleSubmit(async (data) => {
    // if (!isAuthenticated) navigate("/login");
    data.IdProduct = productCard.IdProduct;
    data.IdUsu = user.id;

    const res = await getEspecificaciones(data);

    data.eid = res._id;
    const resshopping = await PostShoppings(data);
    IncrementQty();
    alertas()
    // console.log(data, res, res._id, resshopping);
    // console.log(await getProductsRequest())

    console.log(data);
  });
  const cambioIndexColor = (colorIndex) => {
    setTalle(colorIndex);
    setTalleOk(true);
    setSpinnerColors(true);
    const timerColor = setTimeout(() => {
      setSpinnerColors(false);
    }, 500);
    return () => clearTimeout(timerColor);
  };
  console.log(spinnerColors);
  // console.log(productCard.Especificaciones[0].id.Color);
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
                {/* {setErrorsEspecificaciones !== "" && (
                  <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                    {setErrorsEspecificaciones}
                  </span>
                )}*/}
                <select
                  className="form-select"
                  aria-label="Default select example"
                  // {...register("talle")}
                  name="talle"
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

                {/* {errors.talle && (
                  <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                    {errors.talle.message}
                  </span>
                )} */}
              </div>

              <div className="productDisplayRightColor">
                <h3>Seleccione un Color</h3>
                {spinnerColors ? (
                  <img src={spinnerLoading} className="spinner" />
                ) : ( 
                  <div className=" d-flex flex-column ">
                    <div>
                      <input
                        type="radio"
                        id="huey"
                        // name="color"
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
      <Toaster
      theme="light"
      position="top-center"
      duration={5000}
      toastOptions={{
        style: { background: "green" },
        className: "my-toast",
      }}
    />
    </>
  );
};

export default PageProductCard;


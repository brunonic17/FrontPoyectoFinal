import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import "./CSS/PageProductCard.css";
import { getEspecificaciones } from "../api/products";
import { PostShoppings } from "../fetch/shopping";
import { useParams } from "react-router-dom";
import spinnerLoading from "../assets/img/spinnerLoading.svg";
import { Toaster, toast } from "sonner";
import { Comentarios } from "../Components/Comentarios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import { Form, FormCheck } from "react-bootstrap";

const PageProductCard = () => {
  const { productCard, getProduct, IncrementQty } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const params = useParams();
  // const navigate = useNavigate();
  const [imgs, setImgs] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [spinnerColors, setSpinnerColors] = useState(true);
  const [spinnerCantidad, setSpinnerCantidad] = useState(false);
  const [talle, setTalle] = useState();
  const [talleDuplicado, setTalleDuplicado] = useState([]);
  const [talleOk, setTalleOk] = useState(false);
  const [quantityMax, setQuantityMax] = useState([]);
  const [color, setColor] = useState("");
  const { user } = useAuth();
  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }

    const time = setTimeout(() => {
      setSpinner(false);
    }, 2500);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgs(productCard.UrlImagen[0].secure_url);
    }, 2000);
    return () => clearTimeout(timer);
  }, [productCard]);

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
    data.IdProduct = productCard.IdProduct;

    data.IdUsu = user.id;
    data.talle = talle;

    const res = await getEspecificaciones(data);

    data.eid = res._id;
    await PostShoppings(data);
    IncrementQty();
    alertas();
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
  console.log(talle);

  const quantityMaxCantidad = (color) => {
    setColor(color);
    setSpinnerCantidad(true);

    productCard.Especificaciones.find((elem) => {
      if (elem.id.Color === color) {
        setQuantityMax(elem.id.Stock);
      }
    });
    const timerColor = setTimeout(() => {
      setSpinnerCantidad(false);
    }, 500);
    return () => clearTimeout(timerColor);
  };
  // console.log(spinnerColors);

  // console.log(talleDuplicado);
  let talleD = [];
  let arrayColors = [];
  // console.log(talle);
  return (
    <>
      {spinner ? (
        <>
          {/* // <img src={spinnerLoading} /> */}
          <div className="productDisplay container text-center mt-3">
            <div className=" d-flex  justify-content-around">
              <figure className="productDisplayImg">
                <Skeleton width={360} height={350} />
              </figure>
              <div className="porductDisplayRight w-50 ">
                <h1 className="mb-3">
                  <Skeleton width={450} height={50} direction="rtl" />
                </h1>

                <div className="productDisplayRightPriceLast">
                  <Skeleton count={5} />
                </div>
                <div className="productDisplayRightPrice">
                  <Skeleton count={3} />
                </div>

                <div className="productDisplayRightTalle d-flex flex-column gap-2">
                  <Skeleton />

                  <div className="productDisplayRightCantidad">
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="productDisplay container text-center  mt-4 ">
            <div className="productDisplayLeft ">
              <div className=" productDisplayImgList d-flex ">
                {productCard.UrlImagen.map((img, index) => {
                  return (
                    <div key={index} className="btnImg rounded-2 shadow-lg">
                      <btn
                        className="  "
                        onClick={() => {
                          setImgs(img.secure_url);
                        }}
                      >
                        <img src={img.secure_url} alt={`imagen ${index}`} />
                      </btn>
                    </div>
                  );
                })}
              </div>

              <figure className="">
                <img
                  className="porductDisplayMainImg"
                  src={imgs}
                  alt={` ${imgs}`}
                />
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
                <form className="productDisplayRightTalle d-flex flex-column gap-2">
                  <h3>Talle</h3>

                  <select className="form-select">
                    <option selected disabled>
                      Seleccione su talle
                    </option>
                    {/* <option 
                    {...register("talle")}
                    >1</option>
                    <option
                    {...register("talle")}
                    >2</option>
                    <option value="tree">3</option> */}

                    {productCard.Especificaciones.map((t) => {
                      talleDuplicado.push(t.id.Talle);
                    })}
                    {(talleD = [...new Set(talleDuplicado)])}

                    {talleD.map((t) => {
                      return (
                        <option
                          onClick={() => {
                            cambioIndexColor(t);
                            setTalle(t);
                            console.log(t);
                          }}
                          key={t.id}
                          name="talle"
                          // value={talle}
                          // {...register("talle", {
                          //   value: {t},
                          // })}
                        >
                          {t}
                        </option>
                      );
                    })}
                  </select>

                  {errors.talle && (
                    <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                      {console.log(errors.talle.message)}
                    </span>
                  )}

                  <div className="productDisplayRightColor">
                    <h3>Seleccione un Color</h3>
                    {spinnerColors ? (
                      <img src={spinnerLoading} className="spinner" />
                    ) : (
                      <div className=" d-flex ">
                        <div className="d-flex bg-body-secondary w-100 gap-3">
                          {productCard.Especificaciones.find((e) => {
                            if (e.id.Talle === talle) {
                              arrayColors.push(e.id.Color);
                            }
                            // {
                            //   console.log(arrayColors);
                            // }
                          })}
                          {arrayColors.map((e) => {
                            return (
                              <div
                                className=" d-flex justify-content-center align-items-center gap-2"
                                key={e}
                              >
                                {/* <label htmlFor={e}>dd</label> */}
                                <input
                                  type="radio"
                                  // name="color"
                                  onClick={() => {
                                    quantityMaxCantidad(e);
                                  }}
                                  value={e}
                                  {...register("color", {
                                    required: true,
                                    value: { e },
                                    message: "color es requerido",
                                  })}
                                />
                                <label>{e}</label>
                                {errors.color && (
                                  <span className=" fs-4 text-center mt-1  text-white  bg-danger  ">
                                    {console.log(errors.color.message)}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="productDisplayRightCantidad">
                      <h3>Cantidad</h3>
                      {spinnerCantidad ? (
                        <img src={spinnerLoading} className="spinner" />
                      ) : (
                        <input
                          className=" w-50"
                          type="number"
                          placeholder={
                            quantityMax === 0 ? "sin stock" : quantityMax
                          }
                          min={1}
                          max={quantityMax}
                          {...register("cantidad", {
                            required: true,
                            // value: true,
                            message: "cantidad es requerida.",
                            // validate: (value) =>
                            //   value >= 1 && value <= productCard.Especificaciones.map(
                            //     (c) => c.id.Stock
                            //   ) ||
                            //   "La cantidad debe estar entre 1 y el stock disponible",
                          })}
                        />
                      )}

                      {errors.cantidad && (
                        <span className=" fs-4 text-center mt-1  text-white  bg-danger  "></span>
                      )}
                    </div>
                  </div>

                  <div className="productDisplayRightTalleBtn hover">
                    <btn onClick={onSubmit}>AGREAGAR AL CARRITO</btn>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" container mt-3">
            <Comentarios productCard={productCard} />
          </div>
        </>
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

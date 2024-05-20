import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";

import "./CSS/PageProductCard.css";

const PageProductCard = () => {
  const { productCard, getProduct } = useProducts();

  useEffect(() => {
    setImgs(primeraimg);
    getProduct()
    // console.log(primeraimg);
    // console.log(productCard.UrlImagen[0]);
  }, [productCard]);
  const primeraimg = productCard.UrlImagen;
  const [imgs, setImgs] = useState(primeraimg);

  return (
    <div className="productDisplay container text-center  ">
      <h1>{productCard.NombreProducto}</h1>
      <div className="productDisplayLeft ">
        <div className=" productDisplayImgList ">
          {productCard.UrlImagen.map((img, index) => {
            return (
              <div key={index}>
                <btn
                  onClick={() => {
                    setImgs(img);
                  }}>
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

          <div className="productDisplayRightPrice">
            ${productCard.UltimoPrecio}
          </div>
          <div className="productDisplayRightPrice">${productCard.Precio}</div>
          <div className="productDisplayRightDescription">
            {productCard.Detalle}
          </div>
          <div className="productDisplayRightTalle">
            <h3>Talle</h3>
            <select className="form-select" aria-label="Default select example">
              <option selected>Selecione Talle</option>
              {productCard.Especificaciones.map((t, index) => {
                return (
                  <option key={index} value="1">
                    {t.id.Talle}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="productDisplayRightCantidad">
            <h3>Cantidad</h3>
            <input type="number" min={1} max={10} />
          </div>
          <div className="productDisplayRightColor">
            <h3>Seleccione Color</h3>
            <div className="form-check d-flex gap-5">
              {productCard.Especificaciones.map((c, index) => {
                return (
                  <div key={index}>
                    <input
                      className="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label className="form-check-label">{c.id.Color}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="productDisplayRightTalleBtn">
            <btn>AGREAGAR AL CARRITO</btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProductCard;

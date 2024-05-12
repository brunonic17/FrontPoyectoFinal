import { useEffect, useState } from "react";
import { useProducts } from "../Context/ProductsContext";

import "./CSS/PageProductCard.css";


const PageProductCard = () => {
  const { productCard } = useProducts();
const img1 = productCard.UrlImagen[0]
  const [imgs, setImgs] = useState(img1);

  useEffect(() => {
    img1
    console.log(img1)
  }, [productCard]);
  

  return (
    <div className="productDisplay container text-center  ">
      <h1>{productCard.NombreProducto}</h1>
      <div className="productDisplayLeft ">
        <div className=" productDisplayImgList ">
          {productCard.UrlImagen.map((img, index) => {
            return (
              <div key={index} onClick={()=> {
                setImgs(img)
              }}>
                <img src={img} alt={`imagen ${index}`} />
              </div>
            );
          })}
        </div>

        <figure className="productDisplayImg">
          <img
            className="porductDisplayMainImg"
            src={img1 === imgs ? imgs : img1}
            alt={`imagen ${productCard.UrlImagen.indexOf(imgs)} `}
          />
        </figure>
        <div className="porductDisplayRight">
          <h1>{productCard.NombreProducto}</h1>
          <div className="productDisplayRightPrices">
            <div className="productDisplayRightPrice">
              ${productCard.Precio}
            </div>
            <div className="productDisplayRightDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              maiores necessitatibus excepturi dolore.
            </div>
            <div className="productDisplayRightTalle">
              <h1>Seleccione un talle</h1>
              {/* <Form.Select aria-label="Default select example">
                {productCard.Especificaciones.map((el) => {
                  // console.log(el.id.Talle)
                  return <option>{el.id.Talle}</option>;
                })}
              </Form.Select> */}
            </div>
          </div>
        </div>

        <div>
          <button>AGREAGAR AL CARRITO</button>
        </div>
      </div>
    </div>
  );
};

export default PageProductCard;

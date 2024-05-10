import { useEffect } from "react";
import { useProducts } from "../Context/ProductsContext";

const PageProductCard = (product) => {

  const {productCard}  = useProducts()
  useEffect(() => {
 
    console.log(productCard);
  }, []);

  return  <div>
  <div className="container-products ">
    <div className=" card-product ">
      <figure className="container-img">
        <img
          className=""
          src=""
          alt="NombreProducto"
        />
      </figure>

      <div className="info-product">
        <h3>{product.NombreProducto} </h3>
      </div>
      <div className="btnIcon">
        <div className=" col-4 ">
          <p className="price">$ {product.Precio} </p>
        </div>
        <div className=" d-flex col-8 justify-content-end g-3 ">
         
          <button
      className="text-white "
      type="submit"
      
      >
     
    </button>
        </div>
      </div>
    </div>
    
  </div>
</div>
};

export default PageProductCard;

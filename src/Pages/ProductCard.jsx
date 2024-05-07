import { Link } from "react-router-dom";
import {  iconofavorito } from "../helpers/iconos";



const PaginaArticulo = ({ product }) => {
  return (
    <div>
      <div className="container-products ">
        <div className=" card-product ">
          <figure className="container-img">
            <img
              className=""
              src={product.UrlImagen}
              alt={product.NombreProducto}
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
              <Link to= {`/productCard/${product._id}`}>Ver Mas</Link>
              <button className="text-white " type="submit">
                {iconofavorito}
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PaginaArticulo;

import { Link } from "react-router-dom";
import {  iconofavorito } from "../helpers/iconos";
import {  toast } from "sonner";
import { useAuth } from "../Context/AuthContext";
import { createFavRequest } from "../api/favorite";
import { useProducts } from "../Context/ProductsContext";


const PaginaArticulo = ({ product }) => {
  const { user } = useAuth();
  const {getProduct}  = useProducts()
  const alertas = () => {
    return toast.success("Debes iniciar sesion");
  };
  const alertas1 = () => {
    return toast.success("Agregaste a favoritos");
  };

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
              <Link to= {`/productCard/${product._id}`}
              onClick={async ()=> {
                const res = await getProduct(product._id)
                
              }}
              >Ver Mas</Link>
              <button
          className="text-white "
          type="submit"
          onClick={async () => {
            if (user === null) {
              alertas();
            } else {
              const product1 = {
                product: product._id,
                user: user.id,
              };

              const res = await createFavRequest(product1);
              console.log(res)
              alertas1();
              

            }
          }}>
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

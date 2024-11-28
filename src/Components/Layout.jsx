import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";
import Footer from "./Footer";
import spinnerLoading from "../assets/img/spinnerLoading.svg";
import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [spinner, setSpinner] = useState(true);
  // const { productShopping, getProductShopping,quantity } = useProducts();
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 500);
  }, []);
  return (
    <div className="contenedor">
      {spinner ? (
        <img src={spinnerLoading} />
      ) : (
        <>
          <header className="sticky-top">
            <NavBarEx />
           
          </header>
          <main className=" container">
            
          <Outlet />
          </main>

          <footer className=" bg-body-secondary">
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
};

export default Layout;

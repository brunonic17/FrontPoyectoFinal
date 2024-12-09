import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";
import Footer from "./Footer";
// import spinnerLoading from "../assets/img/spinnerLoading.svg";



// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  
  // const { productShopping, getProductShopping,quantity } = useProducts();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSpinner(false);
  //   }, 500);
  // }, []);
  return (
    <div className="contenedor">
      
        <>
          <header className="sticky-top">
            <NavBarEx />
           
          </header>
          <main className=" ">
            
          <Outlet />
          </main>

          <footer className=" bg-body-secondary">
            <Footer />
          </footer>
        </>
     
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";
import Footer from "./Footer";
import spinnerLoading from "../assets/img/spinnerLoading.svg";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);
  return (
    <>
      {spinner ? (
        <img src={spinnerLoading} />
      ) : (
        <>
          <header className="sticky-top">
            <NavBarEx />
          </header>
          <Outlet />
      

      <footer>
        <Footer />
      </footer>
      </>
      )}
    </>
  );
};

export default Layout;

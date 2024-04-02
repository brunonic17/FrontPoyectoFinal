import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBarEx />
      </header>

      <Outlet />

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;

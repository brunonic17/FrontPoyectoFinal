import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBarEx />
      </header>

      <Outlet />

      <footer>
        <h1>Soy el footer</h1>
      </footer>
    </>
  );
};

export default Layout;

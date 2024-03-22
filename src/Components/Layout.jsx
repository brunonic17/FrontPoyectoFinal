import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";

const Layout = () => {
  return (
    <>
      <header>
        <NavBarEx />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Soy el footer</h1>
      </footer>
    </>
  );
};

export default Layout;

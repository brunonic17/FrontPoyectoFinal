

import { Outlet } from "react-router-dom";
import NavBarEx from "./NavBarEx";





function Layout() {
  return (
    <>
    <NavBarEx />
    <main>
    <div>
      <Outlet />
      </div>

     
    </main>
    </>
  )
}

export default Layout

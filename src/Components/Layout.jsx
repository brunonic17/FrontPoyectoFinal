

import { Outlet } from "react-router-dom";
import BasicExample from "./NavBarEx";





function Layout() {
  return (
    <>
    <BasicExample />
    <main>
    <div>
      <Outlet />
      </div>

     
    </main>
    </>
  )
}

export default Layout

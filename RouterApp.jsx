import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./src/Context/AuthContext";
import Home from "./src/Pages/Home";
import Nosotros from "./src/Pages/Nosotros";
import Contacto from "./src/Pages/Contacto";
import Productos from "./src/Pages/Productos";
import ModalLoguin from "./src/Components/ModalLoguin";
import ModalRegister from "./src/Components/ModalRegistro";
import Admin from "./src/Pages/Admin";
import { ProtectedRoute } from "./src/Components/ProtectedRoute";
import PaginaError from "./src/Pages/PaginaError";

import ResetPassword from "./src/Pages/ResetPassword";
import ForgotPassword from "./src/Pages/ForgotPassword";
import Layout from "./src/Components/Layout";

// import PaginaLoguin from "./src/Pages/PaginaLoguin";
// import PaginaRegistro from "./src/Pages/PaginaRegistro";

const RouterApp = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
        <Routes>
            <Route index={true} path="/" element={<Home />} />
            <Route path="/login" element={<ModalLoguin />} />
            <Route path="/register" element={<ModalRegister />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/nosotros" element={<Nosotros />} />
              {/* <Route path="/carrito" element={<Carrito />} /> */}
            </Route>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<PaginaError />} />
          </Routes>
        
        </Layout>
         
      </BrowserRouter>
    </AuthProvider>
  );
};

export default RouterApp;
{
  /* <Route path="/loguin" element={<PaginaLoguin />} /> */
}
{
  /* <Route path="/registro" element={<PaginaRegistro />} /> */
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./src/Context/AuthContext";
import NavBarEx from "./src/Components/NavBarEx";
import Home from "./src/Pages/Home"
import Nosotros from "./src/Pages/Nosotros";
import Contacto from "./src/Pages/Contacto";
import PaginaError from "./src/Pages/PaginaError";
import Productos from "./src/Pages/Productos";
// import ModalLoguin from "./src/Components/ModalLoguin";
// import ModalRegister from "./src/Components/ModalRegistro";
import Admin from "./src/Pages/Admin";
// import LoginPage from "./src/Pages/LoginPage";
import { ProtectedRoute } from "./src/Components/ProtectedRoute";
import PaginaLoguin from "./src/Pages/PaginaLoguin";
import PaginaRegistro from "./src/Pages/PaginaRegistro";



const RouterApp = () => {
  
    return (
      <AuthProvider>
        <BrowserRouter>
          <NavBarEx />
  
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<ModalLoguin />} /> */}
            {/* <Route path="/register" element={<ModalRegister />} /> */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Route>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="*" element={<PaginaError />} />
            <Route path="/loguin" element={<PaginaLoguin />} />
            <Route path="/registro" element={<PaginaRegistro />} />
            {/* <Route path="/loguin" element={<LoginPage />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    );
  };
  
export default RouterApp;
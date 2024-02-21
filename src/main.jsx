import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import "../src/index.css";
import PaginaError from "./Pages/PaginaError";
import Productos from "./Pages/Productos";
import { AuthProvider } from "./Context/AuthContext";
import ModalLoguin from "./Components/ModalLoguin";
import ModalRegister from "./Components/ModalRegistro";
import Admin from "./Pages/Admin";
import LoginPage from "./Pages/LoginPage";
import NavBarEx from "./Components/NavBarEx";
import { ProtectedRoute } from "./Components/ProtectedRoute";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Layout />
//       </div>
//     ),
//     errorElement: <PaginaError />,

//     children: [
//       {
//         index: true,
//         element: (
//           <div>
//             <Home />
//           </div>
//         ),
//       },
//       {
//         path: "/nosotros",
//         element: (
//           <div>
//             <Nosotros />
//           </div>
//         ),
//       },
//       {
//         path: "/contacto",
//         element: (
//           <div>
//             <Contacto />
//           </div>
//         ),
//       },
//       {
//         path: "/productos",
//         element: (
//           <div>
//             <Productos />
//           </div>
//         ),
//       },
//       {
//         path: "/registro",
//         element: (
//           <div>
//             <ModalRegister />
//           </div>
//         ),
//       },
//       {
//         path: "/login",
//         element: (
//           <div>
//             <ModalLoguin />
//           </div>
//         ),
//       },
//       {
//         path: "/admin",
//         element: (
//           <div>
//             <Admin />
//           </div>
//         ),
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

const RouterApp = () => {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBarEx />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ModalLoguin />} />
          <Route path="/register" element={<ModalRegister />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Route>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="*" element={<PaginaError />} />
          <Route path="/loguin" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  </React.StrictMode>
);

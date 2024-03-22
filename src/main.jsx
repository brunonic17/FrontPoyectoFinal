import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import RouterApp from "../RouterApp";
import Home from "../src/Pages/Home";
import Nosotros from "../src/Pages/Nosotros";
import Contacto from "../src/Pages/Contacto";
import Productos from "../src/Pages/Productos";
// import ModalLoguin from "../src/Components/ModalLoguin";
// import ModalRegister from "../src/Components/ModalRegistro";
import Admin from "../src/Pages/Admin";
// import { ProtectedRoute } from "./src/Components/ProtectedRoute";
import PaginaError from "../src/Pages/PaginaError";
import Layout from "../src/Components/Layout";
import ResetPassword from "../src/Pages/ResetPassword";
import ForgotPassword from "../src/Pages/ForgotPassword";
import { AuthProvider } from "./Context/AuthContext";
import PaginaLoguin from "./Pages/PaginaLoguin";
import PaginaRegistro from "./Pages/PaginaRegistro";


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterApp />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
    errorElement: <PaginaError />,

    children: [
      {
        index: true,
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: "/nosotros",
        element: (
          <div>
            <Nosotros />
          </div>
        ),
      },
      {
        path: "/contacto",
        element: (
          <div>
            <Contacto />
          </div>
        ),
      },
      {
        path: "/productos",
        element: (
          <div>
            <Productos />
          </div>
        ),
      },
      {
        path: "/forgotPassword/:id",
        element: (
          <div>
            <ForgotPassword />
          </div>
        ),
      },
      {
        path: "/resetPassword",
        element: (
          <div>
            <ResetPassword />
          </div>
        ),
      },
      {
        path: "/registro",
        element: (
          <div>
            <PaginaRegistro />
          </div>
        ),
      },
      {
        path: "/login",
        element: (
          <div>
            <PaginaLoguin />
          </div>
        ),
      },
      {
        path: "/admin",
        element: (
          <div>
            <Admin />
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

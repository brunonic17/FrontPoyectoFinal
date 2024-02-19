import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import "../src/index.css";
import PaginaError from "./Pages/PaginaError";
import Productos from "./Pages/Productos";
import { AuthProvider } from "./Context/AuthContext";
import ModalLoguin from "./Components/ModalLoguin";
import ModalRegister from "./Components/ModalRegistro";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import {useAuth} from './Context/AuthContext';

const {user} = useAuth;

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
          <ProtectedRoute user= {user}>
            <div>
            <Nosotros />
            </div>
          </ProtectedRoute>
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
        path: "/registro",
        element: (
          <div>
            <ModalRegister />
          </div>
        ),
      },
      {
        path: "/login",
        element: (
          <div>
            <ModalLoguin />
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


import ReactDOM from "react-dom/client";
// import { ShoppingRender } from "./ShoppingF.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import RouterApp from "../RouterApp";
// import Home from "../src/Pages/Home";
import Nosotros from "../src/Pages/Nosotros";
import Contacto from "../src/Pages/Contacto";
// import Productos from "../src/Pages/Productos";
// import ModalLoguin from "../src/Components/ModalLoguin";
// import ModalRegister from "../src/Components/ModalRegistro";
import Admin from "../src/Pages/Admin";
// import { ProtectedRoute } from "./src/Components/ProtectedRoute";
import PaginaError from "../src/Pages/PaginaError";
import Layout from "../src/Components/Layout";
import Home from "../src/Pages/Home";
import ResetPassword from "../src/Pages/ResetPassword";
import ForgotPassword from "../src/Pages/ForgotPassword";
import { AuthProvider } from "./Context/AuthContext";
import PaginaLoguin from "./Pages/PaginaLoguin";
import PaginaRegistro from "./Pages/PaginaRegistro";
import { ProtectedRoute } from "../src/Components/ProtectedRoute";
import { FavoritesProvider } from "./Context/FavContext";
import Favorites from "./Pages/Favorites";
import PaginaArticulo from "./Pages/ProductCard";
import PageProductCard from "./Pages/PageProductCard";
import { ProductsProvider } from "./Context/ProductsContext";
import { Carrito } from "./Pages/Carrito";

// import { ShoppingRender } from "./ShoppingF";

// import { ShoppingRender } from "./ShoppingF.jsx";
// import ProductsList from "./Components/ProductsList";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterApp />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("rootShopping")).render(
//   <React.StrictMode>
//     <ShoppingRender />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    index: "/",
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
        path: "/sendEmail",
        element: (
          <div>
            <ResetPassword />
          </div>
        ),
      },
      {
        path: "/favorites",
        element: (
          <div>
            <Favorites />
          </div>
        ),
      },
      {
        path: "/cardPage",
        element: (
          <div>
            <PaginaArticulo />
          </div>
        ),
      },
      {
        path: "/productCard/:id",
        element: (
          <div>
            <PageProductCard />
          </div>
        ),
      },
      {
        path: "/forgotPassword/:id/:token",
        element: (
          <div>
            <ForgotPassword />
          </div>
        ),
      },
      // {
      //   path: "/productos",
      //   element: (
      //     <div>
      //       <ProductsList />
      //     </div>
      //   ),
      // },
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
        path: "/carrito",
        element: (
          <div>
           <Carrito />
          </div>
        ),
      },
      {
        path: "/create-order",
        element: (
          <div>
            <h1>pagando carrito</h1>
          </div>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductsProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </ProductsProvider>
  </AuthProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/index.css";

import RouterApp from "../RouterApp";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);

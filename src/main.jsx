import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import "./index.css";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProductArea />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Registration />,
//   },
//   {
//     path: "/create",
//     element: <CreateProduct />,
//   },
//   {
//     path: "/edit/:id",
//     element: <EditProduct />,
//   },
//   {
//     path: "/detail/:id",
//     element: <DetailProduct />,
//   },
//   {
//     path: "/search/:search_str",
//     element: <SearchProducts />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

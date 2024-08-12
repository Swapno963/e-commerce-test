import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import Login from "./components/Login";
import ProductArea from "./components/ProductArea";
import Registration from "./components/Registration";
import ErrorPage from "./error-page";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductArea />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },

  {
    path: "/create",
    element: <CreateProduct />,
  },
  {
    path: "/edit/:id",
    element: <EditProduct />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

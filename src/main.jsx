import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import CreateProduct from "./components/CreateProduct";
import DetailProduct from "./components/DetailProduct";
import EditProduct from "./components/EditProduct";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProductArea from "./components/ProductArea";
import Registration from "./components/Registration";
import SearchProducts from "./components/SearchProducts";
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
  {
    path: "/detail/:id",
    element: <DetailProduct />,
  },
  {
    path: "/search/:search_str",
    element: <SearchProducts />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

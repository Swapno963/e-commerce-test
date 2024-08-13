import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import CreateProduct from "./CreateProduct";
import DetailProduct from "./DetailProduct";
import EditProduct from "./EditProduct";
import Layout from "./Layout";
import Login from "./Login";
import ProductArea from "./ProductArea";
import Registration from "./Registration";
import SearchProducts from "./SearchProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ],
  },
]);

export default router;

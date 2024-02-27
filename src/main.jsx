import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Create from "./pages/Create";
import ViewVaultList from "./pages/ViewVaultList";
import ErrorPage from "./pages/Error";
import Product from "./pages/Product";
import AuthCreate from "./pages/AuthCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/authcreate",
        element: <AuthCreate />,
      },
      {
        path: "/createVaultList",
        element: <Create />,
      },
      {
        path: "/ViewVaultList/:user",
        element: <ViewVaultList />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

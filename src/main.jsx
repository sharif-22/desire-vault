import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // React-Router


const Template = () => {
  return (
    <>
      {/* <Navbar />
      <Outlet />
      <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
    //  page router
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
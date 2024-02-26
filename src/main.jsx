import ReactDOM from "react-dom/client";
import "./index.css";

// import Footer from "./components/Footer.jsx";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // React-Router
import NavBar from "./components/NavBar.jsx";


const Template = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
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
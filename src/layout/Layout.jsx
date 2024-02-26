import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
// import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-20 mb-5">
      <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/index";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const Location = useLocation();

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              DesireVault
              <img
                src="/vault-logo.png"
                alt="logo"
                className="w-12 inline-block mx-2"
              />
            </span>
          </Link>

          {Location.pathname != "/" && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={logout}
            >
              Log Out
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

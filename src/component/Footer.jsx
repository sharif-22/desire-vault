import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 w-full">
      <footer className="bg-white shadow dark:bg-gray-900 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to={"/"} className="hover:underline">
              DesireVault
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to={"/create"} className="hover:underline me-4 md:me-6">
                Create
              </Link>
            </li>
            <li>
              <Link to={"/read"} className="hover:underline me-4 md:me-6">
                Update
              </Link>
            </li>

            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                MIT
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

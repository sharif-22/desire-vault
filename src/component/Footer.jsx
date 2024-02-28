import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-white shadow dark:bg-gray-900 bottom-0 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <h2 className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
              <Link to={"/"} className="hover:underline">
                DesireVault {" "}
              </Link>
            - All Rights Reserved.
          </h2>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://github.com/sharif-22/desire-vault"
                className="hover:underline"
                target="blank"
              >
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

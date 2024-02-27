import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/index";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const newUser = userCredential.user;
      console.log(newUser);
      // Redirect to createproduct page
      window.location.href = "/createVaultList";
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/invalid-credential") {
        alert("Invalid credentials");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email");
      }
    }
  };

  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //     history.push("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Turn Dreams into Reality with
              <span className="text-blue-500"> DesireVault</span>
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Categorize your wishlist items, add notes, set priorities, and
              customize them to fit your unique preferences.
            </p>
            <a
              href="https://github.com/SwethaDSalvatore/desire-vault/blob/main/README.md"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more about our app
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div>
            {/* login */}
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hello There! 
              </h2>
              {/* <span className="text-blue-500">{user?.email}</span> */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-blue-500 ">
                Create Your account to continue
              </h2>
              <form className="mt-8 space-y-6" onSubmit={login}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={login}
                  >
                    Login to your account
                  </button>
                  {/* <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={logout}
                  >
                    Logout
                  </button> */}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?{" "}
                  <Link
                    to={"/authcreate"}
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

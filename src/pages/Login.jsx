import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/index";
import { Vault } from "../Context";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  let [userUID] = useContext(Vault);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const Navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const newUser = userCredential.user;

      userUID = newUser.uid;
      Navigate(`/product/${userUID}`);
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/invalid-credential") {
        alert("Invalid credentials");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email");
      }
    }
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [createAcc, setCreateAcc] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const newUser = userCredential.user;
      console.log(newUser);
      // Redirect to Home after successful registration
      setCreateAcc(!true);
      alert("Vault Created Successfully😊");
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/invalid-credential") {
        alert("Invalid credentials");
      } else if (error.code === "auth/invalid-email") {
        alert("Enter a valid email");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be a minimum of 6 characters");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Already created, Please login!!");
      }
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 my-4">
        <div className="p-8 mx-auto max-w-screen-xl h-[95dvh] items-center lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold  text-gray-900 lg:text-5xl dark:text-white">
              Turn Dreams into Reality with
              <span className="text-blue-500 items-center flex">
                {" "}
                DesireVault{" "}
              </span>
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Easily track and manage all your desired products in one place,
              ensuring you never miss out on a purchase. Simplify your shopping
              journey and turn wishes into reality with our intuitive and
              convenient app.
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
          {/* login */}
          <div className={createAcc ? "hidden" : "block"}>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hello There!
              </h2>
              <h2 className="text-xl font-bold text-blue-500 dark:text-blue-500 ">
                Login to continue
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
                {/* <div>
                  <Input
                    label="Your email"
                    type="email"
                    name="email"
                    labelclassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    placeholder="name@company.com"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />

                  <Input
                    label="Your password"
                    labelclassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    type="password"
                    name="email"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div> */}
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
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?{" "}
                  <a
                    onClick={() => {
                      console.log(createAcc);
                      setCreateAcc(!false);
                    }}
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* Create form  */}
          <div className={createAcc ? "block" : "hidden"}>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome to DesireVault!{" "}
                {/* <span className="text-blue-500">{user?.email}</span> */}
              </h2>
              <h2 className="text-xl font-bold text-blue-500 dark:text-blue-500 ">
                Create Your account to continue
              </h2>

              <form className="mt-8 space-y-3" onSubmit={register}>
                {/* register */}
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
                      setRegisterEmail(event.target.value);
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
                      setRegisterPassword(event.target.value);
                    }}
                  />
                </div>
                {/* <div>
                  <Input
                    label="Your email"
                    type="email"
                    name="email"
                    labelclassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    placeholder="name@company.com"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />

                  <Input
                    label="Your password"
                    labelclassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    type="password"
                    name="email"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div> */}
                <button
                  type="submit"
                  className="w-full block px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={register}
                >
                  Create my account
                </button>
                <a
                  onClick={() => {
                    console.log(createAcc);
                    setCreateAcc(!true);
                  }}
                  className=" inline-block text-blue-600 hover:underline dark:text-blue-500 text-sm font-medium "
                >
                  Login
                </a>
                <span className="mx-1">with existing account</span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

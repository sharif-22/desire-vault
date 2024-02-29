import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {
  signInWithEmailAndPassword,
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
      Navigate(`/${userUID}`);
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/invalid-credential") {
        alert("Enter your valid credentials");
      } else if (error.code === "auth/invalid-email") {
        alert("Enter your valid email");
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
      <section className="bg-gray-50 dark:bg-gray-900 lg:h-screen flex pt-16">
        <div className="p-8 mx-auto max-w-screen-xl items-center lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold  text-gray-900 lg:text-5xl dark:text-white">
              Turn Dreams into Reality with
              <span className="text-blue-500"> DesireVault </span>
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
            </a>
          </div>
          {/* login */}
          <div className={createAcc ? "hidden" : "block"}>
            <div className="w-full lg:max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-xl duration-500 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hello There!
              </h2>
              <h2 className="text-xl font-bold text-blue-500 dark:text-blue-500 ">
                Login to continue
              </h2>
              <form className="space-y-6" onSubmit={login}>
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
                    id="login-email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    id="login-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  className="w-full block px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                  onClick={login}
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?{" "}
                  <a
                    onClick={() => {
                      console.log(createAcc);
                      setCreateAcc(!false);
                    }}
                    className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* Create form  */}
          <div className={createAcc ? "block" : "hidden"}>
            <div className="w-full lg:max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg  shadow-md hover:shadow-xl duration-500 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome to DesireVault!{" "}
                {/* <span className="text-blue-500">{user?.email}</span> */}
              </h2>
              <h2 className="text-xl font-bold text-blue-500 dark:text-blue-500 ">
                Create Your account to continue
              </h2>

              <form className="mt-8 space-y-6" onSubmit={register}>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full block px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={register}
                >
                  Create my account
                </button>
                <a
                  onClick={() => {
                    console.log(createAcc);
                    setCreateAcc(!true);
                  }}
                  className="cursor-pointer inline-block text-blue-600 hover:underline dark:text-blue-500 text-sm font-semibold "
                >
                  Login
                </a>
                <span className="mx-1 text-sm text-gray-900 dark:text-white">
                  with an existing account
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

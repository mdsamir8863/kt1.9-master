import { useState } from "react";
import { Link } from "react-router-dom";
import { throttle, debounce } from "lodash";
import { useDispatch } from "react-redux";
import { login_user } from "../../../redux/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const throttledSubmit = throttle((e) => {
    e.preventDefault();
    console.log(email,password)
    dispatch(login_user(email, password));
  }, 500);

  const debouncedEmailChange = debounce((value) => {
    setEmail(value);
  }, 300);

  const debouncedPasswordChange = debounce((value) => {
    setPassword(value);
  }, 300);

  return (
    <section className="relative w-full h-screen flex bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60)] bg-center bg-cover bg-no-repeat justify-center items-center">
      <div className="flex absolute w-full h-full bg-black z-0 opacity-80"></div>

      <div className="flex phone:w-full  p-5 w-1/3 h-2/3  rounded-xl flex-col z-10">
        <div className="w-full bg-white rounded-lg shadow ::border md:mt-0 sm:max-w-md xl:p-0 ::bg-gray-800 ::border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ::text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={throttledSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 ::text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => debouncedEmailChange(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ::bg-gray-700 ::border-gray-600 ::placeholder-gray-400 ::text-white ::focus:ring-blue-500 ::focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 ::text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => debouncedPasswordChange(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="false"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ::bg-gray-700 ::border-gray-600 ::placeholder-gray-400 ::text-white ::focus:ring-blue-500 ::focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 ::bg-gray-700 ::border-gray-600 ::focus:ring-primary-600 ::ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 ::text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/recover"
                  className="text-sm font-medium text-primary-600 hover:underline ::text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ::bg-lime-600 ::hover:bg-lime-700 ::focus:ring-lime-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ::text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline ::text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

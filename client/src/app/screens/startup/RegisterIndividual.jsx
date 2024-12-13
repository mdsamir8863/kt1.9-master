import { useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { register_user } from "../../../redux/action";

const RegisterIndividual = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [gender, Setgender] = useState("");
  const dispatch = useDispatch();

  // Throttle the form submission to avoid multiple submissions in a short time
  const throttledSubmit = (e) => {
    e.preventDefault();
    const user_type = "individual";
    const company_type = "";
    
    dispatch(register_user(name, email, password, user_type, company_type,gender));
  };

  // Debounce input changes to avoid triggering too many updates
  const debounced_change = debounce((value, setter) => {
    setter(value);
  }, 200);

  return (
    <section className="w-full  h-screen bg-[url(https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGlzJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)] bg-no-repeat relative bg-center bg-cover">
      <section className="w-full top-0 opacity-80 h-full bg-black absolute z-0"></section>
      <section className="w-full absolute h-fit z-20">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 :text-white"
          ></a>
          <div className="w-full bg-white rounded-lg shadow :border md:mt-0 sm:max-w-md xl:p-0 :bg-gray-800 :border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl :text-white">
                Create an account
              </h1>
              <form
                onSubmit={throttledSubmit}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
                    Name
                  </label>
                  <input
                    onChange={(e) => debounced_change(e.target.value, Setname)}
                    type="name"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => debounced_change(e.target.value, Setemail)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      debounced_change(e.target.value, Setpassword)
                    }
                    autoComplete="false"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 .text-white"
                  >
                    Gender
                  </label>
                  <select
                    onChange={(e) =>
                      debounced_change(e.target.value, Setgender)
                    }
                    id="gender"
                    value={gender}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
                  >
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="Transgender">Transgender</option>
                    <option value="NOT">Prefer not to say</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
                >
                  Create User account
                </button>
                <p className="text-sm font-light text-gray-500 :text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline :text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RegisterIndividual;

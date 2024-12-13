import { useState } from "react";
import { Link } from "react-router-dom";
import { throttle, debounce } from "lodash";
import { useDispatch } from "react-redux";
import {register_user} from '../../../redux/action'

const RegisterCompany = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [company_type, Setcompany_type] = useState("");
  const dispatch = useDispatch();

  // Throttle the form submission to avoid multiple submissions in a short time
  const throttledSubmit = throttle((e) => {
    e.preventDefault();
    const user_type= "company"
    dispatch(register_user(name,email,password,user_type,company_type))
  }, 200);

  // Debounce input changes to avoid triggering too many updates
  const debounced_change = debounce((value, setter) => {
    setter(value);
    console.log(value);
  }, 200);

  return (
    <section className="w-full  h-screen bg-[url(https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)] bg-no-repeat relative bg-center bg-cover">
      <section className="w-full top-0 opacity-80 h-full bg-black absolute z-0"></section>
      <section className="w-full absolute h-full z-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 .text-white"
                  >
                    Company Type
                  </label>
                  <select
                   onChange={(e) =>
                    debounced_change(e.target.value, Setcompany_type)
                  }
                    id="company"
                    value={company_type}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
                  >
                    
                    <option value="Co-operative">Co-operative</option>
                    <option value="Charity">Charity</option>
                    <option value="Not for Profit ">NotforProfit </option>
                    <option value="Sole Proprietorship  ">
                      Sole Proprietorship{" "}
                    </option>
                   
                    <option value="Partnership">Partnership</option>
                    <option value="Limited Liability Partnership ">
                      Limited Liability Partnership{" "}
                    </option>
                    <option value="Private Ltd">Private Ltd</option>
                    <option value="Public Ltd ">Public Ltd </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-yellow-600 :hover:bg-yellow-700 :focus:ring-yellow-800"
                >
                  Create Company account
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

export default RegisterCompany;

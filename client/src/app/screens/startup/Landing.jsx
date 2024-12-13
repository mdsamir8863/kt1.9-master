/* eslint-disable no-prototype-builtins */

import { Link, useNavigate } from "react-router-dom";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="  bg-[url(https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60)] relative   bg-center bg-cover bg-no-repeat   flex justify-center items-center w-full h-screen">
        <div className="flex w-full h-full absolute top-0 bg-black opacity-90 "></div>

        <div className="flex phone:w-5/6 phone:h-72 justify-center gap-5 items-center flex-col w-1/3 h-60 shadow-2xl p-2 bg-white rounded-lg relative">
          <div className="flex z-0  absolute h-32 w-32 top-[-70px] right-[50%]  rounded-full bg-white p-4 translate-x-16 ">
            <span className="w-24 h-24 bg-green-600 rounded-full text-3xl flex justify-center items-center font-bold text-white">
              K
            </span>
          </div>

          <button
            onClick={() => navigate("/company/register")}
            type="button"
            className="text-gray-900 z-10 w-4/5 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-4 items-center ::focus:ring-[#F7BE38]/50 mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            Sign up as company
          </button>

          <button
            onClick={() => navigate("/individual/register")}
            type="button"
            className="text-white flex gap-4 w-4/5 bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center ::focus:ring-[#2557D6]/50 mr-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Sign up as Individual
          </button>

          <span className="absolute text-[13px] w-2/3 left-12 bottom-5">
            already have an account?{" "}
            <Link to="/login" className="cursor-pointer text-blue-500 ">
              Sign in
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default MainScreen;

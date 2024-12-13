import { Link } from "react-router-dom";

const AdWarpper = (WrappedComponent) => {
  return function WithLoggingComponent(props) {
    return (
      <>
        <section className="w-full p-2 justify-between flex h-screen">
          {/* left div  */}
          <div className="flex w-60 p-3 rounded-md shadow-lg h-5/6 border flex-col">
            <span className="text-gray-600 font-bold">JOBS</span>

            <div className="flex  gap-2  mt-5">
              <div className="flex w-20 h-20 bg-blue-100 rounded-md justify-center items-center relative ">
                <span className="font-bold text-2xl">25</span>
                <div className="flex text-[11px] justify-center items-center text-white absolute bottom-0 bg-blue-600 w-full h-4">
                  Decembar
                </div>
              </div>

              <div className="flex w-1/2 flex-col">
                <span>Software Engineer</span>
                <span className="text-[12px]">Watshi tech</span>
                <span className="text-[10px] text-blue-500">See more...</span>
              </div>
            </div>
            <div className="flex  gap-2  mt-5">
              <div className="flex w-20 h-20 bg-blue-100 justify-center items-center rounded-md relative">
                <span className="font-bold text-2xl">25</span>
                <div className="flex text-[11px] justify-center items-center text-white absolute bottom-0 bg-blue-600 w-full h-4">
                  Decembar
                </div>
              </div>

              <div className="flex w-1/2 flex-col">
                <span> Devops</span>
                <span className="text-[12px]">Watshi tech</span>
                <span className="text-[10px] text-blue-500">See more...</span>
              </div>
            </div>
            <span className="mt-5 text-sm font-bold  flex gap-1  text-[#f59e0b]">
              Promoted.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </span>

            <div className="flex h-1/2 rounded-md overflow-hidden   w-full">
              <img
                className="w-full object-cover"
                src="https://images.unsplash.com/photo-1697537314275-4dd128cc2621?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          {/* center div  */}
          <div className="w-1/2 ">
            <WrappedComponent {...props} />
          </div>

          {/* right div  */}
          <div className="flex w-60 p-3 rounded-md shadow-lg h-fit flex-col border">
            <span className="uppercase font-bold text-gray-600">Navigate</span>

            <div className="flex right_div w-3/4 pl-5 pt-5 text-lime-700 font-medium flex-col gap-2">
              <Link to="/connection" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Connections
              </Link>
              <Link to="/search" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Search
              </Link>
              <Link to="/message" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Message
              </Link>
              <Link to="/jobs" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Jobs
              </Link>
              <Link to="/projects" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Projects
              </Link>
              <Link to="/notification" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Notification
              </Link>
            </div>
            <span className="mt-5 text-sm font-bold  flex gap-1  text-[#f59e0b]">
              Promoted.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </span>
            <div className="flex text-white bg-slate-200 mt-5 w-full p-2 rounded-md flex-col">
              <span className="font-bold text-gray-900">
                {" "}
                kitelle sign-up :{" "}
              </span>
              <span className="text-[12px] text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam p
              </span>
            </div>
            <div className="flex text-white bg-slate-200 mt-5 w-full p-2 rounded-md flex-col">
              <span className="font-bold text-gray-900">
                {" "}
                kitelle sign-up :{" "}
              </span>
              <span className="text-[12px] text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam p
              </span>
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default AdWarpper;

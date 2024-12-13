import AdWarpper from "../AdWarpper";

const Component = () => {
  return (
    <section className="w-full flex h-full items-center flex-col">
      <div className="flex  w-full font-bold items-center gap-2 text-xl  ">
        Message
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
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <div className="flex  py-3 gap-3 items-center w-9494 overflow-x-scroll  mt-5 border rounded-md shadow-md">
        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>

        <div className="flex w-12 h-12 bg-gray-500 pl-3 pr-5 pt-3  mx-2  text-white rounded-lg font-bold text-xl  relative">
          TL
        </div>
      </div>

      <div className="flex mt-5 bg-gray-100 h-3/4 w-full flex-col">
        <div className="flex w-full gap-3 rounded-md  bg-lime-500 items-center py-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1695635984593-a69326d8f5bb?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
            className="w-12 h-12 mx-4 rounded-full"
          />

          <div className="flex flex-col ">
            <span className="font-bold">Jhon bou</span>
            <span className="text-sm text-gray-700">Company</span>
          </div>
        </div>
        <div className="flex h-3/4 "></div>

        <div className="flex items-center p-2 w-full gap-2">
          <div className="w-2/3">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
              placeholder="message here .."
              required
            />
          </div>
          <button
            type="button"
            className="text-white bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  .bg-lime-600 .hover:bg-lime-700 .focus:ring-lime-800"
          >
            Send
          </button>
          <button
            type="button"
            className="py-2  px-3 flex items-center gap-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 .focus:ring-gray-700 .bg-gray-800 .text-gray-400 .border-gray-600 .hover:text-white .hover:bg-gray-700"
          >
            <div className="p-1 bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            Refresh
          </button>
        </div>
      </div>
    </section>
  );
};

const Message = AdWarpper(Component);

export default Message;

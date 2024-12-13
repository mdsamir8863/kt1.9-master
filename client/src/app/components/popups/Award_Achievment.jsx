import PopUpBg from "../PopUpBg";

const Component = ({ toggle, edit_format, handle_submit, handle_change }) => {
  return (
    <section className="w-full flex flex-col p-5 rounded-md bg-white">
      <div className="flex justify-between items-center w-full">
        <span className="font-bold text-xl">Add {edit_format}</span>

        <button
          onClick={toggle}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center .hover:bg-gray-600 .hover:text-white"
          data-modal-hide="default-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <form className="mt-5" onSubmit={handle_submit}>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            {edit_format  === "Education" ? "Education (MSc, BSc,School etc.)" :  `${edit_format} Title`}  
          </label>
          <input
            type="text"
            id="text"
            name="title"
            onChange={handle_change}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder=""
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            name="description"
            onChange={handle_change}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 resize-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 .bg-blue-600 .hover:bg-blue-700 focus:outline-none .focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

const Award_Achievment = PopUpBg(Component);

export default Award_Achievment;

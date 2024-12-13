/* eslint-disable react/prop-types */
import { useState } from "react";
import PopUpBg from "../PopUpBg";
import { useDispatch } from "react-redux";
import { add_comment } from "../../../redux/action";
import { Link } from "react-router-dom";

const Component = ({ toggle, Home, post_id, all_comments }) => {
  const [comment, set_comment] = useState("");
  const dispatch = useDispatch();

  const handle_submit = (e) => {
    e.preventDefault();
    dispatch(add_comment(post_id, comment));
    toggle();
  };

  return (
    <section className="w-full p-5 bg-white flex flex-col ">
      <div className="flex w-full justify-between items-center">
        <span className="font-bold text-gray-700 text-xl ">Comment</span>
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

      <div className="flex w-full h-96 overflow-auto flex-col">
        {all_comments &&
          all_comments.map((e) => (
            <div key={e._id} className="flex items-center space-x-4 mt-3">
              <div className="relative  w-10 h-10 overflow-hidden bg-gray-100 rounded-full .bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="font-medium .text-white">
                {Home ? (
                  <Link onClick={() => toggle()} to={`/user/${e.user._id}`}>
                    User
                  </Link>
                ) : (
                  <Link onClick={() => toggle()} to={`/user/${e.user}`}>
                    User
                  </Link>
                )}
                <div className="text-sm text-gray-500 .text-gray-400">
                  {e.comment}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex w-full">
        <form className="w-full" onSubmit={handle_submit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only .text-white"
          >
            Comment
          </label>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => set_comment(e.target.value)}
              id="default-search"
              autoComplete="off"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
              placeholder=""
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 .bg-blue-600 .hover:bg-blue-700 .focus:ring-blue-800"
            >
              comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Comment = PopUpBg(Component);
export default Comment;

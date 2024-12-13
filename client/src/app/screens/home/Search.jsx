import { useState } from "react";
import AdWarpper from "../AdWarpper";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Component = () => {
  const [input, set_input] = useState("");
  const [arr, set_arr] = useState([]);
  const dispatch = useDispatch();

  const search_input = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "loading_start" });
      const API = `/api/user/search?name=${input}`;
      const { data } = await axios.get(API);
      console.log(data);
      if (data?.data) {
        set_arr(data.data);
      }
      dispatch({ type: "loading_stop" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading_stop" });
      dispatch({ type: "user_fail", payload: error });
    }
  };

  return (
    <div className="flex flex-col w-full gap-2 items-center">
      <form className="w-full" onSubmit={search_input}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only .text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 .text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="name"
            id="name"
            onChange={(e) => set_input(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder="name..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-main hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-4 py-2 .bg-lime-600 .hover:bg-main .focus:ring-lime-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flow-root w-full">
        <ul
          role="list"
          className="divide-y divide-gray-200 .divide-gray-700"
        >
          {arr &&
            arr.map((e) => (
              <li key={e._id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={
                        e?.avatar?.url ||
                        "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                      }
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      {e?.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate .text-gray-400">
                      {e?.user_type}
                    </p>
                  </div>
                  <Link
                    to={`/user/${e._id}`}
                    className="inline-flex cursor-pointer items-center text-base font-semibold text-gray-900 "
                  >
                    View
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const Search = AdWarpper(Component);

export default Search;

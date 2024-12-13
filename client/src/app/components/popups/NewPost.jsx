/* eslint-disable react/prop-types */
import { useState } from "react";
import PopUpBg from "../PopUpBg";
import { new_post } from "../../../redux/action";
import { useDispatch } from "react-redux";

const Component = ({ toggle_post }) => {


  const dispatch = useDispatch()
  const [form_data, set_form_data] = useState({
    description: "",
    caption: "",
    image: "",
  });

  const handle_change = (e) => {
    const { value, name } = e.target;
    set_form_data((prev) => ({ ...prev, [name]: value }));
  };

  const handle_image = (e) => {
    const image = e.target.files[0];
    set_form_data((prev) => ({ ...prev, image: image }));
  };

  const handle_submit = (e) => {
    e.preventDefault();
    console.log(form_data);
    dispatch(new_post(form_data))
    toggle_post();
  };

  return (
    <form
      onSubmit={handle_submit}
      className="w-full pop_anime bg-white h-fit rounded-md p-3 flex flex-col gap-2"
    >
      <div className="flex w-full justify-between">
        <span className="font-bold text-xl text-gray-700">New Post</span>
        <button
          onClick={toggle_post}
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
      <div className="mt-3">
        <label
          className="block mb-2  font-medium text-gray-900"
          htmlFor="file_input"
        >
          Image
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 .text-gray-400 focus:outline-none .bg-gray-700 .border-gray-600 .placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          onChange={handle_image}
          type="file"
          accept="image/*"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="caption"
          className="block mb-2  font-medium text-gray-900 "
        >
          Caption
        </label>
        <textarea
          type="text"
          name="caption"
          id="caption"
          value={form_data.caption}
          onChange={handle_change}
          maxLength={100}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500 resize-none"
          required
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="description"
          className="block mb-2  font-medium text-gray-900 "
        >
          Description
        </label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={form_data.description}
          onChange={handle_change}
          maxLength={300}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500 resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white w-44  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  mt-3 mb-2 px-5 py-2.5 text-center .bg-blue-600 .hover:bg-blue-700 .focus:ring-blue-800"
      >
        Post
      </button>
    </form>
  );
};

const NewPost = PopUpBg(Component);

export default NewPost;

/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Post from "../../components/Post";
import AdWarpper from "../AdWarpper";
import { useDispatch, useSelector } from "react-redux";
import { fetch_feed } from "../../../redux/action";

const Component = ({
  toggle_post,
  set_all_comments,
  set_current_post_id,
  set_comment_pop,
}) => {
  const { feed } = useSelector((e) => e.feed_reducer);
  const { user } = useSelector((e) => e.user_reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!feed) {
      dispatch(fetch_feed());
    }
  }, [feed, dispatch]);

  console.log(feed);

  return (
    <>
      <div className="flex w-full px-4  py-1 items-center  h-full  flex-col">
        <div
          onClick={toggle_post}
          className="flex cursor-pointer  w-[88%] items-center justify-center border p-4 flex-col rounded-md shadow-md"
        >
          <div className="flex w-3/4 items-end justify-between">
            <div className="relative z-0 w-5/6">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Write here
              </label>
            </div>
            <img
              src={
                user?.avatar?.url ||
                "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
              }
              className="w-12 h-12 p-1  outline-gray-500 outline outline-[1px] rounded-full"
              alt=""
            />
          </div>
          <div className="flex pt-3 w-3/4 items-center gap-2 text-blue-600 ">
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
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>

            <span className="text-[12px]">Click here for newpost</span>
          </div>
        </div>

        <div className="flex w-full  flex-col items-center gap-5 h-5/6 mt-5 overflow-y-scroll">
          {feed &&
            feed.map((e, i) => (
              <Post
                set_all_comments={set_all_comments}
                set_current_post_id={set_current_post_id}
                toggle={() => set_comment_pop((e) => !e)}
                key={i}
                post={e}
              />
            ))}
        </div>
      </div>
    </>
  );
};

const Home = AdWarpper(Component);

export default Home;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_post, like_action_ } from "../../redux/action";

const Post = ({ post, toggle, set_current_post_id,set_all_comments }) => {
  const [liked, set_liked] = useState(false);
  const { user } = useSelector((e) => e.user_reducer);
  const dispatch = useDispatch();
  const like_action = () => {
    set_liked((e) => !e);
    dispatch(like_action_(post._id));
  };

  const handle_delete_post = () => {
    const action = confirm("Are you sure you want to delete this post ?");
    if (action) {
      console.log(action);
      dispatch(delete_post(post._id));
 
    }
  };

  const verify_like = () => {
    if (post?.likes.includes(user._id)) {
      set_liked(true);
    } else {
      set_liked(false);
    }
  };

  const report_post=()=>{
    const action  = confirm('Do you want to report this post ??')
    if(action){
      
    }
  }

  const handle_post_id = () => {
    set_all_comments(post.comments)
    set_current_post_id(post._id);
    toggle();
  };

  useEffect(() => {
    verify_like();
  }, []);

  return (
    <div className="w-[90%] p-4">
      <div className="bg-white border rounded-sm w-full ">
        <div className="flex items-center px-4 py-3">
          <img
            className="h-8 w-8 rounded-full"
            src={
              post?.avatar ||
              "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
            }
          />
          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">
              {post?.name}
            </span>
            <span className="text-gray-600 text-xs block">{post?.caption}</span>
          </div>
        </div>
        <img
          className="w-full"
          src={
            post?.image ||
            "https://images.unsplash.com/photo-1697868372007-7130b2fec25e?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
          }
        />
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5">
            <svg
              onClick={like_action}
              xmlns="http://www.w3.org/2000/svg"
              fill={liked ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <svg
              className="cursor-pointer"
              onClick={handle_post_id}
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clipRule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flex">
            {post?.owner == user._id ? (
              <svg
                onClick={handle_delete_post}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            ) : (
              <svg 
              onClick={report_post}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 text-gray-800 h-6 bg-yellow-200 p-1 rounded-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="font-semibold text-sm mx-4 mt-2 mb-1"></div>
        <div className="text-sm font-medium ml-5 mb-3">{post?.description}</div>
      </div>
    </div>
  );
};

export default Post;

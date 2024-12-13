import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import After_profile from "../../components/individual/After_profile";
import CompanyProfileMain from "../../components/company/CompanyProfileMain";
import Post from "../../components/Post";
import Comment from "../../components/popups/Comment";
import { handle_follow } from "../../../redux/action";

const User = () => {
  const { user: main_user } = useSelector((e) => e.user_reducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, set_user] = useState({});
  const [followed, set_followed] = useState(false);
  const [posts, set_posts] = useState([]);
  const [user_about, set_user_about] = useState(false);
  const [all_comments, set_all_comments] = useState([]);
  const [user_awards, set_user_awards] = useState(false);
  const [user_achievements, set_user_achievements] = useState(false);
  const [current_post_id, set_current_post_id] = useState("");
  const [comment_pop, set_comment_pop] = useState(false);
  const navigate = useNavigate();

  const fetch_user = async () => {
    try {
      dispatch({ type: "loading_start" });
      const API = `/api/user/${id}`;
      const { data } = await axios.get(API);
      set_user(data?.data);
      set_posts(data?.data?.posts);
      dispatch({ type: "loading_stop" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading_stop" });
      dispatch({ type: "user_fail", payload: error });
    }
  };

  const user_achievements_slice = () => {
    if (!user_achievements) {
      return (
        <>
          {user?.achievements?.slice(0, 2).map((e, i) => (
            <div key={i} className="flex w-full gap-2 justify-between my-5">
              <div className="flex mx-2 justify-center items-center bg-gray-200 p-3">
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
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>

              <div className="flex flex-col w-3/4">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
              <div className="flex"></div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {user?.achievements?.map((e, i) => (
            <div key={i} className="flex w-full gap-2 justify-between my-5">
              <div className="flex mx-2 justify-center items-center bg-gray-200 p-3">
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
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>

              <div className="flex flex-col w-3/4">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
              <div className="flex"></div>
            </div>
          ))}
        </>
      );
    }
  };

  const user_about_slice = () => {
    if (user_about) {
      return <> {user?.about}</>;
    } else {
      return user?.about?.slice(0, 340);
    }
  };

  const user_awards_slice = () => {
    if (!user_awards) {
      return (
        <>
          {user?.awards?.slice(0, 2).map((e, i) => (
            <div key={i} className="flex w-full gap-2 justify-between my-5">
              <div className="flex mx-2 justify-center items-center bg-gray-200 p-3">
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>

              <div className="flex w-3/4 flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
              <div className="flex"></div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {user?.awards?.map((e, i) => (
            <div key={i} className="flex w-full gap-2 justify-between my-5">
              <div className="flex mx-2 justify-center items-center bg-gray-200 p-3">
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>

              <div className="flex w-3/4 flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
              <div className="flex"></div>
            </div>
          ))}
        </>
      );
    }
  };

  const verify_follow = () => {
    set_followed(main_user.following.includes(id));
  };

  const follow_handler = () => {
    set_followed((e) => !e);
    dispatch(handle_follow(id));
  };

  const verify_linking = () => {
    if (id === main_user._id) {
      navigate("/profile");
    }
  };

  useEffect(() => {
    verify_linking();
  }, []);

  useEffect(() => {
    fetch_user();
    verify_follow();
  }, []);
  return (
    <>
      {comment_pop ? (
        <Comment
          all_comments={all_comments}
          post_id={current_post_id}
          toggle={() => set_comment_pop((e) => !e)}
        />
      ) : (
        ""
      )}
      <section className="h-fit w-full mt-4 pl-10  relative  flex ">
        <div className="flex flex-col  w-3/4 pt-5  ">
          <div className="flex w-full gap-4 border items-center h-fit p-3 relative">
            <div className="flex absolute top-0 right-0 w-60 justify-evenly items-start">
              <div className="flex p-1 items-center text-gray-700 border-lime-500 border-t-0  border-2 w-12 justify-start rounded-b-md font-bold text-xl  flex-col">
                <span>{user?.followers?.length}</span>
                <span className="text-[0.4rem]">Following</span>
              </div>
              <div className="flex p-1 text-gray-700 items-center border-lime-500  border-2 w-12 border-t-0 justify-start rounded-b-md font-bold text-xl  flex-col">
                <span>{user?.following?.length}</span>
                <span className="text-[0.4rem]">Followers</span>
              </div>
              <div className="flex p-1 text-gray-700 items-center border-lime-500 border-t-0 border-2 w-12 justify-start rounded-b-md font-bold text-xl  flex-col">
                <span>{user?.posts?.length}</span>
                <span className="text-[0.4rem]">Post</span>
              </div>
            </div>
            <div className="flex  p-2 absolute bottom-0 right-0">
              <button
                onClick={follow_handler}
                type="button"
                className={
                  followed
                    ? "text-gray-800 bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium   rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                    : "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 .bg-blue-600 .hover:bg-blue-700 .focus:ring-blue-800"
                }
              >
                {followed ? "followed" : "follow"}
              </button>
            </div>

            <div className="flex w-32 h-32 relative">
              <img
                src={
                  user?.avatar?.url ||
                  "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                className="w-32 h-32 rounded-full"
                alt=""
              />
            </div>
            <span className="w-[2px] h-5/6 bg-gray-800 rounded-lg"></span>

            <div className="flex  flex-col">
              <span className="flex font-bold items-end gap-1 first-letter:uppercase">
                {user?.name}
                <span className="text-[0.7em] font-medium mb-[2px]">
                  {" "}
                  {user?.gender ? `(${user?.gender})` : ""}{" "}
                </span>
              </span>
              <span className="text-sm text-yellow-700  ">
                {user?.user_type}
              </span>
              <span className="text-[0.7rem] w-2/3 mt-2 ">{user?.bio}</span>
              <div className="flex w-full  my-3 gap-4">
                <div className="flex gap-2 text-[0.7rem]">
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
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                  <span className="font-medium"> {user?.email} </span>
                </div>
                <div className="flex gap-2 text-[0.7rem]">
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
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  <span className="font-medium">
                    {" "}
                    {user?.website || "--you website--"}{" "}
                  </span>
                </div>
                <div className="flex gap-2 text-[0.7rem]">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <span className="font-medium">
                    {" "}
                    {user?.city || "--enable location-- "}{" "}
                  </span>
                </div>
              </div>
              <div className="flex w-full   gap-4">
                {user?.contact ? (
                  <div className="flex gap-2 text-[0.7rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>

                    <span className="font-medium">
                      {" "}
                      {user?.contact || "--Add contact -- "}{" "}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {user?.revenue ? (
                  <div className="flex gap-2 text-[0.7rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="font-medium">
                      {" "}
                      {user?.revenue || "--Add revenue -- "}{" "}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {user?.employees ? (
                  <div className="flex gap-2 text-[0.7rem]">
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
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                    <span className="font-medium">
                      {" "}
                      {user?.employees || "--Add employees -- "}{" "}
                    </span>
                  </div>
                ) : (
                  ""
                )}

                
              </div>
            </div>
          </div>

          <div className="flex  w-full rounded-xl mt-10 gap-2 p-5 bg-white flex-col border shadow-xl">
            <span className="font-bold text-xl">About-</span>
            <span className="font-normal text-sm">{user_about_slice()}</span>
            <div
              onClick={() => set_user_about((e) => !e)}
              className="flex w-full hover:bg-gray-50 justify-center items-center "
            >
              {user_about ? (
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
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          </div>

          {user.user_type === "individual" ? (
            <After_profile />
          ) : (
            <CompanyProfileMain />
          )}

          <div className="flex  w-full rounded-xl mt-10 gap-2 p-5 bg-white flex-col border shadow-xl">
            <span className="font-bold text-xl w-full flex justify-between">
              <span>Awards-</span>
            </span>
            {user_awards_slice()}
            <div
              onClick={() => set_user_awards((e) => !e)}
              className="flex w-full hover:bg-gray-50 justify-center items-center "
            >
              {user_awards ? (
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
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className="flex  w-full rounded-xl mt-10 gap-2 p-5 bg-white flex-col border shadow-xl">
          <span className="font-bold text-xl w-full flex justify-between">
              <span>Achievements-</span>
            </span>
            {user_achievements_slice()}
            <div
              onClick={() => set_user_achievements((e) => !e)}
              className="flex w-full hover:bg-gray-50 justify-center items-center "
            >
              {user_achievements ? (
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
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          </div>

          <div className="w-2/3">
            {posts &&
              posts.map((e, i) => (
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

        {/* left side attached section  */}
        <div className="flex w-60 px-4 absolute top-5 right-2 border rounded-lg shadow-lg flex-col ">
          <div className="flex bg-gray-200 my-5 text-gray-600 p-2 h-fit   py-2  rounded-md ">
            Upload Contacts
          </div>

          <div className="flex mb-5 flex-col">
            <div className="flex  px-2 my-2 gap-2 w-full  flex-col">
              <div className="flex gap-2  items-center font-medium text-sm">
                <img
                  src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <span>Rajan Rajes</span>
              </div>

              <div className="flex bg-blue-100 w-fit rounded-xl  text-[10px] px-3 py-0.5 font-bold">
                + Follow
              </div>
            </div>
            <div className="flex  px-2 my-2 gap-2 w-full  flex-col">
              <div className="flex gap-2  items-center font-medium text-sm">
                <img
                  src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <span>Rajan Rajes</span>
              </div>

              <div className="flex bg-blue-100 w-fit rounded-xl  text-[10px] px-3 py-0.5 font-bold">
                + Follow
              </div>
            </div>
            <div className="flex  px-2 my-2 gap-2 w-full  flex-col">
              <div className="flex gap-2  items-center font-medium text-sm">
                <img
                  src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <span>Rajan Rajes</span>
              </div>

              <div className="flex bg-blue-100 w-fit rounded-xl  text-[10px] px-3 py-0.5 font-bold">
                + Follow
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 .text-white"
              >
                Invite a friend
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
                placeholder="email address"
                required
              />
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center mr-2 my-2 w-full .bg-blue-600 .hover:bg-blue-700 .focus:ring-blue-800"
              >
                Invite
              </button>
            </div>
          </div>

          <div className="flex gap-3 flex-col my-1 py-3">
            <span>Jobs</span>
            <div className="flex gap-3">
              <div className="flex h-12 w-12  justify-center items-center bg-blue-600 rounded-lg">
                JG
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Software engineer</span>
                <span>Actofit</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-12 w-12  justify-center items-center bg-blue-600 rounded-lg">
                JG
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Software engineer</span>
                <span>Actofit</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-col my-1 py-3">
            <span>Projects</span>
            <div className="flex gap-3">
              <div className="flex h-12 w-12  justify-center items-center bg-blue-600 rounded-lg">
                JG
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Software engineer</span>
                <span>Actofit</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-12 w-12  justify-center items-center bg-blue-600 rounded-lg">
                JG
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Software engineer</span>
                <span>Actofit</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;

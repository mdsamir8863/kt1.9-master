import { useState } from "react";
import { useSelector } from "react-redux";

const After_profile = ({ handle_user_award_n_achievement_pop_up }) => {
  const { user } = useSelector((e) => e.user_reducer);
  const [user_education, set_user_education] = useState(false);
  const [user_exp, set_user_exp] = useState(false);
  const [user_projects, set_user_projects] = useState(false);

  const user_education_slice = () => {
    if (!user_education) {
      return (
        <>
          {user?.education.slice(0, 2).map((e, i) => (
            <div key={i} className="flex w-full gap-2 my-5">
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {user?.education?.map((e, i) => (
            <div key={i} className="flex w-full gap-2 my-5">
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  const user_exp_slice = () => {
    if (!user_exp) {
      return (
        <>
          {user?.experience?.slice(0, 2).map((e, i) => (
            <div key={i} className="flex w-full gap-2 my-5">
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {user?.experience?.map((e, i) => (
            <div key={i} className="flex w-full gap-2 my-5">
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  const user_projects_slice = () => {
    if (!user_projects) {
      return (
        <>
          {user?.projects?.slice(0, 2).map((e, i) => (
            <div key={i} className="flex w-full gap-2 my-5">
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
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {user?.projects?.map((e, i) => (
            <div key={i} className="flex w-full gap-2 my-5">
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
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">{e.title}</span>
                <span className="text-[0.7rem]">{e.description}</span>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <>
      <div className="flex  w-full rounded-xl mt-10 gap-2 p-5 bg-white flex-col border shadow-xl">
        <div className="flex justify-between">
          <span className="font-bold text-xl">Education-</span>
          <button
            onClick={() => handle_user_award_n_achievement_pop_up("edu")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add
          </button>
        </div>
        {user_education_slice()}
        <div
          onClick={() => set_user_education((e) => !e)}
          className="flex w-full hover:bg-gray-50 justify-center items-center "
        >
          {user_education ? (
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
        <div className="flex justify-between">
          <span className="font-bold text-xl">Experience-</span>
          <button
            onClick={() => handle_user_award_n_achievement_pop_up("exp")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add
          </button>
        </div>
        {user_exp_slice()}
        <div
          onClick={() => set_user_exp((e) => !e)}
          className="flex w-full hover:bg-gray-50 justify-center items-center "
        >
          {user_exp ? (
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
        <span className="font-bold text-xl">Projects-</span>
        {user_projects_slice()}
        <div
          onClick={() => set_user_projects((e) => !e)}
          className="flex w-full hover:bg-gray-50 justify-center items-center "
        >
          {user_projects ? (
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
    </>
  );
};

export default After_profile;

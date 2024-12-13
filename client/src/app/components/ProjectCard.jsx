/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Axios from "axios";

const ProjectCard = ({ project }) => {
  const [info, Setinfo] = useState(false);
  const [open, set_open] = useState("ALL");
//   const { user } = useSelector((e) => e.user_state_reducer);
const user ={
    role:'individual',
    _id:'8763282'
}
  const [applied, set_applied] = useState(false);
  const dispatch = useDispatch();

  function read_date(e) {
    try {
      const post_date = new Date(e).toLocaleString();
      return String(post_date);
    } catch (error) {
      return "date";
    }
  }

  const [applicant, set_applicant] = useState("applied");

  const find_applied = () => {
    const arraysToCheck = ["stage1", "stage2", "selected"];

    let maxArray = "";
    let maxLength = 0;

    for (const key of arraysToCheck) {
      if (Array.isArray(project[key])) {
        const arrayLength = project[key].length;
        if (arrayLength > maxLength) {
          maxLength = arrayLength;
          maxArray = key;
        }
      }
    }

    console.log("Array with maximum elements:", maxArray);

    for (let i = 0; i < maxLength; i++) {
      if (project?.stage1[i]?.id === user._id) set_applied(true);
      if (project?.stage2[i]?.id === user._id) {
        set_applied(true);
      }
      if (project?.selected[i]?.id === user._id) {
        set_applied(true);
      }
    }
  };

  const apply = () => {
    dispatch({ type: "loading_data", payload: true });
    Axios.put(`/api/v1/apply/project/${project._id}`)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res);
          set_applied(true);
          dispatch({ type: "loading_data", payload: false });
        }

        if (res.data.success == false) {
          dispatch({
            type: "alert_data",
            payload: {
              show: true,
              success: false,
              message: res.data.message || "Some error",
            },
          });
          setTimeout(() => {
            dispatch({
              type: "alert_data",
              payload: { show: false, message: "", success: false },
            });
          }, 2000);
          dispatch({ type: "loading_data", payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: "loading_data", payload: false });
        dispatch({
          type: "alert_data",
          payload: {
            show: true,
            success: false,
            message: err.response.data.message || err.message,
          },
        });
        setTimeout(() => {
          dispatch({
            type: "alert_data",
            payload: { show: false, message: "", success: false },
          });
        }, 2000);
        console.log(err);
      });
  };

  const find_applicant = () => {
    const targetId = user._id;

    // Loop through stage2 array
    for (const item of project.stage2) {
      if (item.id === targetId) {
        set_applicant("stage2");
        console.log("Found in stage2:", item);
        break; // If found, no need to continue searching
      }
    }

    // Loop through selected array
    for (const item of project.selected) {
      if (item.id === targetId) {
        set_applicant("selected");
        console.log("Found in selected:", item);
        break; // If found, no need to continue searching
      }
    }

    // Loop through stage1 array (similar pattern)
    for (const item of project.stage1) {
      if (item.id === targetId) {
        set_applicant("stage1");
        console.log("Found in stage1:", item);
        break; // If found, no need to continue searching
      }
    }
  };

  useEffect(() => {
    // find_applied();
    // find_applicant();
  }, []);

  useEffect(() => {
    // if (project.open_to === "Comp") {
    //   set_open("company");
    // } else if (project.open_to === "Indi") {
    //   set_open("individual");
    // } else {
    //   set_open("ALL");
    // }
  }, []);

  return (
    <div className="flex w-96  gap-4 p-3 phone:gap-2 rounded-lg flex-col  border-2 border-lime-400 m-3 bg-white  shadow-2xl pt-10">
      {!info ? (
        <>
          <span className="text-2xl  font-bold text-gray-700">
            {project?.title}
          </span>
          <span className="text-md text-gray-700 font-bold ">
            <span className="text-lime-500 font-bold">By-</span>
            {project?.poster_name}
          </span>

          <span className=" text-gray-600 w-[99%] text-sm">
            {project?.description}{" "}
          </span>
          <div className="flex pl-0">
            <span className="bg-blue-100 text-blue-700 rounded-xl px-6 py-1">
              {" "}
              {project?.type}
            </span>
          </div>
          <div className="flex  justify-between p-3">
            <div className="flex items-center justify-center flex-col">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-[12px] text-gray-500">
                {project?.duration} months
              </span>
            </div>

            <div className="flex items-center justify-center flex-col">
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
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <span className="text-[12px] text-gray-500">
                {project?.open_to === "Comp" ? "open to companies" : ""}
                {project?.open_to === "Indi" ? "open to Individuals" : ""}
                {project?.open_to === "Both" ? "open to All" : ""}
              </span>
            </div>
            <div className="flex items-center justify-center flex-col">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span className="text-[12px] text-gray-500">
                {project?.location}
              </span>
            </div>
            <div className="flex items-center justify-center flex-col">
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
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-[12px] text-gray-500">
                {project?.budget}
              </span>
            </div>
          </div>
          {open === user?.role || open == "ALL" ? (
            applied ? (
              <button
                type="button"
                className={
                  applicant === "selected"
                    ? "py-2.5 px-5 mr-2 opacity-50 cursor-not-allowed bg-yellow-700 text-white mb-2 text-sm font-medium  focus:outline-none  rounded-full border border-gray-200 "
                    : "py-2.5 px-5 mr-2 opacity-50 cursor-not-allowed bg-green-700 text-white mb-2 text-sm font-medium  focus:outline-none  rounded-full border border-gray-200 "
                }
              >
                {applicant === "stage2" ? "STAGE - 2 " : applicant}
              </button>
            ) : (
              <button
                type="button"
                onClick={apply}
                disabled={user?._id === project?.poster_id}
                className={
                  user?._id === project?.poster_id
                    ? "py-2.5 px-5 mr-2 bg-red-700 text-white mb-2 text-sm font-medium  focus:outline-none  rounded-full border border-gray-200  opacity-40 cursor-not-allowed"
                    : "py-2.5 px-5 mr-2 bg-blue-700 text-white mb-2 text-sm font-medium  focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                }
              >
                Apply
              </button>
            )
          ) : (
            <span className="text-yellow-600 flex gap-2  font-bold text-sm">
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
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              Project is only open for {open}
            </span>
          )}
        </>
      ) : (
        <>
          <div className="w-full py-5 flex-col flex gap-4">
            <span className="flex gap-4">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              watashi@gmail.com
            </span>
            <span className="flex gap-4">
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
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                />
              </svg>
              6745789000
            </span>
            <span className="flex gap-4">
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
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              https://watashitech.com
            </span>
          </div>
        </>
      )}

      <span className="text-md text-gray-700 font-light  flex justify-between">
        {read_date(project?.createdAt)}

        <Link
          to={`/user/${project?.poster_id}`}
          className={` w-24 h-6 flex justify-center cursor-pointer hover:border-2  ${
            !info
              ? "hover:border-b;ue-500 bg-b;ue-100 font-medium text-b;ue-600"
              : "hover:border-red-500 bg-red-100 font-medium text-red-600"
          }  hover:bg-white rounded-xl `}
        >
          {!info ? "more" : "less"}
        </Link>
      </span>
    </div>
  );
};

export default ProjectCard;

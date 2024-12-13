/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const [applied, set_applied] = useState(false);
  const dispatch = useDispatch();
  //   const { user } = useSelector((e) => e.user_state_reducer);
  const [applicant, set_applicant] = useState("applied");

  //   const find_applied = () => {
  //     const arraysToCheck = ["stage1", "stage2", "selected"];

  //     let maxArray = "";
  //     let maxLength = 0;

  //     for (const key of arraysToCheck) {
  //       if (Array.isArray(job[key])) {
  //         const arrayLength = job[key].length;
  //         if (arrayLength > maxLength) {
  //           maxLength = arrayLength;
  //           maxArray = key;
  //         }
  //       }
  //     }

  //     console.log("Array with maximum elements:", maxArray);

  //     for (let i = 0; i < maxLength; i++) {
  //       if (job?.stage1[i]?.id === user._id) set_applied(true);
  //       if (job?.stage2[i]?.id === user._id) {
  //         set_applied(true);
  //       }
  //       if (job?.selected[i]?.id === user._id) {
  //         set_applied(true);
  //       }
  //     }
  //   };

  const apply = () => {
    dispatch({ type: "loading_data", payload: true });
    Axios.put(`/api/v1/job/${job._id}`)
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
        console.log(err);
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
      });
  };

  //   const find_applicant = () => {
  //     const targetId = user._id;

  //     // Loop through stage2 array
  //     for (const item of job.stage2) {
  //       if (item.id === targetId) {
  //         set_applicant("stage2");
  //         console.log("Found in stage2:", item);
  //         break; // If found, no need to continue searching
  //       }
  //     }

  //     // Loop through selected array
  //     for (const item of job.selected) {
  //       if (item?.id === targetId) {
  //         set_applicant("selected");
  //         console.log("Found in selected:", item);
  //         break; // If found, no need to continue searching
  //       }
  //     }

  //     // Loop through stage1 array (similar pattern)
  //     for (const item of job.stage1) {
  //       if (item.id === targetId) {
  //         set_applicant("stage1");
  //         console.log("Found in stage1:", item);
  //         break; // If found, no need to continue searching
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     find_applied();
  //     find_applicant();
  //   }, []);

  return (
    <div className="flex w-96 h-[21rem] gap-4 p-3 phone:gap-2 rounded-lg flex-col  border-2 border-lime-400 m-3 bg-white  shadow-2xl">
      <span className="text-2xl  font-bold text-gray-700">{job.title}</span>
      <Link
        to={`/user/${job.company_id}`}
        className="text-md flex gap-2  text-gray-700 font-bold "
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
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>

        {job.posted_by.name}
      </Link>
      <span className=" text-gray-600 w-[99%] text-sm">{job.description}</span>
      <div className="flex pl-0">
        <span
          className={
            job.type === "HYBRID"
              ? "bg-yellow-100 text-yellow-700 rounded-xl px-6 py-1"
              : "bg-blue-100 text-blue-700 rounded-xl px-6 py-1"
          }
        >
          {" "}
          work from {job.type}
        </span>
      </div>
      <div className="flex  justify-evenly p-3">
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
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <span className="text-[12px] text-gray-500">{job.exp} Years</span>
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

          <span className="text-[12px] text-gray-500">{job.salary}</span>
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
            {job.posted_by.city}
          </span>
        </div>
      </div>
      {applied ? (
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
          onClick={apply}
          type="button"
          className="py-2.5 px-5 mr-2 bg-blue-700 text-white mb-2 text-sm font-medium  focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 .focus:ring-gray-700 .bg-gray-800 .text-gray-400 .border-gray-600 .hover:text-white .hover:bg-gray-700"
        >
          Apply
        </button>
      )}
    </div>
  );
};

export default JobCard;

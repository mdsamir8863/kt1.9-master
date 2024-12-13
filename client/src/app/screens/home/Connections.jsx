import { useEffect } from "react";
import AdWarpper from "../AdWarpper";
import { useDispatch, useSelector } from "react-redux";
import { get_connections } from "../../../redux/action";
import { Link } from "react-router-dom";

const Component = () => {
  const dispatch = useDispatch();
  const { connections } = useSelector((e) => e.connection_reducer);

  useEffect(() => {
    if (!connections) {
      dispatch(get_connections());
    }
  }, [dispatch, connections]);

  return (
    <div className="flex flex-col h-full overflow-scroll py-5">
      <span className="mb-5 text-lg text-gray-700 flex gap-2  font-bold">
        Connections
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
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </span>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 .divide-gray-700"
        >
          {connections &&
            connections.map((e) => (
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

const Connections = AdWarpper(Component);

export default Connections;

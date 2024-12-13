import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/action";

const Navbar = () => {
  const [tab, set_tab] = useState(location.pathname);
  const dispatch = useDispatch();

  const handle_logout_action=()=>{
    const action = confirm('Are you sure, You wanna Logout ?');
    console.log(action);
    if(action){
      dispatch(logout())
    }
  }

  const all_nav = [
    {
      name: "Home",
      nav_to: "/home",
    },
    {
      name: "Connection",
      nav_to: "/connection",
    },
    {
      name: "Search",
      nav_to: "/search",
    },
    {
      name: "Message",
      nav_to: "/message",
    },
    {
      name: "Jobs",
      nav_to: "/jobs",
    },
    {
      name: "Projects",
      nav_to: "/projects",
    },
    {
      name: "Profile",
      nav_to: "/profile",
    },
  ];

  useEffect(() => {
    set_tab(location.pathname);
  }, [tab]);

  return (
    <nav className="w-full  bg-main justify-center fixed top-0 z-30 items-center flex">
      <div className="flex w-[95%] py-5  rounded-md bg-main justify-between">
        <span className="w-24 uppercase font-bold text-xl text-white flex justify-center items-center ">
          Kitelle
        </span>

        <div className="flex text-sm  items-center gap-7 mr-10">
          {all_nav.map((e, i) =>
            tab == `${e.nav_to}` ? (
              <Link
                key={i}
                to={e.nav_to}
                className="text-lime-900  font-bold "
                onClick={() => set_tab(e.name)}
              >
                {e.name}
              </Link>
            ) : (
              <Link
                key={i}
                to={e.nav_to}
                className="text-white hover-underline-animation"
                onClick={() => set_tab(e.name)}
              >
                {e.name}
              </Link>
            )
          )}
          <button
          onClick={handle_logout_action}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 .bg-gray-800 .hover:bg-gray-700 .focus:ring-gray-700 .border-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

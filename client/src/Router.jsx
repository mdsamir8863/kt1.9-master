import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./app/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./app/components/Navbar";
import NewPost from "./app/components/popups/NewPost";
import { fetch_me } from "./redux/action";
import Comment from "./app/components/popups/Comment";

const Login = lazy(() => import("./app/screens/startup/Login"));
const RegisterIndividual = lazy(() =>
  import("./app/screens/startup/RegisterIndividual")
);
const RegisterCompany = lazy(() =>
  import("./app/screens/startup/RegisterCompany")
);
const NotFound = lazy(() => import("./app/screens/NotFound"));
const Landing = lazy(() => import("./app/screens/startup/Landing"));
const Home = lazy(() => import("./app/screens/home/Home"));
const Connections = lazy(() => import("./app/screens/home/Connections"));
const Search = lazy(() => import("./app/screens/home/Search"));
const Message = lazy(() => import("./app/screens/home/Message"));
const Jobs = lazy(() => import("./app/screens/home/Jobs"));
const Projects = lazy(() => import("./app/screens/home/Projects"));
const Profile = lazy(() => import("./app/screens/home/Profile"));
const User = lazy(() => import("./app/screens/home/User"));

const Router = () => {
  const dispatch = useDispatch();
  const [all_comments, set_all_comments] = useState([]);
  const [current_post_id, set_current_post_id] = useState("");
  const [comment_pop, set_comment_pop] = useState(false);
  const user = useSelector((e) => e.user_reducer);
  const { loading } = useSelector((e) => e.load_reducer);

  //pop up counters
  const [new_post, set_new_post] = useState(false);

  useEffect(() => {
    if (user?.error) {
      if (user?.error?.response?.data?.message) {
        const message = user?.error?.response?.data?.message;
        if (typeof message == "string") {
          toast.error(message || "Invalid request");
        } else {
          toast.error(message.message);
        }
      } else if (user?.error?.message) {
        toast.error(user.error.message);
      }

      dispatch({ type: "clear_error" });
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetch_me());
  }, []);

  console.log(user);
  return (
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      {user?.loading || loading ? <Loader /> : ""}
      {comment_pop ? (
        <Comment
        Home={true}
          all_comments={all_comments}
          post_id={current_post_id}
          toggle={() => set_comment_pop((e) => !e)}
        />
      ) : (
        ""
      )}

      {new_post ? <NewPost toggle_post={() => set_new_post((e) => !e)} /> : ""}
      {user?.user ? <div className="flex h-[5rem]"></div> : ""}
      {user?.user ? <Navbar /> : ""}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              !user?.user ? (
                <Landing />
              ) : (
                <Home
                  set_all_comments={set_all_comments}
                  set_current_post_id={set_current_post_id}
                  set_comment_pop={set_comment_pop}
                  toggle_post={() => set_new_post((e) => !e)}
                />
              )
            }
          />
          <Route
            path="/login"
            element={
              user?.user ? (
                <Home
                  set_all_comments={set_all_comments}
                  set_current_post_id={set_current_post_id}
                  set_comment_pop={set_comment_pop}
                  toggle_post={() => set_new_post((e) => !e)}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/individual/register"
            element={
              user?.user ? (
                <Home toggle_post={() => set_new_post((e) => !e)} />
              ) : (
                <RegisterIndividual />
              )
            }
          />
          <Route
            path="/company/register"
            element={
              user?.user ? (
                <Home
                  set_all_comments={set_all_comments}
                  set_current_post_id={set_current_post_id}
                  set_comment_pop={set_comment_pop}
                  toggle_post={() => set_new_post((e) => !e)}
                />
              ) : (
                <RegisterCompany />
              )
            }
          />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/home"
            element={
              user?.user ? (
                <Home
                  set_all_comments={set_all_comments}
                  set_current_post_id={set_current_post_id}
                  set_comment_pop={set_comment_pop}
                  toggle_post={() => set_new_post((e) => !e)}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/connection"
            element={user?.user ? <Connections /> : <Login />}
          />
          <Route path="/search" element={user?.user ? <Search /> : <Login />} />
          <Route
            path="/message"
            element={user?.user ? <Message /> : <Login />}
          />
          <Route path="/jobs" element={user?.user ? <Jobs /> : <Login />} />
          <Route path="/user/:id" element={user?.user ? <User /> : <Login />} />
          <Route
            path="/projects"
            element={user?.user ? <Projects /> : <Login />}
          />
          <Route
            path="/profile"
            element={
              user?.user ? (
                <Profile new_post_toggle={() => set_new_post((e) => !e)} />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

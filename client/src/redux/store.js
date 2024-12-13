import { configureStore } from "@reduxjs/toolkit";
import {
  user_reducer,
  load_reducer,
  profile_posts_reducer,
  connection_reducer,
  feed_reducer
} from "./reducer";

const store = configureStore({
  reducer: {
    user_reducer: user_reducer,
    load_reducer: load_reducer,
    profile_posts_reducer: profile_posts_reducer,
    connection_reducer: connection_reducer,
    feed_reducer:feed_reducer
  },
});

export default store;

import { createReducer } from "@reduxjs/toolkit";

const initial_state = {};

export const user_reducer = createReducer(initial_state, {
  user_request: (state) => {
    state.loading = true;
  },

  user_success: (state, action) => {
    (state.loading = false), (state.user = action.payload);
    state.auth = true;
  },

  user_fail: (state, action) => {
    (state.loading = false),
     (state.error = action.payload);
  },

  clear_error: (state) => {
    state.error = null;
  },
});

export const load_reducer = createReducer(initial_state, {
  loading_start: (state) => {
    state.loading = true;
  },

  loading_stop: (state) => {
    state.loading = false;
  },
});

export const profile_posts_reducer = createReducer(initial_state,{
    load_posts:(state,action)=>{
      state.posts = action.payload
    }

})

export const connection_reducer =createReducer(initial_state,{
  load_connections:(state,action)=>{
      state.connections = action.payload
  }
});

export const feed_reducer =createReducer(initial_state,{
  load_feed:(state,action)=>{
      state.feed = action.payload
  }
})
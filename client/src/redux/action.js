/* eslint-disable no-undef */
import axios from "axios";

export const login_user = (email, password) => async (dispatch) => {
  try {
    const API = "/api/user/login";
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API, { email, password });
    console.log("this is dtaa", data);
    if (data?.user) {
      dispatch({ type: "user_success", payload: data.user });
      dispatch({ type: "loading_stop" });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const register_user =
  (name, email, password, user_type, company_type = "", gender = "") =>
  async (dispatch) => {
    try {
      const API = "/api/user/register";
      dispatch({ type: "user_request" });
      const { data } = await axios.post(API, {
        name,
        email,
        password,
        user_type,
        company_type,
        gender,
      });

      if (data?.user) {
        dispatch({ type: "user_success", payload: data.user });
        alert("Created account");
      }
      dispatch({ type: "loading_stop" });
    } catch (error) {
      dispatch({ type: "user_fail", payload: error });
    }
  };

export const fetch_me = () => async (dispatch) => {
  try {
    const API = "/api/user/me";
    dispatch({ type: "user_request" });
    const { data } = await axios.get(API);
    console.log("this is fetched user from Cookie ", data);
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
  } catch (error) {
    dispatch({ type: "user_fail", payload: error });
  }
};

export const update_profile_user = (update, id) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const { name, gender, website, contact, bio, city, about, share_contact } =
      update;
    const API = `/api/user/profile/update/${id}`;
    const { data } = await axios.put(API, {
      name,
      gender,
      website,
      contact,
      city,
      bio,
      about,
      share_contact,
    });
    console.log(data);
    if (data?.data) {
      alert("updated successfully");
      dispatch({ type: "user_success", payload: data.data });
    } else {
      alert("something went wrong in upadte profile user");
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const update_profile_company = (update, id) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const {
      started_in,
      website,
      contact,
      bio,
      employees,
      about,
      revenue,
      share_contact,
      name,
      gender,
      city,
    } = update;
    const API = `/api/user/company/profile/update/${id}`;
    const { data } = await axios.put(API, {
      started_in,
      website,
      contact,
      bio,
      about,
      revenue,
      share_contact,
      name,
      employees,
      gender,
      city,
    });
    console.log(data);
    if (data?.data) {
      alert("updated successfully");
      dispatch({ type: "user_success", payload: data.data });
    } else {
      alert("something went wrong in upadte profile user");
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = "/api/user/logout";
    const { data } = await axios.post(API);
    if (data?.success) {
      dispatch({ type: "user_success", payload: undefined });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const update_awards = (award_data) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = "/api/user/award";
    const { data } = await axios.put(API, { award: award_data });
    console.log(data);
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const update_achievements = (achievement_data) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = "/api/user/achievement";
    const { data } = await axios.put(API, { achievement: achievement_data });
    console.log(data);
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const update_edu = (education) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = "/api/user/education";
    const { data } = await axios.put(API, { education });
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const delete_award_ach = (id, matter) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    let API = "";
    if (matter == "award") {
      API = `/api/user/award/${id}`;
    } else {
      API = `/api/user/achievement/${id}`;
    }
    const { data } = await axios.put(API);
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const avatar_change = (image) => async (dispatch) => {
  try {
    const form_data = new FormData();
    console.log(image);
    form_data.set("image", image);
    dispatch({ type: "loading_start" });
    let API = "/api/user/avatar";
    const { data } = await axios.put(API, form_data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const new_post = (new_post_data) => async (dispatch) => {
  try {
    const { description, image, caption } = new_post_data;
    const new_form_data = new FormData();
    new_form_data.set("caption", caption);
    new_form_data.set("description", description);
    new_form_data.set("image", image);
    dispatch({ type: "loading_start" });
    const API = "/api/post";
    await axios.post(API, new_form_data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    location.reload();
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const fetch_my_posts = () => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = "/api/post/my";
    const { data } = await axios.get(API);
    console.log(data);
    if (data?.data) {
      dispatch({ type: "load_posts", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const like_action_ = (id) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = `/api/post/like/${id}`;
    const { data } = await axios.put(API);
    console.log(data);
    dispatch({ type: "loading_stop" });
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const delete_post = (id) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = `/api/post/${id}`;
    await axios.delete(API);
    dispatch({ type: "loading_stop" });
    location.reload();
  } catch (error) {
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const add_comment = (id, comment) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = `/api/post/comment/${id}`;
    await axios.put(API, { comment });
    dispatch({ type: "loading_stop" });
    location.reload();
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const get_connections = () => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = `/api/user/connections`;
    const { data } = await axios.get(API);
    console.log(data);
    if (data?.data) {
      dispatch({ type: "load_connections", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const handle_follow = (id) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = `/api/user/follow/${id}`;
    const { data } = await axios.put(API);
    console.log(data);
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const fetch_feed = () => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = `/api/post/`;
    const { data } = await axios.get(API);
    console.log(data);
    if (data?.data) {
      dispatch({ type: "load_feed", payload: data.data });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

export const report_post = (url, poster_id) => async (dispatch) => {
  try {
    dispatch({ type: "loading_start" });
    const API = "/api/report";
    await axios.post(API, {
      url,
      poster_id,
    });
    dispatch({ type: "loading_stop" });
    alert('added report successfully')
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({ type: "user_fail", payload: error });
  }
};

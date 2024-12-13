
const Post = require("../models/post");

exports.resp = (res, code, action, msg, data) => {
  res.status(code).json({
    success: action,
    message: msg,
    data: data,
  });
};

exports.is_user_liked = async (user_id, post_id) => {
  try {
    const post = await Post.findById(post_id);
    if (!post) {
      throw new Error("No post found");
    }
    const is_liked = post.likes.includes(user_id);
    if (is_liked) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.remove_like = async (user_id, post_id) => {
  try {
    const post = await Post.findById(post_id);
    const post_like_arr = post.likes.filter((e) => String(e) !== String(user_id));
    console.log(post_like_arr);
    await Post.findByIdAndUpdate(post_id, { likes: post_like_arr });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.add_like = async (user_id, post_id) => {
  try {
    const post = await Post.findById(post_id);
    const post_like_arr = [...post.likes, user_id];
    await Post.findByIdAndUpdate(post_id, { likes: post_like_arr });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

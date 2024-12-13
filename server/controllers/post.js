const { resp, is_user_liked, add_like, remove_like } = require("../utils/util");
const Post = require("../models/post");
const User = require("../models/user");
const { upload_image } = require("../utils/upload");
const async_handler = require("../handler/async_handler");
const user = require("../models/user");

exports.post_image = async_handler(async (req, res) => {
  const { caption, description } = req.body;
  const { image } = req.files;
  if (!caption || !description || !image) throw new Error("missing details");
  const key = String(Date.now());
  const post_image = await upload_image(image, key);
  if (!post_image) throw Error("Not able to post on S3 bucket");
  const post_data = {
    owner: req.user._id,
    name: req.user.name,
    avatar: req.user?.avatar?.url,
    image: post_image,
    caption: caption,
    description: description,
  };
  const new_post = await Post.create(post_data);
  const all_posts = JSON.parse(JSON.stringify(req.user.posts));
  const upadted_posts = [...all_posts, new_post._id];
  await User.findByIdAndUpdate(req.user._id, { posts: upadted_posts });
  resp(res, 201, true, "uploaded", new_post);
});

exports.like_action = async_handler(async (req, res) => {
  const is_post_exist = await Post.findById(req.params.id);
  if (!is_post_exist) throw new Error("Post doesn't Exist");
  const is_liked = await is_user_liked(req.user._id, req.params.id);
  if (is_liked) {
    const removed = await remove_like(req.user._id, req.params.id);
    if (removed) {
      const post = await Post.findById(req.params.id);
      return resp(res, 200, true, "unliked post", post);
    }
  }
  const added = await add_like(req.user._id, req.params.id);
  if (added) {
    const post = await Post.findById(req.params.id);
    return resp(res, 200, true, "iked post", post);
  }
});

exports.comment_action = async_handler(async (req, res) => {
  console.log(req.params.id, req.body.comment);
  const is_post_exist = await Post.findById(req.params.id);
  if (!is_post_exist) throw new Error("Post doesn't Exist");

  const comment_exist = await is_post_exist.comments.find(
    (e) => e.user.toString() == req.user._id
  );

  if (comment_exist) {
    comment_exist.comment = req.body.comment;
  } else {
    is_post_exist.comments.push({
      user: req.user._id,
      comment: req.body.comment,
    });
  }
  await is_post_exist.save();
  const post = await Post.findById(req.params.id);
  resp(res, 200, true, "Commented", post);
});

exports.post_delete = async_handler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (String(post.owner) != String(req.user._id))
    throw new Error("NOt authorized to access the resourses");
  await Post.findByIdAndDelete(req.params.id);
  const all_posts = req?.user?.posts.filter(
    (e) => String(e) != String(req.params.id)
  );
  await User.findByIdAndUpdate(req.user._id, { posts: all_posts });
  resp(res, 200, true, "Delete success", {});
});

exports.get_feed = async_handler(async (req, res) => {
  const user = await User.findById(req.user._id);
  let posts = await Post.find({
    owner: {
      $in: user.following,
    },
    block: false,
  })
    .populate("owner comments.user")
    .sort({ createdAt: -1 });

  resp(res, 200, true, "all_clear", posts);
});

exports.my_post = async_handler(async (req, res) => {
  const posts = await Post.find({ owner: req.user._id });
  resp(res, 200, true, "all_clear", posts);
});

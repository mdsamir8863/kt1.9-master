const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  image: String,
  caption: {
    type: String,
    required: [true, "please enter the caption"],
  },
  description: {
    type: String,
    required: [true, "please enter the description"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: String,
  avatar: String,
  block: {
    type: Boolean,
    default: false,
  },
  likes: { type: Array },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      comment: { type: String, required: [true, "please enter the commnet"] },
    },
  ],
});

module.exports = mongoose.model("post", post_schema);

const express = require("express");
const {
  post_image,
  post_delete,
  like_action,
  comment_action,
  my_post,
  get_feed,
} = require("../controllers/post");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, post_image);
router.get("/", auth, get_feed);
router.delete("/:id", auth, post_delete);
router.put("/like/:id", auth, like_action);
router.put("/comment/:id", auth, comment_action);
router.get("/my", auth, my_post);

module.exports = router;

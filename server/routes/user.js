const express = require("express");
const {
  register_account,
  login_account,
  fetch_me,
  logout,
  update_user_profile,
  update_company_profile,
  update_awards,
  update_achievement,
  delete_award,
  delete_achievement,
  update_avatar,
  get_connections,
  search_user,
  get_user_profile,
  follow_action,
  update_education
} = require("../controllers/user");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/register", register_account);
router.post("/login", login_account);
router.get("/me", auth, fetch_me);
router.get("/search", auth, search_user);
router.post("/logout", auth, logout);
router.put("/follow/:id", auth, follow_action);
router.put("/profile/update/:id", auth, update_user_profile);
router.put("/company/profile/update/:id", auth, update_company_profile);
router.put("/award", auth, update_awards);
router.put("/achievement", auth, update_achievement);
router.put("/education", auth, update_education);
router.put("/avatar", auth, update_avatar);
router.put("/award/:id", auth, delete_award);
router.put("/achievement/:id", auth, delete_achievement);
router.get("/connections", auth, get_connections);
router.get("/:id", auth, get_user_profile);


module.exports = router;

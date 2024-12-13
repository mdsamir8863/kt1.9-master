const User = require("../models/user");
const async_handler = require("../handler/async_handler");
const send_token = require("../utils/send_token");
const { resp } = require("../utils/util");
const { upload_image } = require("../utils/upload");
const { update_user } = require("../services/user_services");

exports.register_account = async_handler(async (req, res, next) => {
  const { name, email, password, user_type, company_type, gender } = req.body;

  if (!name || !email || !password || !user_type)
    throw new Error("Missing Details name/email/password");

  let user = await User.findOne({ email });

  if (user) throw new Error("User already exist with this email");

  const post_data = {
    name,
    email,
    password,
    user_type,
    company_type,
    kitelle_recover: password,
    gender,
  };

  user = await User.create(post_data);

  send_token(user, 201, res);
});

exports.login_account = async_handler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) throw new Error("Missing details email/password");

  const user = await User.findOne({ email }).select("+password");

  if (!user) throw new Error("No user Exist on this mail");

  const match_password = await user.matchPassword(password);

  if (!match_password) throw new Error("Invalid User Email or Password");

  send_token(user, 200, res);
});

exports.fetch_me = async_handler(async (req, res, next) => {
  const user = req.user;
  resp(res, 200, true, "all_clear", user);
});

exports.logout = async_handler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.update_user_profile = async_handler(async (req, res) => {
  const user_id = req.user._id;
  const { name, gender, website, contact, bio, city, about, share_contact } =
    req.body;
  console.log(req.body);
  const updated_action = await update_user(user_id, {
    name,
    gender,
    website,
    contact,
    city,
    bio,
    about,
    share_contact,
  });
  if (updated_action) {
    const user = await User.findById(user_id);
    return resp(res, 200, true, "Updated user profile", user);
  }
});

exports.update_company_profile = async_handler(async (req, res) => {
  const user_id = req.user._id;
  const {
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
  } = req.body;
  const updated_action = await update_user(user_id, {
    started_in,
    website,
    contact,
    employees,
    bio,
    about,
    revenue,
    share_contact,
    name,
    gender,
    city,
  });
  if (updated_action) {
    const user = await User.findById(user_id);
    return resp(res, 200, true, "Updated profile", user);
  }
});

exports.update_avatar = async_handler(async (req, res) => {
  const key = String(Date.now());
  const avatar_link = await upload_image(req.files.image, key);
  console.log("avatar link", avatar_link);
  if (!avatar_link) {
    return resp(res, 403, true, "failed", {});
  }
  const avatar = {
    public_id: key,
    url: avatar_link,
  };
  await User.findByIdAndUpdate(req.user._id, { avatar });
  const updated_user = await User.findById(req.user._id);
  resp(res, 200, true, "Updated Avatar", updated_user);
});

exports.update_awards = async_handler(async (req, res) => {
  const { award } = req.body;
  const user = await User.findById(req.user._id);
  const all_awards = JSON.parse(JSON.stringify(user.awards));
  all_awards.push(award);
  await User.findByIdAndUpdate(req.user._id, { awards: all_awards });
  const updated_user = await User.findById(req.user._id);
  resp(res, 200, true, "updated award", updated_user);
});

exports.update_achievement = async_handler(async (req, res) => {
  const { achievement } = req.body;
  const user = await User.findById(req.user._id);
  const all_achievement = JSON.parse(JSON.stringify(user.achievements));
  all_achievement.push(achievement);
  await User.findByIdAndUpdate(req.user._id, { achievements: all_achievement });
  const updated_user = await User.findById(req.user._id);
  resp(res, 200, true, "updated award", updated_user);
});

exports.update_education = async_handler(async (req, res) => {
  const { education } = req.body;
  const all_education = JSON.parse(JSON.stringify(req.user.education));
  all_education.push(education);
  await User.findByIdAndUpdate(req.user._id, { education: all_education });
  const updated_user = await User.findById(req.user._id);
  resp(res, 200, true, "updated award", updated_user);
});

exports.update_experience = async_handler(async (req, res) => {
  const { experience } = req.body;
  const all_experience = JSON.parse(JSON.stringify(req.user.experience));
  all_experience.push(experience);
  await User.findByIdAndUpdate(req.user._id, { experience: all_experience });
  const updated_user = await User.findById(req.user._id);
  resp(res, 200, true, "updated award", updated_user);
});

exports.search_user = async_handler(async (req, res) => {
  const users = await User.find({
    name: { $regex: req.query.name, $options: "i" },
  });
  const update_users = users.filter(
    (e) => String(e._id) != String(req.user._id)
  );

  console.log(update_users);
  resp(res, 200, true, "all_clear", update_users);
});

exports.get_user_profile = async_handler(async (req, res) => {
  const user = await User.findById(req.params.id).populate(
    "posts followers following"
  );
  if (user) {
    return resp(res, 200, true, "all_clear", user);
  }
  resp(res, 200, true, "No user found", {});
});

exports.follow_action = async_handler(async (req, res) => {
  const follow_user = await User.findById(req.params.id);
  if (!follow_user) throw new Error("User doesnt exist");
  if (
    req.user.following.map((e) => String(e)).includes(String(req.params.id))
  ) {
    const index = req.user.following
      .map((e) => String(e))
      .indexOf(req.params.id);
    const following = JSON.parse(JSON.stringify(req.user.following));
    following.splice(index, 1);
    console.log(following);
    await User.findByIdAndUpdate(req.user._id, { following });

    const index_ = follow_user.followers.indexOf(String(req.user._id));
    const followers = JSON.parse(JSON.stringify(follow_user.followers));
    followers.splice(index_, 1);
    await User.findByIdAndUpdate(req.params.id, { followers });
    const act_user = await User.findById(req.user._id);
    return resp(res, 200, true, "all_clear", act_user);
  }

  const user = await User.findById(req.user._id);
  await user.following.push(req.params.id);
  await follow_user.followers.push(req.user._id);
  await follow_user.save();
  await user.save();
  resp(res, 200, true, "all_clear", user);
});

exports.delete_award = async_handler(async (req, res) => {
  const { id } = req.params;
  // arr.splice(index, 1);
  const awards = JSON.parse(JSON.stringify(req.user.awards));
  awards.splice(id, 1);
  console.log(awards);
  await User.findByIdAndUpdate(req.user._id, { awards: awards });
  const user = await User.findById(req.user._id);
  resp(res, 200, true, "all_clear", user);
});

exports.delete_achievement = async_handler(async (req, res) => {
  const { id } = req.params;
  // arr.splice(index, 1);
  const achievements = JSON.parse(JSON.stringify(req.user.achievements));
  achievements.splice(id, 1);
  await User.findByIdAndUpdate(req.user._id, { achievements: achievements });
  const user = await User.findById(req.user._id);
  resp(res, 200, true, "all_clear", user);
});

exports.get_connections = async_handler(async (req, res) => {
  const users = await User.find();
  const all_followings = req.user.following.map((e) => String(e));
  const all_users = users.filter((e) => {
    if (!all_followings.includes(String(e._id))) {
      return e;
    }
  });
  const final_users = all_users.filter(
    (e) => String(e._id) != String(req.user._id)
  );
  resp(res, 200, true, "all_clear", final_users);
});

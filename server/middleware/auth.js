const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { resp } = require("../utils/util");
const async_handler = require("../handler/async_handler");

exports.auth = async_handler(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return resp(res, 403, false, "Login to access");
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData._id);
  if (req.user) {
    return next();
  } else {
    return resp(res, 500, false, "No token", {});
  }
});

exports.company = async_handler(async (req, res, next) => {
  if (req.user.user_type != "company")
    return resp(res, 403, false, "Resource only available for company");
  next();
});

exports.individual = async_handler(async (req, res, next) => {
  if (req.user.user_type != "individual")
    return resp(res, 403, false, "Resource only available for company");
  next();
});

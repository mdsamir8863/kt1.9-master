const User = require("../models/user");

exports.update_user = async (id, data) => {
  try {
    await User.findByIdAndUpdate(id, data);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

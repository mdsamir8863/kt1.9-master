const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name "],
    maxLength: [30, "name cannot exceed 30 char"],
    minLength: [4, "name should have more than 5 char"],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  gender: String,
  email: {
    type: String,
    required: [true, "please enter the email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter the password"],
    select: false,
  },
  kitelle_recover: { type: String, select: false },
  job_or_project: { type: String, default: null },
  job_or_project_time_validation: { type: Date, default: null },
  avatar: {
    public_id: String,
    url: String,
  },
  share_contact: Boolean,
  liked_posts: Array,
  bio: String,
  contact: String,
  projects: Number,
  city: String,
  website: String,
  achievements: Array,
  awards: Array,
  status: Boolean,
  about: String,
  project_applied: { type: Number, default: 0 },
  project_time_validation: Date,
  project_applied: Array,
  createdAt: { type: Date, default: Date.now },
  varified: { type: String, default: "unvarified" },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  user_type: String,

  // inidiviual schema
  job_applied: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
    },
  ],
  education: Array,
  job_applied_number: { type: Number, default: 0 },
  job_time_validation: Date,
  experience: Array,

  //company schema
  company_type: String,
  revenue: String,
  started_in: Number,
  employees: Number,
  job_Posted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
    },
  ],
  company_type: String,
});

user_schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

user_schema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

user_schema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("user", user_schema);

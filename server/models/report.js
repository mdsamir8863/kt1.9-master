const mongoose = require("mongoose");

const report_schema = new mongoose.Schema({
  poster_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  url: String,
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("report", report_schema);

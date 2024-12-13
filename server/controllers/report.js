const async_handler = require("../handler/async_handler");
const  { resp } = require("../utils/util");
const Report = require("../models/report");

exports.create_report = async_handler(async (req, res) => {
  const { poster_id, url } = req.body;
  if (!poster_id || !url) throw new Error("missing details");
  const data = {
    poster_id,
    url,
    reporter: req.user._id,
  };
  await Report.create(data);
  resp(res, 200, true, "all_clear", {});
});

exports.get_all_reports = async_handler(async (req, res) => {
  const reports = Report.find();
  resp(res, 200, true, "all_clear", reports);
});

const express = require("express");
const { create_report, get_all_reports } = require("../controllers/report");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, create_report);
router.get("/", auth,  get_all_reports);

module.exports = router;

const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");
const fileupload = require("express-fileupload");

// require dotenv for environment variable
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

//built-in-middlewares
app.use(express.json());
app.use(cookie_parser());
app.use(fileupload());

// importing routes
const user = require("./routes/user");
app.use("/api/user", user);

const post = require("./routes/post");
app.use("/api/post", post);

const report = require("./routes/report");
app.use("/api/report", report);

module.exports = app;

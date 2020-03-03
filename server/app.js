const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const axios = require("axios");
let app = express();

// const leaveRoute = require("./routes/leave");
// const projectRoute = require("./routes/project");
// const taskRoute = require("./routes/task");

app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ msg: "Welcome to the new Agusto CRMS ML API." });
});

app.use(function(err, req, res, next) {
  res.status(500).send("Something wrong broke!");
  console.log(err);
});

// const db = require("./config/config");
// const Leave = require("./models/staff_leave");

// db.conn
//   .sync()
//   .then(() => {
//     console.log("Drop and Resync ");
//   })
//   .catch(err => console.log(err));

// app.use("/leave", leaveRoute);
// app.use("/project", projectRoute);
// app.use("/task", taskRoute);

module.exports = {
  path: "/api/v1",
  handler: app
};

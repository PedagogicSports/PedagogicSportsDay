const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const HomeTemplate = require("./json/home.json");
const HeadsTemplate = require("./json/heads.json");
const SchedulesTemplate = require("./json/schedule.json");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    sports: HomeTemplate.sports,
  });
});

app.get("/sport/:sport", (req, res) => {
  const title = req.params.sport;

  res.render("sport", {
    title: `${title.charAt(0).toUpperCase()}${title.substring(1)}`,
    heads: HeadsTemplate[title],
    schedule: SchedulesTemplate[title],
  });
});

app.get("/announcements", (req, res) => {
  res.render("announcement");
});

app.get("/creators", (req, res) => {
  res.render("creator");
});

app.listen(process.env.PORT || 1000, () => {
  console.log("ACTIVE | PORT: 1000");
});

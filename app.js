const express = require("express");
const ejs = require("ejs");
const facts = require(__dirname + "/src/facts.js");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  var randomFact = facts.getFacts()[Math.floor(Math.random() * facts.getFacts().length)];

  res.render("index", {randomFact});
});

app.listen(port, () => {
  console.log("App listening at http://localhost:" + port);
});

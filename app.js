const express = require("express");
const path = require("path");

const port = 3333;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Hello World",
    version: "0.0.0",
  });
});

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});

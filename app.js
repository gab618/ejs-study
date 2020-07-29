const express = require("express");
const path = require("path");

const indexRoute = require("./routes/index");
const curriculoRoute = require("./routes/curriculo");

const port = 3333;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRoute);
app.get("/curriculo", curriculoRoute);

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});

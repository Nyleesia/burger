const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
require("dotenv").config();
const path = require("path")

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public")));

const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
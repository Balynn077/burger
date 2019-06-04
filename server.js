const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}) );
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/public"));

const routes = require("./controllers/burgers-controller.js");

app.use("/", routes);
app.use("/:id", routes);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
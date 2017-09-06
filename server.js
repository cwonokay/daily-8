const express           = require("express");
const path              = require("path");
const routes            = require("./routes/index");
const morgan            = require("morgan");
const bodyParser        = require("body-parser");
const model             = require("./models/index");


const app = express();

app.use(express.static(path.join(__dirname, "public")));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(morgan("dev"));



app.use(routes);

app.listen(3000, function() {
  console.log("App is running on localhost:3000");
});

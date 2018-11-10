var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// \/ \/ \/ \/ \/ \/ from friend finder, pretty sure i don't need apis.
// require("./app/routing/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
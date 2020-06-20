const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const port = 8000;
const app = express();
const connection = require('./config/mysql');
app.use(expressLayouts);
app.use(express.urlencoded());

app.use("/", require("./routes/index"));
app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.listen(port, function(err) {
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log("Server is up and running at port", port);
});
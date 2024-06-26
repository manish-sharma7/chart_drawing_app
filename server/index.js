const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chart Drawing application." });
});

// set port, listen for requests
require("./app/XYdata.routes.js")(app);
app.listen(9000, () => {
  console.log("Server is running on port 9000.");
});

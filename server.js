console.log("Node started");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/server.js", (req, res) => {
  var user = req.body.user;
  var pswd = req.body.pswd;
  if (user == "kumar" && pswd == "1234") {
    res.send("<h1>Login Successful </h1> <a href='/'>Go back</a>");
  } else {
    res.send("<h1>Login Failed </h1> <a href='/'>Go back</a>");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

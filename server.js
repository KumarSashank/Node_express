// import { authenticateUser } type='module' from "./database";

console.log("Node started");

const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

const { createConnection } = require("mysql");

const connection = createConnection({
  host: "localhost",
  user: "Kumar",
  password: "Kumar@2003",
  database: "test_db",
});

var database_connections_status = "";

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    database_connections_status = "<h3>Error connecting to Db</h3>";
    return;
  }
  console.log("Connection established");
  database_connections_status = "<h3>Connection established</h3>";
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/login.html");
  res.send(
    `
  <body>
    <h1>Registration</h1>
    ` +
      database_connections_status +
      `
    <form action="/server.js" method="post">
        <input type="text" placeholder="username" name="user">
        <input type="text" placeholder="name" name="name">
        <input type="password" placeholder="password" name="pswd">
        <input type="submit" value="submit">
    </form>
</body>`
  );
});

app.post("/server.js", (req, res) => {
  var user = req.body.user;
  var pswd = req.body.pswd;
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);
const cors = require("cors");

const app = express();

// configuration =========================
app.set("port", process.env.PORT || 8080);
app.use(cors());
app.get("/", (req, res) => {
  res.send("Root");
});

app.get("/users", (req, res) => {
  connection.query("SELECT * from User", (error, rows) => {
    let dataList = [];

    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

# memojang

맥북 db 

CREATE DATABASE IF NOT EXISTS my_db;

USE my_db;

CREATE TABLE IF NOT EXISTS Users (
id VARCHAR(45) NOT NULL,
password VARCHAR(45) NOT NULL,
PRIMARY KEY (id));

INSERT INTO Users (id, password) VALUES ('ungmo2', '1234');

SELECT password FROM Users WHERE id='ungmo2';

맥미니 셋팅

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);
const cors = require("cors");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configuration =========================
app.set("port", process.env.PORT || 8080);
app.use(cors());
app.get("/", (req, res) => {
  res.send("Root");
});

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS", "DELETE"],
  })
);

app.get("/users", (req, res) => {
  connection.query("SELECT * from User", (error, rows) => {
    let dataList = [];

    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.post("/signup", (req, res) => {
  console.log("@@@@@", req.body);
  // connection.query("INSERT INTO()")
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

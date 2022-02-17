const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./config/database.js");
const connection = mysql.createConnection(dbconfig);
const cors = require("cors");
const router = express.Router();
const app = express();

const bodyParser = require("body-parser");
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
  connection.query("SELECT * from user_info", (error, rows) => {
    let dataList = [];

    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.post("/signup", (req, res) => {
  console.log("@@@@@", req.body, req.params);
  // connection.query("INSERT INTO()")
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

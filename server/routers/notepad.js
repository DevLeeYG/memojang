const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');
const connection = mysql.createConnection(dbconfig);

router.post('/notepad/save', (req, res) => {
  console.log(req.body);
  const { userKey, text } = req.body;

  const query = `INSERT INTO Note(user_key,data) VALUES(${userKey},'${text}')`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send('저장완료');
    }
  });
});

module.exports = router;

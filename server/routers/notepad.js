const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');
const connection = mysql.createConnection(dbconfig);

router.get('/notepad/list', (req, res) => {
  const { userkey } = req.query;
  const query = `SELECT * FROM Note WHERE user_key = ${userkey}`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send(result);
    }
  });
});

router.post('/notepad/save', (req, res) => {
  console.log(req.body);
  const { userKey, title, text } = req.body;

  const query = `INSERT INTO Note(user_key,title,data) VALUES(${userKey},'${title}','${text}')`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send('저장완료');
    }
  });
});

module.exports = router;

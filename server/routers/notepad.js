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

router.delete('/notepad/delete', (req, res) => {
  const { id } = req.body;

  const query = `DELETE FROM Note WHERE id = ${id}`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send('삭제');
    }
  });
});

router.post('/notepad/save', (req, res) => {
  let data = req.body;

  let userKey = data.userKey;
  let title = data.title;
  let text = data.text;
  let date = data.date;
  let today = new Date(date);

  const query = `INSERT INTO Note(user_key,title,data) VALUES(${userKey},'${title}','${text}')`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send('저장완료');
    }
  });
});

module.exports = router;

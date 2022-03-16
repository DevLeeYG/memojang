const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');
const connection = mysql.createConnection(dbconfig);

router.get('/notepad/list', (req, res) => {
  const { userKey } = req.query;

  const query = `SELECT * FROM Note WHERE user_key = '${userKey}'`;

  connection.query(query, (err, result) => {
    if (err) res.status(400).send('안돼');
    else {
      res.status(200).send(result.reverse());
    }
  });
});

router.put('/notepad/editpost', (req, res) => {
  const { userKey, title, text, selectId } = req.body.data;

  const query = `UPDATE Note SET title='${title}' , data='${text}' WHERE  id = ${selectId} and user_key = ${userKey} `;

  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send('수정완료');
    }
  });
});

router.delete('/notepad/delete', (req, res) => {
  const id = req.body.data.id;

  const userKey = req.body.data.userKey;

  const query = `DELETE FROM Note WHERE id = ${id}`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      const query = `SELECT * FROM WHERE user_key = ${userKey}`;
      connection.query(query, (err, result) => {
        res.status(200).send(result);
      });
    }
  });
});

router.post('/notepad/save', (req, res) => {
  let data = req.body;
  let userKey = data.userKey;
  let title = data.title;
  let text = data.text;
  let date = data.date;

  const today = new Date(date).toISOString().substr(0, 10);

  console.log('date', today);

  const query = `INSERT INTO Note(user_key,title,data,date) VALUES(${userKey},'${title}','${text}','${today}')`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send('저장완료');
    }
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');

const connection = mysql.createConnection(dbconfig);
router.get('/account', function (req, res) {
  res.send('Home');
});

router.post('/account', function (req, res) {
  let data = req.body; //데이타 변함
  const imp = data.values.import;
  const exp = data.values.expen;
  const Price = data.values.price;
  const userKey = data.userKey;
  const date = data.dateDate;
  console.log('req', req.body);
  if (imp) {
    connection.query(
      SQL`INSERT INTO Account(user_key,date,import,iprice) VALUES(${userKey},${date},${imp},${Price}) `,
    );
    res.status(200).send('저장완료');
  } else if (exp) {
    connection.query(
      SQL`INSERT INTO Account(user_key,date,expendive,eprice) VALUES(${userKey},${date},${exp},${Number(
        '-' + Price,
      )}) `,
    );
    res.status(200).send('저장완료');
  }
});

module.exports = router;

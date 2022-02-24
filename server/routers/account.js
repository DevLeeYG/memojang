const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');

const connection = mysql.createConnection(dbconfig);
router.get('/account', function (req, res) {
  const { userKey, dateDate } = req.query;

  const data = SQL`SELECT * FROM Account`;
  console.log(data);

  connection.query(data, (err, result) => {
    let selectData = [];

    if (err) {
      res.status(400).send('데이터를 불러오지 못했습니다');
    } else {
      for (let values of result) {
        selectData.push(values);
      }
      // res.status(200).send(selectData);
      res.status(200).send(selectData);
    }
  });
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

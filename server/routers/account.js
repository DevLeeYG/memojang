const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');
const connection = mysql.createConnection(dbconfig);

router.get('/account/total/budget', function (req, res) {
  const { userKey } = req.query;
  const findMyTotal = `Select * FROM Money WHERE user_key = ${userKey}`;

  const query = `${findMyTotal}`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send(result);
    }
  });
});

router.get('/account/total/money/spend', (req, res) => {
  const { userKey } = req.query;
  const total = `SELECT * FROM Account WHERE user_key = ${userKey};`;
  const query = `${total}`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    else {
      res.status(200).send(result);
    }
  });
});

router.get(`/account/calendar/data`, (req, res) => {
  const { userKey, date } = req.query;

  const yearData = new Date(date).toISOString().slice(0, 4);
  const findYear = `SELECT * FROM Account WHERE user_key=${userKey} and YEAR(date)=${yearData};`;

  const query = `${findYear}`;

  connection.query(query, (err, result) => {
    console.log('data', result);
    if (err) throw err;
    res.status(200).send(result);
  });
});

router.post('/account', function (req, res) {
  console.log('reqreq', req.body);

  let data = req.body; //데이타 변함
  const imp = data.values.import;
  const exp = data.values.expen;
  const Price = data.values.price;
  const userKey = data.userKey;
  const date = data.date;
  const today = new Date(date);
  const findData = SQL`SELECT * FROM Account WHERE user_key=${userKey} and DATE(date)=${today}`;

  console.log('12313', data);

  if (imp) {
    connection.query(
      SQL`INSERT INTO Account(user_key,date,import,iprice) VALUES(${userKey},${today},${imp},${Price}) `,
    );
    res.status(200).send('저장완료');
  } else if (exp) {
    connection.query(
      SQL`INSERT INTO Account(user_key,date,expendive,eprice) VALUES(${userKey},${today},${exp},${Number(
        '-' + Price,
      )}) `,
    );
    res.status(200).send('저장완료');
  }
});

router.put('/money/total', (req, res) => {
  const { total, userKey } = req.body;
  const numberTT = Number(total);
  const TTQuery = SQL`UPDATE Money SET money = ${numberTT}`;
  const SlectData = SQL`SELECT money FROM Money WHERE user_key=${userKey} `;
  const inserTotal = SQL`INSERT INTO Money(money,user_key) VALUES(${numberTT},${userKey})`;
  const findUser = SQL`SELECT * FROM Money WHERE user_key = ${userKey}`;

  connection.query(findUser, (err, result) => {
    const find = result[0];

    if (!find) {
      connection.query(inserTotal, (err, result) => {
        if (err) {
          res.status(500).send('err');
        } else {
          connection.query(findUser, (err, result) => {
            if (err) {
              res.status(500).send('err!');
            } else {
              connection.query(SlectData, (err, result) => {
                {
                  res.status(200).send(result[0].money.toString());
                }
              });
            }
          });
        }
      });
    } else {
      connection.query(findUser, (err, result) => {
        {
          if (err) res.status(500).send('err!');
          else {
            connection.query(TTQuery, (err, result) => {
              if (err) res.status(500).send('err!');
              else {
                connection.query(SlectData, (err, result) => {
                  {
                    res.status(200).send(result[0].money.toString());
                  }
                });
              }
            });
          }
        }
      });
    }
  });
});

router.delete('/account/delete', (req, res) => {
  const id = req.body.id;

  const deletePost = SQL`DELETE FROM Account WHERE id=${id}`;

  connection.query(deletePost, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send('삭제완료');
    }
  });
});

module.exports = router;

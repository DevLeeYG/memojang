const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');

const connection = mysql.createConnection(dbconfig);

router.get('/account', function (req, res) {
  // const getYmd10 = (date) => {
  //   let d = date;
  //   return (
  //     d.getFullYear() +
  //     '-' +
  //     (d.getMonth() + 1 > 9
  //       ? (d.getMonth() + 1).toString()
  //       : '0' + (d.getMonth() + 1)) +
  //     '-' +
  //     (d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate().toString())
  //   );
  // };
  // .getTimezoneOffset()
  const { userKey, date } = req.query;

  console.log('@@@@@@', req.query);
  const today = new Date(date).toISOString().split('T')[0];

  const data = SQL`SELECT * FROM Account WHERE user_key=${userKey} and DATE(date)=${today}`;

  connection.query(data, (err, result) => {
    let selectData = [];

    if (err) {
      res.status(400).send('데이터를 불러오지 못했습니다');
    } else {
      for (let values of result) {
        selectData.push(values);
      }
      const mapData = selectData.map((el) => {
        return { ...el, date };
      });

      res.status(200).send(mapData);
    }
  });
});

router.post('/account', function (req, res) {
  let data = req.body; //데이타 변함
  const imp = data.values.import;
  const exp = data.values.expen;
  const Price = data.values.price;
  const userKey = data.userKey;
  const date = data.date;
  const today = new Date(date).toISOString().split('T')[0];
  const findData = SQL`SELECT * FROM Account WHERE user_key=${userKey} and DATE(date)=${today}`;

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

  // connection.query(TTQuery, (err, result) => {
  //   if (err) {
  //     res.status(500).send('err');
  //   } else {
  //     console.log('@@@@', result);
  //   }
  // });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database.js');
const mysql = require('mysql');
const SQL = require('sql-template-strings');

const connection = mysql.createConnection(dbconfig);

router.get('/account', function (req, res) {
  console.log('afhjksldhgjkas', req);

  const { userKey, date } = req.query;
  const findMyTotal = `Select * FROM Money WHERE user_key = ${userKey}`;
  const today = new Date(date).toISOString().split('T')[0];
  console.log(userKey);

  // const totalData = SQL`SELECT * FROM Account WHERE user_key=${userKey}`;
  // const data = SQL`SELECT * FROM Account WHERE user_key=${userKey} and DATE(date)=${today}`;

  const query =
    `SELECT * FROM Account WHERE user_key=${userKey} and DATE(date)='${today}';` +
    `${findMyTotal};`;

  //  +
  // SQL`SELECT * FROM Account WHERE user_key=${userKey} and DATE(date)=${today};`;
  //   SQL`SELECT * FROM Account WHERE user_key=${userKey};` +

  const selectData = [];

  connection.query(query, (err, result) => {
    // let selectData = [];
    if (err) throw err;
    else {
      for (let values of result) {
        selectData.push(values);
      }

      const mapData = selectData.map((el) => {
        return { ...el, date };
      });
    }
    console.log('1241241412414141', selectData);
    // if (err) {
    //   res.status(400).send('데이터를 불러오지 못했습니다');
    // } else {
    //   for (let values of result) {
    //     selectData.push(values);
    //   }
    //   const mapData = selectData.map((el) => {
    //     return { ...el, date };
    //   });

    //   res.status(200).send(mapData);
    // }
  });

  // connection.query(totalData, (err, result) => {
  //   let selectData = [];

  //   if (err) {
  //     res.status(400).send('데이터를 불러오지 못했습니다');
  //   } else {
  //     for (let values of result) {
  //       selectData.push(values);
  //     }
  //     const mapData = selectData.map((el) => {
  //       return { ...el };
  //     });
  //     console.log('@@@@@', mapData);
  //     res.status(200).send(mapData);
  //   }
  // });

  // const findMyTotal = SQL`Select * FROM Money WHERE user_key = ${userKey}`;
  // const resData = [];

  // connection.query(findMyTotal, (err, result) => {
  //   if (err) throw err;
  //   else {
  //     for (let values of result) {
  //       resData.push(values.money);
  //     }
  //     res.status(200).send({ data: resData[0] });
  //   }
  // });
});

// router.get('/account/total', (req, res) => {
//   const { userKey } = req.query;

//   const totalData = SQL`SELECT * FROM Account WHERE user_key=${userKey}`;
//   connection.query(totalData, (err, result) => {
//     let selectData = [];

//     if (err) {
//       res.status(400).send('데이터를 불러오지 못했습니다');
//     } else {
//       for (let values of result) {
//         selectData.push(values);
//       }
//       const mapData = selectData.map((el) => {
//         return { ...el };
//       });
//       console.log(mapData);
//       res.status(200).send(mapData);
//     }
//   });
// });
// router.get('/money/total', (req, res) => {
//   const { userKey } = req.query;
//   const findMyTotal = SQL`Select * FROM Money WHERE user_key = ${userKey}`;
//   const resData = [];

//   connection.query(findMyTotal, (err, result) => {
//     if (err) throw err;
//     else {
//       for (let values of result) {
//         resData.push(values.money);
//       }
//       res.status(200).send({ data: resData[0] });
//     }
//   });
// });

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

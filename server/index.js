const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');
const cors = require('cors');

const app = express();
const account = require('./routers/account');
const note = require('./routers/notepad');
const SQL = require('sql-template-strings');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8080);
app.use(cors());
app.get('/', (req, res) => {
  res.send('Root');
});

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
  }),
);

app.get('/account/calendar/data', account);
app.get('/money/total', account);
app.get('/account/total/budget', account);
app.get('/account/total/money/spend', account);
app.get('/account', account);
app.post('/account', account);
app.put('/money/total', account);
app.delete('/account/delete', account);
app.post('/login', (req, res) => {
  const { user, password } = req.body;
  const findUser = SQL`SELECT * FROM User WHERE user_name=${user} and user_password=${password}`;

  const userfind = {};

  connection.query(findUser, (err, result) => {
    console.log('reqrer', result);
    for (value of result) {
      userfind.id = value.user_key;
      userfind.username = value.user_name;
      userfind.password = value.user_password;
    }
    if (Object.keys(userfind).length === 0) {
      res.status(404).send('회원정보를 확인해주세요');
    } else if (userfind.username === user && userfind.password === password) {
      res.status(200).send({ id: userfind.id, user: user });
    }
  });
});

app.get('/posts', (req, res) => {
  let data = req.query['0'];
  const findPost = SQL`SELECT * FROM Memos WHERE user_key=${data}`;

  const userPost = {};

  connection.query(findPost, (err, result) => {
    for (value of result) {
      userPost.data = result;
    }
    if (Object.keys(userPost).length < 1) {
      res.status(200).send('데이터를 찾지 못했습니다');
    } else {
      res
        .status(201)
        .send({ data: userPost.data, id: userPost.memo_id, tp: userPost.tp });
    }
  });
});

app.post('/signup', (req, res) => {
  const { user, password } = req.body;
  const array = [];
  const insertUser = SQL`INSERT INTO User(user_name,user_password) VALUES(${user},${password})`;
  connection.query(
    SQL`SELECT * FROM User WHERE user_name=${user}`,
    (err, result) => {
      if (err) alert('로그인에 문제가있습니다 고객센터로 문의하세요');

      for (let value of result) array.push(value.user_name);

      if (array[0] !== undefined) {
        res.status(401).send('이미있는 회원입니다');
        console.log('이미있는 회원');
      } else {
        connection.query(insertUser);
        res.status(200).send('회원가입 완료');
      }
    },
  );
});

app.post('/write', (req, res) => {
  const { userKey, data, tp } = req.body;

  const inserWrite = SQL`INSERT INTO Memos(user_key,data,tp) VALUES(${userKey},${data},${tp})`;
  connection.query(inserWrite, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send('저장완료');
    }
  });
});

app.post('/reqput', (req, res) => {
  const { memoid } = req.body;
  console.log(memoid);
  const putRequest = SQL`UPDATE Memos SET tp=1 WHERE memo_id = ${memoid}`;

  connection.query(putRequest, (err, rsult) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send('변경완료');
    }
  });
});

app.post('/insert', (req, res) => {
  const { id } = req.body;
  const { memoid, data } = req.body;
  const insertPost = SQL`UPDATE Memos SET data=${data} WHERE memo_Id = ${memoid} `;
  if (id) {
    const cancle = SQL`UPDATE Memos SET tp=0 WHERE memo_Id = ${id} `;
    connection.query(cancle, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('취소확인');
      }
    });
  }
  connection.query(insertPost, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      connection.query(SQL`UPDATE Memos SET tp=0 WHERE memo_id=${memoid}`);
      res.status(200).send('변경완료');
    }
  });
});

app.post('/insertcancle', (req, res) => {
  const { id } = req.body;

  if (id) {
    const cancle = SQL`UPDATE Memos SET tp=0 WHERE memo_Id = ${id} `;
    connection.query(cancle, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('취소확인');
      }
    });
  }
});

app.delete('/delete', (req, res) => {
  const memoid = req.body.memoId;

  const deletePost = SQL`DELETE FROM Memos WHERE memo_id=${memoid}`;

  connection.query(deletePost, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send('삭제완료');
    }
  });
});

app.post('/notepad/save', note);

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

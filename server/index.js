const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const cors = require('cors');

const router = express.Router();
const app = express();
const SQL = require('sql-template-strings');
const e = require('express');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configuration =========================
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

app.get('/users', (req, res) => {
  connection.query('SELECT * from User', (error, rows) => {
    let dataList = [];

    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.post('/login', (req, res) => {
  console.log(req);
  // const { user, password } = req.body;
  // const findUser = SQL`SELECT * FROM User WHERE user_namd=${user} and user_password=${password}`;

  // console.log('find', findUser);
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

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

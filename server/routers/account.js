const express = require('express');
const router = express.Router();

router.get('/accouns', function (req, res) {
  res.send('Home');
});

module.exports = router;

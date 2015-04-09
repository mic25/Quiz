var express = require('express');
var router = express.Router();
var data = require('../public/data.js');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz App', questions:data });
});

module.exports = router;

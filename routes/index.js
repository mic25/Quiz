var express = require('express');
var router = express.Router();
data = require('../public/data.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Quiz App',
      questions:data,
      fn: {shuffle:function(array){
          for(var n = 0; n < array.length - 1; n++){
              var k = n + Math.floor(Math.random() * (array.length - n));
              var temp = array[k];
              array[k] = array[n];
              array[n] = temp;
          }
          if(array.length > 15){
              array = array.slice(0,14);
          }
          return array;
        }}
  });
});

module.exports = router;

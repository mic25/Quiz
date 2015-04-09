var express = require('express');
var router = express.Router();
var data = require('../public/data.js');

router.post('/', function(req, res) {
    var id = req.body.id;
    var answers = req.body.answers;
    var response = [];

    for(var i = 0; i < data.length; i++){
        if(data[i].id == id){
            for(var j = 0; j < answers.length; j++) {
                var resp = {};
                resp.key = answers[j].key;
                if(data[i].correct[answers[j].key] == answers[j].value){
                    //console.log('Correct!');
                    resp.value = true;
                }else{
                    //console.log('Wrong!');
                    resp.value = false;
                }
                response.push(resp);
            }
            //console.log(answers);
            //console.log(data[i].correct);
        }
    }
    res.type('json');
    res.send(response);
});

module.exports = router;

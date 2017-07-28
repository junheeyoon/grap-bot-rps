/**
 * Created by dakbutfly on 2017-07-12.
 */
var express = require('express');
var server = express();
var db = require("./users.json").users
var db1 = ({ 
                "result": {
          "isOk": true,
          "user": {
            "age": 25,
            "duty": "좋은 개발자",
            "id": 6,
            "name": "윤준희"
          }
        }
    });
var db2 = ({ 
                "result": {
          "isOk": true,
          "user": {
            "age": 31,
            "duty": "웹 개발자, IOS 개발자, 고수 개발자",
            "id": 4,
            "name": "김청진"
          }
        }
    });
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get('/user/', function (req, res) {
    res.send(db);
});

server.get('/user/:id', function (req, res) {

    for (var i = 0; i < db.length; i++){
    if(db[i].id === parseInt(req.params.id))
    {
        res.send(db[i]);
        return;
    }
    
}
//res.send('123');
});

server.post('/user/', function (req, res) {
  res.send(db1);
});
//['result'].user
server.get('/user/6', function (req, res) {
    res.send(db1['result'].user);
});  
server.delete('/user/:id', function (req, res) {
    res.send(db2);
    db.splice(req.params.id-1,1);    
});

//서버 실행 함수
server.run = function () {
    server.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
};
/*function custonSort(a, b) {
  if(a.id == b.id){ return 0} return  a.id > b.id ? 1 : -1;
}
db.sort(custonSort);
*/
module.exports = server;



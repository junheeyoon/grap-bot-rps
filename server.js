/**
 * Created by dakbutfly on 2017-07-12.
 */
var express = require('express');
var server = express();

server.get('/', function (req, res) {
    res.send('Hello World!');
});

//서버 실행 함수
server.run = function () {
    server.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
};

module.exports = server;



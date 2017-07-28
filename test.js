var db = require('./users.json').users

db.push({
    "name" : "윤준희",
    "age" : 25,
    "duty" : "좋은 개발자"
});

console.log(db[0]);

console.log(db[5]);

console.log()

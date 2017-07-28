/**
 * Created by dakbutfly on 2017-07-12.
 */
const chai = require('chai');
chai.use(require('chai-things'))
const expect = chai.expect;

const request = require('request-promise-native');

const server = require("../server");
const users = require("../users.json").users;

describe('봇 서버 테스트', function() {
    before(() => {
        server.run();
    });

    it('GET /user : 등록된 유저 정보 보여주기', (done) => {
        request.get({
            uri : "http://localhost:3000/user",
            json : true
        })
            .then((body) => expect(body).to.be.deep.equal(users))
            .then(() => done())
            .catch(done);
    });

    it('GET /user/1 : 해당 아이디의 유저 정보 보여주기', (done) => {
        request.get({
            uri : "http://localhost:3000/user/1",
            json : true
        })
            .then((body) => expect(body).to.be.deep.equal(users[0]))
            .then(() => done())
            .catch(done);
    });


    it('POST /user : 유저 정보 등록', (done) => {
        request.post({
            uri : "http://localhost:3000/user",
            json : true,
            body : {
                "name" : "윤준희",
                "age" : 25,
                "duty" : "좋은 개발자"
            }
        })
            .then((body) => expect(body).to.be.deep.equal({ result : {
                isOk : true , user : {
                    "id" : 6,
                    "name" : "윤준희",
                    "age" : 25,
                    "duty" : "좋은 개발자"
                }
            }}))
            .then(() => request.get({uri : "http://localhost:3000/user/6", json : true}))
            .then((body) => expect(body).to.be.deep.equal(
                {
                    "id" : 6,
                    "name" : "윤준희",
                    "age" : 25,
                    "duty" : "좋은 개발자"
                }
            ))
            .then(() => done())
            .catch(done);
    });

    it('Delete /user/4 : 해당 아이디의 유저 정보 보여주기', (done) => {
        request.delete({
            uri : "http://localhost:3000/user/4",
            json : true
        })
            .then((body) => expect(body).to.be.deep.equal({ result : {
                isOk : true , user : {
                    "id" : 4,
                    "name" : "김청진",
                    "age" : 31,
                    "duty" : "웹 개발자, IOS 개발자, 고수 개발자"
                }
            }}))
            .then(() => request.get({uri : "http://localhost:3000/user", json : true}))
            .then((body) => expect(body).not.include.a.item.property("id", 4))
            .then(() => done())
            .catch(done);
    })


});
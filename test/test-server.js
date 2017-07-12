/**
 * Created by dakbutfly on 2017-07-12.
 */
const chai = require('chai');
const expect = chai.expect;

const request = require('request-promise-native');

const server = require("../server");

describe('봇 서버 테스트', function() {
    before(() => {
        server.run();
    });

    it('server 가 있음', (done) => {
        request.get("http://localhost:3000/")
            .then((res) => expect(res).to.be.a("string"))
            .then(() => done());
    });
});
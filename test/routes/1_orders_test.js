let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../../app');
//Our parent block
describe('Orders', () => {
 describe('/GET all Orders', () => {
     it('it should GET all the Orders without netting', (done) => {
     chai.request(server)
       .get('/orders')
       .end((err, res) => {
             (res).should.have.status(200);
             (res).should.be.a('object');
             console.log(" ---------------end -----------");
             done();
          });
       });
  });
});
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../../app');
//Our parent block
describe('Net Orders', () => {
 describe('/GET net orders', () => {
     console.log("sadasd");
     it('it should GET all the net orders', (done) => {
     chai.request(server)
       .get('/net')
       .end((err, res) => {
             (res).should.have.status(200);
             (res).should.be.a('object');
             console.log(" ---------------end -----------");
             done();
          });
       });
  });
});
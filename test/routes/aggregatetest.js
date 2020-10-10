let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../../app');
//Our parent block
describe('Aggregate Orders', () => {
 describe('/GET Aggregated orders', () => {
     console.log("sadasd");
     it('it should GET all the Aggregated orders', (done) => {
     chai.request(server)
       .get('/aggregate')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             console.log(" ---------------end -----------");
             done();
          });
       });
  });
});
const mongoose = require('mongoose');

const chai = require('chai');
const chaihttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');

const server = require('./server');
chai.use(chaihttp);

const Character = require('./models');

describe('Server', () => {
  before(done => {
    mongoose.connect('mongodb://localhost/test');
    const db = mongoose.connection;
    db.on('error', () => {
      console.error('Something went wrong connecting');
    });
    db.once('open', () => {
      console.log('Connected');
      done();
    });
  });
  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('[POST] /character', () => {
    it('should add a new character', done => {
      const newCharacter = {
        name: 'Mickey',
        class: 'Ninja',
      };
      chai
        .request(server)
        .post('/character')
        .send(newCharacter)
        .end((err, res) => {
          if (err) {
            console.error(err);
            done();
          }
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('Mickey');
        });
      done();
    });
  });
  //   it('should send back error code when recieving bad data', done => {});
  // });

  // describe('[GET] /character/:id', () => {
  //   it('should get character id', done => {});
  // });

  describe('[GET] /characters', () => {
    it('should return the characters', done => {
      chai
        .request(server)
        .get('/characters')
        .end((err, res) => {
          if (err) {
            console.error(err);
            done();
          }
          expect(res.status).to.equal(200);
          expect(res.body[0].name).to.equal('Mickey');
        });
      done();
    });
  });

  describe('[PUT] /character', () => {
    it('should update a character', done => {
      const updatedCharacter = {
        name: 'Mickey',
        class: 'Healer',
      };
      chai
        .request(server)
        .put('/character')
        .send(updatedCharacter)
        .end((err, res) => {
          if (err) {
            console.error(err);
            done();
          }
          expect(res.status).to.equal(200);
          expect(res.body[0].class).to.equal('Healer');
        });
      done();
    });
  });

  describe('[DELETE] /characters', () => {
    it('should delete a character', done => {
      const deletedCharacter = { name: 'Mickey' };
      chai
        .request(server)
        .delete('/characters')
        .send(deletedCharacter)
        .end((err, res) => {
          if (err) {
            console.error(err);
            done();
          }
          expect(res.status).to.equal(200);
        });
      done();
    });
  });
});

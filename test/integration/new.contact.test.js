process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

// Tests for new contact pages
describe('THE NEW CONTACT PAGE', () => {

  // tests that make sure whats supposed to be on the page is on the page
  describe('***CONTENT***', () => {

  });

  // tests that links and redirects go where they are supposed to go
  describe('***NAVIGATION***', () => {

    describe('IF LOGGED IN', () => {

      it('should go to the new contact form page', (done) => {
          chai.request(server)
              .get('/users/1/contacts/new')
              .end((err, res) => {
                should.not.exist(err);
                done();
              });
      });

    });

    describe('IF LOGGED OUT', () => {

    });

  });

  // tests that things look the way they are supposed to
  describe('***VIEWS***', () => {

  });

  // test that only the right people are in the right places
  describe('***AUTH***', () => {

    describe('IF LOGGED IN', () => {

    });

    describe('IF LOGGED OUT', () => {

    });

  });

});

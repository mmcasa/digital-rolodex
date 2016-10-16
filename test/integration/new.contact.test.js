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
  describe('***GOES TO FORM***', () => {

    describe('this is the new contact form', () => {

      it('should go to the new contact form page', (done) => {
          chai.request(server)
              .get('/users/1/contacts/new')
              .end((err, res) => {
                should.not.exist(err);
                done();
              });
      });

      it('should post a new contact in our database upon submission', (done) => {
          chai.request(server)
              .post('/users/1/contacts')
              .send({first_name: 'billy', last_name: 'bob', email: 'apple@apple.com', phone_num: '9725551234', linkedin_url: 'blah', twitter_url: '@pizza', job_title: 'developer', user_id: 1})
              .end((err, res) => {
                knex('contacts').where('last_name', 'bob').first().then(function (contact) {
                  contact.first_name.should.equal('billy');
                  done();
                });
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

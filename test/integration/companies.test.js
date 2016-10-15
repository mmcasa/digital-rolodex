process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

// Tests for the company page
describe('THE COMPANIES PAGE TEST SUITE', () => {
    // tests that make sure whats supposed to be on the page is on the page
    describe('***CONTENT***', () => {

      describe('description', () => {

      });

      it('should exist', (done) => {
        chai.request(server)
         .get('/users/1/companies')
         .end((err, res) => {
         done();
         });

      });

    });

    // tests that links and redirects go where they are supposed to go
    describe('***NAVIGATION***', () => {

        describe('IF LOGGED IN', () => {

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

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

// Tests for the login page
describe('THE SIGNUP PAGE TEST SUITE', () => {

// tests that make sure whats supposed to be on the page is on the page
describe('***CONTENT***', () => {

    it('should exist', (done) => {
        chai.request(server)
            .get('/signup')
            .end((err, res) => {
                done();
            });
    });

    it('should have a form', (done) => {
        chai.request(server)
            .get('/signup')
            .end((err, res) => {
                done();
            });

    });

    it('form should take first name and last name', (done) => {
        chai.request(server)
            .get('/signup')
            .end((err, res) => {
                done();
            });

    });

    it('description', (done) => {

    });

    it('form should take email', (done) => {
        chai.request(server)
            .get('/signup')
            .end((err, res) => {
                done();
            });

    });

    it('form should take password and hide it', (done) => {
        chai.request(server)
            .get('/signup')
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

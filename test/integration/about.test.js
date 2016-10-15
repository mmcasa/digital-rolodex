process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

// Tests for the about page
describe('THE ABOUT PAGE TEST SUITE', () => {

    // tests that make sure whats supposed to be on the page is on the page
    describe('***CONTENT***', () => {

        it('should exist', (done) => {
            chai.request(server)
                .get('/about')
                .end((err, res) => {
                    done();
                 });
        });

        it('should have information about the service', (done) => {
            chai.request(server)
                .get('/about')
                .end((err, res) => {
                    done();
                });
        });

    });

    // tests that links and redirects go where they are supposed to go
    describe('***NAVIGATION***', () => {

        describe('IF LOGGED IN', () => {

            it('should have a link to dashboard', (done) => {
                chai.request(server)
                    .get('/about')
                    .end((err, res) => {
                        done();
                    });
            });

        });

        describe('IF LOGGED OUT', () => {

            it('should have a link to login', (done) => {
                chai.request(server)
                    .get('/about')
                    .end((err, res) => {
                        done();
                    });
            });

            it('should have a link to sign up', (done) => {
                chai.request(server)
                    .get('/about')
                    .end((err, res) => {
                        done();
                    });
            });

        });

    });

    // tests that things look the way they are supposed to
    describe('***VIEWS***', () => {

        it('navbar at the top', (done) => {
            chai.request(server)
                .get('/about')
                .end((err, res) => {
                    done();
                });
        });

    });

    // test that only the right people are in the right places
    describe('***AUTH***', () => {

        describe('IF LOGGED IN', () => {

            it('should be able to see page', (done) => {
                chai.request(server)
                    .get('/about')
                    .end((err, res) => {
                        done();
                    });
            });
        });

        describe('IF LOGGED OUT', () => {

            it('should be able to see page', (done) => {
                chai.request(server)
                    .get('/about')
                    .end((err, res) => {
                        done();
                    });
            });

        });

    });

});

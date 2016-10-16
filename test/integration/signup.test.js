process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');
const agent = chai.request.agent(server);

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

        it('form should take email', (done) => {
            chai.request(server)
                .get('/signup')
                .end((err, res) => {
                    done();
                });

        });

        it('form should take password and hide it and compare it to confirm password', (done) => {
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

            it('signup page should redirect to dashboard', (done) => {

                // create session

                chai.request(server)
                    .get('/signup')
                    .end((err, res) => {
                        done();
                    });

            });

        });

        describe('IF LOGGED OUT', () => {

            it('page should be available', (done) => {
                chai.request(server)
                    .get('/signup')
                    .end((err, res) => {
                        done();
                    });

            });

            it('sign up should take you directly to dashboard', (done) => {
                const query = '';

                chai.request(server)
                    .post(`/users${query}`)
                    .end((err, res) => {
                        done();
                    });

            });

            it('nav bar should have about page and login', (done) => {
                chai.request(server)
                    .get('/signup')
                    .end((err, res) => {
                        done();
                    });

            });

        });

    });
});

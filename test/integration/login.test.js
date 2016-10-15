process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

// Tests for the login page
describe('THE LOGIN PAGE TEST SUITE', () => {

    // tests that make sure whats supposed to be on the page is on the page
    describe('***CONTENT***', () => {

        it('should exist', (done) => {
            chai.request(server)
                .get('/login')
                .end((err, res) => {
                    done();
                });
        });

        it('should have a form', (done) => {
            chai.request(server)
                .get('/login')
                .end((err, res) => {
                    done();
                });

        });

        it('form should take email', (done) => {
            chai.request(server)
                .get('/login')
                .end((err, res) => {
                    done();
                });

        });

        it('form should take password and hide it', (done) => {
            chai.request(server)
                .get('/login')
                .end((err, res) => {
                    done();
                });

        });

    });

    // tests that links and redirects go where they are supposed to go
    describe('***NAVIGATION***', () => {

        describe('IF LOGGED IN', () => {

            it('when you log in should go to dashboard of the right user', (done) => {
                // send post request with login info and it should redirect to my user page

                const query = '';

                chai.request(server)
                    .post(`/token${query}`)
                    .end((err, res) => {
                        done();
                    });


            });

            it('when you log in should create session and cookie', (done) => {
                const query = '';

                chai.request(server)
                    .post(`/login${query}`)
                    .end((err, res) => {
                        done();
                    });

            });

        });

        describe('IF LOGGED OUT', () => {

            it('should have link to sign up', (done) => {
                chai.request(server)
                    .get('/login')
                    .end((err, res) => {
                        done();
                    });

            });

            it('should have link to about page', (done) => {
                chai.request(server)
                    .get('/login')
                    .end((err, res) => {
                        done();
                    });

            });
        });

    });
});

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
                    res.status.should.equal(200);
                    done();
                });
        });

        it('should have a form', (done) => {
            chai.request(server)
                .get('/signup')
                .end((err, res) => {
                    res.text.should.include("</form>")
                    done();
                });

        });

        it('form should take first name and last name', (done) => {
            chai.request(server)
                .get('/signup')
                .end((err, res) => {
                    res.text.should.include("name='last_name'");
                    done();
                });

        });

        it('form should take email', (done) => {
            chai.request(server)
                .get('/signup')
                .end((err, res) => {
                    res.text.should.include("name='email'");
                    done();
                });

        });

        it('form should take password and hide it and compare it to confirm password', (done) => {
            chai.request(server)
                .get('/signup')
                .end((err, res) => {
                    res.text.should.include("<input type='password'");
                    res.text.should.include("<input name='confirm_password'");
                    done();
                });

        });

    });

    // tests that links and redirects go where they are supposed to go
    describe('***NAVIGATION***', () => {

        describe('IF LOGGED IN', () => {

            it('signup page should redirect to dashboard', (done) => {

                agent
                    .post('/users')
                    .send({
                        first_name: 'Test',
                        last_name: 'User',
                        email: 'test@email.com',
                        password: 'password'
                    })
                    .then(function(res) {
                        res.should.have.cookie('connect.sid');
                        // The `agent` now has the sessionid cookie saved, and will send it
                        // back to the server in the next request:
                        return agent.get('/user/4')
                            .then(function(res) {
                                expect(res).to.have.status(200);
                            })
                    })

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

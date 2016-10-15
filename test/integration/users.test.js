process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

// Tests for the users pages
describe('THE USER PAGES TEST SUITE', () => {
            // tests that make sure whats supposed to be on the page is on the page
            describe('***CONTENT***', () => {

                describe('DASHBOARD', () => {

                    it('should exist', (done) => {
                        chai.request(server)
                            .get('/users/1')
                            .end((err, res) => {
                                res.status.should.equal(200);
                                done();
                            });

                    });

                    it('should display a button to add a new contact', (done) => {
                        chai.request(server)
                            .get('/users/1')
                            .end((err, res) => {
                                res.text.should.include("href='/user/1/contacts/new'");
                                res.text.should.include('Add New Contact');
                                done();
                            });

                    });

                    it('should show a list of contacts you uploaded', (done) => {
                        chai.request(server)
                            .get('/users/1')
                            .end((err, res) => {
                                res.text.should.include('Conc')
                                done();
                            });

                    });

                    it('should show a toolbar for tags', (done) => {
                        chai.request(server)
                            .get('/users/1')
                            .end((err, res) => {
                                .end((err, res) => {
                                    res.text.should.include('CEO');
                                    res.text.should.include('Founder');
                                    done();
                                });

                            });

                        it('should show all tags user has created', (done) => {
                            chai.request(server)
                                .get('/users/1')
                                .end((err, res) => {
                                    res.text.should.include('User Created Tag 1');
                                    res.text.should.include('User Created Tag 2');
                                    done();
                                });

                        });

                    });

                    describe('ACCOUNT PAGE', () => {

                        it('should exist', (done) => {
                            chai.request(server)
                                .get('/users/1/account')
                                .end((err, res) => {
                                    done();
                                });

                        });

                        it('shows user first and last name and email and password', (done) => {
                            chai.request(server)
                                .get('/users/1/account')
                                .end((err, res) => {
                                    done();
                                });

                        });

                        it('should have button to edit and delete', (done) => {
                            chai.request(server)
                                .get('/users/1/account')
                                .end((err, res) => {
                                    done();
                                });

                        });

                    });

                    describe('EDIT PROFILE PAGE', () => {

                        it('should exist', (done) => {
                            chai.request(server)
                                .get('/users/1/edit')
                                .end((err, res) => {
                                    done();
                                });

                        });

                        it('shows populated fields for first and last name and email and password', (done) => {
                            chai.request(server)
                                .get('/users/1/edit')
                                .end((err, res) => {
                                    done();
                                });

                        });

                        it('should have button to edit and delete', (done) => {
                            chai.request(server)
                                .get('/users/1/edit')
                                .end((err, res) => {
                                    done();
                                });

                        });

                    });

                });

                describe('DELETE PROFILE PAGE', () => {

                    it('should exist', (done) => {
                        chai.request(server)
                            .get('/users/1/delete')
                            .end((err, res) => {
                                done();
                            });

                    });

                    it('Be a confirmation page', (done) => {
                        chai.request(server)
                            .get('//users/1/delete')
                            .end((err, res) => {
                                done();
                            });

                    });

                });


            });


            // test that only the right people are in the right places
            describe('***AUTH***', () => {

                describe('IF LOGGED IN', () => {

                    describe('DASHBOARD', () => {

                        it('should be availble', (done) => {
                            // create session

                            chai.request(server)
                                .get('/users/1')
                                .end((err, res) => {
                                    res.status.should.equal(200);
                                    done();
                                });

                        });

                    });

                    describe('ACCOUNT PAGE', () => {

                        it('should be availble', (done) => {
                            // create session

                            chai.request(server)
                                .get('/users/1/account')
                                .end((err, res) => {
                                    res.status.should.equal(200);
                                    done();
                                });

                        });

                    });

                    describe('EDIT PROFILE PAGE', () => {

                        it('should be availble', (done) => {
                            // create session

                            chai.request(server)
                                .get('/users/1/edit')
                                .end((err, res) => {
                                    res.status.should.equal(200);
                                    done();
                                });

                        });

                    });

                    describe('DELETE PROGILE PAGE', () => {

                        it('should be availble', (done) => {
                            // create session

                            chai.request(server)
                                .get('/users/1/delete')
                                .end((err, res) => {
                                    res.status.should.equal(200);
                                    done();
                                });

                        });

                    });

                });

                describe('IF LOGGED OUT/OR WRONG USER', () => {

                    describe('DASHBOARD', () => {

                        it('should redirect to login page with error', (done) => {
                            chai.request(server)
                                .get('/users/2')
                                .end((err, res) => {
                                    res.status.should.equal(500);
                                    done();
                                });

                        });

                    });

                    describe('ACCOUNT PAGE', () => {

                        it('should redirect to login page with error', (done) => {
                            chai.request(server)
                                .get('/users/2/account')
                                .end((err, res) => {
                                    res.status.should.equal(500);
                                    done();
                                });

                        });

                    });

                    describe('EDIT PROFILE PAGE', () => {

                        it('should redirect to login page with error ', (done) => {
                            chai.request(server)
                                .get('/users/2/edit')
                                .end((err, res) => {
                                    res.status.should.equal(500);
                                    done();
                                });

                        });

                    });

                    describe('DELETE PROGILE PAGE', () => {

                        it('should redirect to login page with error', (done) => {
                            chai.request(server)
                                .get('/users/2/delete')
                                .end((err, res) => {
                                    res.status.should.equal(500);
                                    done();
                                });

                        });

                    });

                });

                // tests that things look the way they are supposed to
                describe('***VIEWS***', () => {


                    it('dashboard contact cards should have name, email, and social media links', (done) => {
                        chai.request(server)
                            .get('/users/1')
                            .end((err, res) => {
                                res.text.should.include('Name');
                                res.text.should.include('Email');
                                res.text.should.include('linkedIn');
                                res.text.should.include('Twitter');
                                done();
                            });

                    });


                });

                // tests that links and redirects go where they are supposed to go
                describe('***NAVIGATION***', () => {

                    describe('IF LOGGED IN', () => {

                        describe('DASHBOARD', () => {

                            it('add new contact should be going to new contact page', (done) => {
                                chai.request(server)
                                    .get('/users/1')
                                    .end((err, res) => {
                                        done();
                                    });

                            });

                            it('clicking on a contact name should take user to single contact page', (done) => {
                                chai.request(server)
                                    .get('/users/1')
                                    .end((err, res) => {
                                        done();
                                    });

                            });

                            it('clicking on social media links should take you that social media', (done) => {
                                chai.request(server)
                                    .get('/users/1')
                                    .end((err, res) => {
                                        done();
                                    });

                            });

                            it('should have filter and search bars', (done) => {
                                chai.request(server)
                                    .get('/users/1')
                                    .end((err, res) => {
                                        done();
                                    });

                            });

                        });

                        describe('ACCOUNT PAGE', () => {

                            it('description', (done) => {

                            });

                        });

                        describe('EDIT PROFILE PAGE', () => {

                        });

                        describe('DELETE PROGILE PAGE', () => {

                        });

                    });

                    describe('IF LOGGED OUT', () => {

                        describe('DASHBOARD', () => {

                        });

                        describe('ACCOUNT PAGE', () => {

                        });

                        describe('EDIT PROFILE PAGE', () => {

                        });

                        describe('DELETE PROGILE PAGE', () => {

                        });

                    });

                });
            });

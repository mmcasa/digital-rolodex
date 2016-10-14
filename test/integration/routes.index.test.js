process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');

describe('****PAGES****', () => {

    describe('Sign Up Page', () => {

        it('should exist', (done) => {
            done();
        });

        it('shows info about service', (done) => {
            done();
        });

        it('takes in email', (done) => {
            done();
        });

        it('takes in password', (done) => {
            done();
        });

        it('takes in first name/last name', (done) => {
          done();
        });

    });

    describe('Log In Page', () => {
      it('should have a form that takes in an email', (done) => {
        done();
      });

      it('should have a form that takes in an password', (done) => {
        done();
      });

      it('password should be hidden', (done) => {
        done();
      });

    });

    describe('Dashboard Page', () => {

        it('should exist', (done) => {
            done();
        });

        it('displays with upload image button', (done) => {
            done();
        });

        it('displays button to display own user account', (done) => {
          done();
        });

        it('shows icons of their current contacts', (done) => {
            done();
        });

        it('has a search bar', (done) => {
            done();
        });

        it('search and filter are operational', (done) => {
            done();
        });

        describe('REDIRECTS', () => {
            it('when you click on upload image should go to upload image page', (done) => {
                done();
            });

            it('when you click on a contact it goes to render page with contacts info  ', (done) => {
                done();
            });

        });

    });

    describe('Upload Image Page', () => {
        it('should exist', (done) => {
            done();
        });

        it('should be pre-populated if routed from image uploaded', (done) => {
            done();
        });

        it('if no card given should have form to add own info', (done) => {
          done();
        });

        it('should have first and last name', (done) => {
            done();
        });

        it('should show where they work', (done) => {
            done();
        });

        it('should show job title', (done) => {
            done();
        });

        it('should show contact info', (done) => {
            done();
        });

        it('should recommend twitter and linked in pages', (done) => {
            done();
        });

        it('should have a field that the user can put in comments', (done) => {
            done();
        });

        it('should have tag fields to filter through their rolodex', (done) => {
            done();
        });

        describe('REDIRECTS', () => {

            it('when user clicks save it should redirect to rolodex showing new contact highlighted', (done) => {
                done();
            });

        });

    });

    describe('Contact Info Page', () => {
      it('should exist', (done) => {
        done();
      });

      it('shows only connected social media apps', (done) => {
        done();
      });

      it('have a button to see original image', (done) => {
        done();
      });

      it('should have option to edit', (done) => {
        done();
      });

      it('should hide contact', (done) => {
        done();
      });

      describe('REDIRECTS', () => {

          it('should go back to image page that prepopopulates info', (done) => {
              done();
          });

      });

    });

});

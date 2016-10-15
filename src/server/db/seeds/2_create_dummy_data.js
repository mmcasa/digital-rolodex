'use strict'

const dummy = require('../dummy/dummy-data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('companies').insert(dummy.companies),
      ]);
    })
    .then(function() {
      return knex('contacts').del()
        .then(function () {
          return Promise.all([
            knex('contacts').insert(dummy.contacts)
          ]);
        })
    })
    .then(function() {
      return knex('default_tags').del()
        .then(function () {
          return Promise.all([
            knex('default_tags').insert(dummy.default_tags)
          ]);
        })
    })
    .then(function() {
      return knex('created_tags').del()
        .then(function () {
          return Promise.all([
            knex('created_tags').insert(dummy.created_tags)
          ]);
        })
    })
    .then(function() {
      return knex('contact_default_tag').del()
        .then(function () {
          return Promise.all([
            knex('contact_default_tag').insert(dummy.contact_default_tag)
          ]);
        })
    })
    .then(function() {
      return knex('contact_created_tag').del()
        .then(function () {
          return Promise.all([
            knex('contact_created_tag').insert(dummy.contact_created_tag)
          ]);
        })
    })
};

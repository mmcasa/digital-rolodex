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
};

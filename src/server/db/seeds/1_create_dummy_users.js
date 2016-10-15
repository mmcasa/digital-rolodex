'use strict'

const bcrypt = require('bcrypt-as-promised');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        bcrypt.hash('password', 12).then((hashed)=>{
          return knex('users').insert({
            id: 1,
            first_name: 'user1',
            last_name: 'user1',
            email: 'user.1@gmail.com',
            password: hashed,
          })
        }),
        bcrypt.hash('password', 12).then((hashed)=>{
          return knex('users').insert({
            id: 2,
            first_name: 'user2',
            last_name: 'user2',
            email: 'user.2@gmail.com',
            password: hashed
          })
        }),
        bcrypt.hash('password', 12).then((hashed)=>{
          return knex('users').insert({
            id: 3,
            first_name: 'user3',
            last_name: 'user3',
            email: 'user.3@gmail.com',
            password: hashed
          })
        }),
      ]);
    });
};

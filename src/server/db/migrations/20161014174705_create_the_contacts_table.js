
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('contacts', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email').unique();
    table.integer('phone_num').unique();
    table.string('linkedin_url').unique();
    table.string('twitter_url').unique();
    table.string('job_title');
    table.integer('company_id').unsigned().index().references('id').inTable('companies').onDelete('CASCADE');
    table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contacts');
};

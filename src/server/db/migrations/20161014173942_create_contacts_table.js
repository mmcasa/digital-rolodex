
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('companies', function (table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies');
};

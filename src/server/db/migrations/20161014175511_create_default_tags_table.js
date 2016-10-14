
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('default_tags', function (table) {
    table.increments()
    table.string('name')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('default_tags')
};

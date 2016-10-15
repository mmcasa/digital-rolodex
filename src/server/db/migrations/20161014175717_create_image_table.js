
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('images', function (table) {
    table.increments();
    table.string('url');
    table.integer('contact_id').unsigned().index().references('id').inTable('contacts').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('images');
};

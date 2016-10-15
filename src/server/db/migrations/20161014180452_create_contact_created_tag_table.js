
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('contact_created_tag', function (table) {
    table.increments();
    table.integer('created_tag_id').unsigned().index().references('id').inTable('created_tags').onDelete('CASCADE');
    table.integer('contact_id').unsigned().index().references('id').inTable('contacts').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contact_created_tag');
};

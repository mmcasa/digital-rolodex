
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('contact_default_tag', function (table) {
      table.increments()
      table.integer('default_tag_id').unsigned().index().references('id').inTable('default_tags').onDelete('CASCADE')
      table.integer('contact_id').unsigned().index().references('id').inTable('contacts').onDelete('CASCADE')
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contact_default_tag')
};

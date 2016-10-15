
exports.up = function(knex, Promise) {
  return knex.schema.table('images', function (table) {
    table.dropColumn('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('images', function (table) {
    table.string('url');
  });
};


exports.up = function(knex, Promise) {
  return knex.schema.table('images', function (table) {
    table.binary('image');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('images', function (table) {
    table.dropColumn('image');
  });
};

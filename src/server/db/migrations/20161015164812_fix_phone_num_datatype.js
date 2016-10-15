
exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', function (table) {
    table.dropColumn('phone_num');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('contacts', function (table) {
    table.integer('phone_num');
  });
};

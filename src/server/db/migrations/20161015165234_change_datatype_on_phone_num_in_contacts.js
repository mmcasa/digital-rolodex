
exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', function (table) {
    table.bigInteger('phone_num');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('contacts', function (table) {
    table.dropColumn('phone_num');
  })
};

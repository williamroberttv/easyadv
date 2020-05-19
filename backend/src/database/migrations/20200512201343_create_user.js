exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("sobrenome").notNullable();
    table.string("email").unique().notNullable();
    table.string("senha").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

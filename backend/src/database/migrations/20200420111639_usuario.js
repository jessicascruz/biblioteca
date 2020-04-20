
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function (table) {
    table.increments('id');

    table.string('nome').notNullable();
    table.string('email').unique().notNullable();
    table.binary('foto');
    // Lembrar de criptografar senha
    table.string('senha').notNullable();
    table.date('data_cadastro');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};

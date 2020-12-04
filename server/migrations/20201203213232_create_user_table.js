
exports.up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
      table.increments('id').primary();
      table.string("name").notNullable();
      table.string("age").notNullable();
      table.string("avatar");
      table.integer("account_id").references("accounts.id");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};

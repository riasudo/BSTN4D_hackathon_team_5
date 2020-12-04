
exports.up = function(knex) {
  return knex.schema.createTable("products", table =>{
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("category").notNullable();
      table.string("brand").notNullable();
      table.string("description").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};

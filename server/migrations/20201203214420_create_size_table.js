
exports.up = function(knex) {
  return knex.schema.createTable("sizePref", table => {
      table.string("tops").notNullable();
      table.string("bottoms").notNullable();
      table.string("shoes").notNullable();
      table
        .integer("user_id")
        .notNullable()
        .inTable("users")
        .references("id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("inventories");
};

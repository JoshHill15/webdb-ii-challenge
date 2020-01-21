
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments()
      tbl.text("make").notNullable()
      tbl.text("model").notNullable()
      tbl.integer("year").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};

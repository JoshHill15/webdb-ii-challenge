
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Honda', model: "S2000", year: 2000},
        {make: 'Honda', model: "Civic", year: 2000},
        {make: 'Honda', model: "Accord", year: 2000}
      ]);
    });
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          name: "Groningen Open",
          location: "Groningen",
          description: "TBD",
          date: "2021-08-08",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amsterdam Open",
          location: "Amsterdam Sloterpark",
          description: "Tournament in Amsterdam Sloterpark!",
          date: "2021-06-01",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  }
};

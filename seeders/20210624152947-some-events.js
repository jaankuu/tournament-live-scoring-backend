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
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amsterdam Open",
          location: "Amsterdam Sloterpark",
          description: "Tournament in Amsterdam Sloterpark!",
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

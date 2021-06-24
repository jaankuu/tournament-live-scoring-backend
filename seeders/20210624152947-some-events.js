'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          name: "Groningen Open",
          location: "Groningen",
          description: "First tournament in Groningen!",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amsterdam Open",
          location: "Amsterdam Sloterpark",
          description: "TBD",
          active: false,
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

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          name: "CF Open",
          description: "First tournament of the year!",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amsterdam Open",
          description: "This is the Amsterdam Open! Date TBD",
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

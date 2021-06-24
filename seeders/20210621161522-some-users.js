'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jaan",
          email: "jaan@jaan.jaan",
          password: "test",
          isAdmin: true,
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dean",
          email: "dean@dean.dean",
          password: "12345",
          isAdmin: false,
          points: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};

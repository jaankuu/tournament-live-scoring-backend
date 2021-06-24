'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scores",
      [
        {
          userId: 1,
          eventId: 1,
          scores: 345,
          totalScore: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ],
    {}
  )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("scores", null, {});
  }
};

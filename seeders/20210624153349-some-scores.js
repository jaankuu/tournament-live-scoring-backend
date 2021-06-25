'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scores",
      [
        {
          eventId: 2,
          player: 2,
          eachScore: 3452233,
          totalScore: 65,
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

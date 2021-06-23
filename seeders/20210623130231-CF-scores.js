'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scores",
      [
        {
          userId: 1,
          scores: [2,3,2,3,2,3,2,3,2,3,2,3,3,2,3,3,2,3],
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          scores: [5,3,2,3,4,3,2,3,5,3,2,3,3,2,3,3,2,5],
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("scores", null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "users",
      "eventId",
      { type: Sequelize.INTEGER,
        references: {
          model: "events",
          key: "id"
        }
      },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "eventId", {});
  }
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: "events",
          key: "id"
        }
      },
      player: {
        type: Sequelize.INTEGER
      },
      playerName: {
        type: Sequelize.STRING
      },
      H1: {
        type: Sequelize.INTEGER
      },
      H2: {
        type: Sequelize.INTEGER
      },
      H3: {
        type: Sequelize.INTEGER
      },
      H4: {
        type: Sequelize.INTEGER
      },
      H5: {
        type: Sequelize.INTEGER
      },
      H6: {
        type: Sequelize.INTEGER
      },
      H7: {
        type: Sequelize.INTEGER
      },
      H8: {
        type: Sequelize.INTEGER
      },
      H9: {
        type: Sequelize.INTEGER
      },
      H10: {
        type: Sequelize.INTEGER
      },
      H11: {
        type: Sequelize.INTEGER
      },
      H12: {
        type: Sequelize.INTEGER
      },
      H13: {
        type: Sequelize.INTEGER
      },
      H14: {
        type: Sequelize.INTEGER
      },
      H15: {
        type: Sequelize.INTEGER
      },
      H16: {
        type: Sequelize.INTEGER
      },
      H17: {
        type: Sequelize.INTEGER
      },
      H18: {
        type: Sequelize.INTEGER
      },
      totalScore: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('scores');
  }
};

'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jaan",
          email: "jaan@jaan.jaan",
          password: bcrypt.hashSync("test55", SALT_ROUNDS),
          isAdmin: true,
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dean",
          email: "dean@dean.dean",
          password: bcrypt.hashSync("itssecret", SALT_ROUNDS),
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

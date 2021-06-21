'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.hasMany(models.user)
      event.hasMany(models.score)
    }
  };
  event.init({
    name: { type: DataTypes.STRING, allowNull: false },
    time: { type: DataTypes.INTEGER },
    location: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    players: { type: DataTypes.INTEGER },
    active: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};
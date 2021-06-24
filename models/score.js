'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      score.belongsTo(models.event)
      score.belongsTo(models.user)
    }
  };
  score.init({
    userId: { 
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      }
    },
    eventId: {
       type: DataTypes.INTEGER,
       references: {
         model: "events",
         key: "id"       
        }
      },
    scores: { type: DataTypes.INTEGER },
    totalScore: { type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'score',
  });
  return score;
};
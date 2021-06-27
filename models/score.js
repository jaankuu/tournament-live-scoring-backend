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
    }
  };
  score.init({
    eventId: {
       type: DataTypes.INTEGER,
       references: {
         model: "events",
         key: "id"
       }
      },
    player: { type: DataTypes.INTEGER },
    playerName: { type: DataTypes.STRING },
    H1: { type: DataTypes.INTEGER },
    H2: { type: DataTypes.INTEGER },
    H3: { type: DataTypes.INTEGER },
    H4: { type: DataTypes.INTEGER },
    H5: { type: DataTypes.INTEGER },
    H6: { type: DataTypes.INTEGER },
    H7: { type: DataTypes.INTEGER },
    H8: { type: DataTypes.INTEGER },
    H9: { type: DataTypes.INTEGER },
    H10: { type: DataTypes.INTEGER },
    H11: { type: DataTypes.INTEGER },
    H12: { type: DataTypes.INTEGER },
    H13: { type: DataTypes.INTEGER },
    H14: { type: DataTypes.INTEGER },
    H15: { type: DataTypes.INTEGER },
    H16: { type: DataTypes.INTEGER },
    H17: { type: DataTypes.INTEGER },
    H18: { type: DataTypes.INTEGER },
    totalScore: { type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'score',
  });
  return score;
};
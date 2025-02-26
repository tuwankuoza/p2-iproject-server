'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Demo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Demo.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Demo.init({
    userId: DataTypes.INTEGER,
    stockName: DataTypes.STRING,
    boughtPrice: DataTypes.INTEGER,
    currentPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    region: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Demo',
  });
  return Demo;
};
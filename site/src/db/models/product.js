'use strict';
const sequelizePaginate = require("sequelize-paginate")
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through: 'Orderproducts',
        foreignKey: 'productId',
        otherKey: 'orderId',
        as: 'orders'
      })
      
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category"
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    categoryId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    paranoid: true
  });

  sequelizePaginate.paginate(Product)

  return Product;
};
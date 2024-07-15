'use strict';
const sequelizePaginate = require('sequelize-paginate')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "role"
      }),
        User.belongsTo(models.Address, {
          foreignKey: 'addressId',
          as: 'address'
        })
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders'
      })

      User.belongsToMany(models.Product, {
        through: "userproducts",
        foreignKey: "userId", 
        otherKey: "productId", 
        as: "favorites" 
      });
    }
  }
  User.init({
    socialId: DataTypes.STRING,
    provider: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    dni: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true
  });

  sequelizePaginate.paginate(User)

  return User;
};
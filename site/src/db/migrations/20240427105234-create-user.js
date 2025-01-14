'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      socialId: {
        type: Sequelize.STRING
      },
      provider: { 
        type: Sequelize.STRING },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: "default-img.jpg"
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Roles"
          },
          key: "id"
        },
        defaultValue: 1
      },
      addressId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Addresses"
          },
          key: "id"
        },
        defaultValue: 1
      },
      dni: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
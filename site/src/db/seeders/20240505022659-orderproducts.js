'use strict';

const ordersJSON = require('../../database/orders.json')
const productsJSON = require('../../database/products.json')

const orderProductsDBMapped = ordersJSON.flatMap(ord => {
  return ord.products.map(productOrd => {
    const productFind = productsJSON.find(productDB => {
      return productDB.nombre === productOrd.name
    });
    return {
      orderId: ord.id,
      productId: productFind ? productFind.id : null,
      quantity: productOrd.quantity
    };
  });
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orderproducts", orderProductsDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orderproducts", null, {});
  }
};

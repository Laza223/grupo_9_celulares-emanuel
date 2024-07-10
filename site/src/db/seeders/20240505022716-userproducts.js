'use strict';

const usersJSON = require("../../database/users.json")
const productsJSON = require("../../database/products.json")

const userproductsMapped = usersJSON.flatMap(user => {
    return user.favourites.map(userFavouriteProduct => {
        const productFind = productsJSON.find(product => {
            return product.nombre === userFavouriteProduct.name
        })
        return {
            userId: user.id,
            productId: productFind ? productFind.id : null,
        }
    })
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("Userproducts", userproductsMapped, {});
    },
  
    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("Userproducts", null, {});
    }
  };
  



const favouriteProductController = require('./favouriteProduct.controller.js');

module.exports = {
    userList: require('./userList.controller'),
    userDetail: require("./userDetail.controller.js"),
    productList: require("./productList.controller.js"),
    productDetail: require("./productDetail.controller.js"),
    categorysList: require("./categoryList.controller.js"),
    editProduct: require("./editProduct.controller"),
    deleteProduct: require("./deleteProduct.controller.js"),
    createProduct: require("./createProduct.controller.js"),
    favouriteProduct: require("./favouriteProduct.controller.js")
}




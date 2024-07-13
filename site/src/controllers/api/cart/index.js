module.exports = {
    getOrder: require('./getOrder.controller.api'),
    addProductToOrder: require('./addProduct.controller.api'),
    removeProductOrder: require('./removeProduct.controller.api'),
    moreQuantity: require('./moreQuantity.controller.api'),
    lessQuantity: require('./lessQuantity.controller.api'),
    canceledOrder: require("./canceledOrder.controller.api.js"),
    completedOrder: require("./completedOrder.controller.api"),
    clearProductsCart: require("./clearProductsCart.controller.api")
}
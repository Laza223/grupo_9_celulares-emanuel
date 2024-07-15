
module.exports = {
    getOrder: require('./getCart.controller.js'),
    addProductToOrder: require('./addProduct.controller.api.js'),
    removeProductOrder: require('./removeProduct.controller.api.js'),
    moreQuantity: require('./moreQuantity.controller.api.js'),
    lessQuantity: require('./lessQuantity.controller.api.js'),
    canceledOrder: require("./canceledOrder.controller.api.js"),
    completedOrder: require("./completedOrder.controller.api.js"),
    clearProductsCart: require("./clearProductsCart.controller.api.js"),
    getOrderPending: require("./utility/getOrderPending.js"),
    getTotalOrder: require("./utility/getTotalOrder.js"),
    
}
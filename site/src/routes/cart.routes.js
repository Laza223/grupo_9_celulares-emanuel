const router = require('express').Router();

const { canceledOrder,
    completedOrder,
    getOrder,
    addProductToOrder,
    removeProductOrder,
    moreQuantity,
    lessQuantity,
    clearProductsCart } = require('../controllers/cart');



// /carrito

router.get('/', getOrder);

router.patch('/agregar-producto/:id', addProductToOrder);

router.patch('/remover-producto/:id', removeProductOrder);

router.patch('/incrementar/:id', moreQuantity);

router.patch('/decrementar/:id', lessQuantity);

router.patch('/cancelar', canceledOrder);

router.patch('/completar', completedOrder)

router.patch('/vaciar', clearProductsCart)

// router.patch('/complete' );

module.exports = router;
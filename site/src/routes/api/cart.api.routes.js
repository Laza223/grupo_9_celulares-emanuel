const router = require('express').Router();

const { canceledOrder,
    completedOrder,
    getOrder,
    addProductToOrder,
    removeProductOrder,
    moreQuantity,
    lessQuantity,
    clearProductsCart } = require('../../controllers/api/cart');



// /api/cart

router.get('/', getOrder);

router.patch('/add/:id', addProductToOrder);

router.patch('/remove/:id', removeProductOrder);

router.patch('/more/:id', moreQuantity);

router.patch('/less/:id', lessQuantity);

router.patch('/canceled', canceledOrder);

router.patch('/completed', completedOrder)

router.patch('/clear', clearProductsCart)

// router.patch('/complete' );

module.exports = router;
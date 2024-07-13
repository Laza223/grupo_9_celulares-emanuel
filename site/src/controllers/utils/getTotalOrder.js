const getTotalOrder = (data = []) => {
    let total = 0;
    data.forEach((product) => {
        const price = product.dataValues.price
        const quantity = product.dataValues.Orderproducts.dataValues.quantity
        total += price * quantity
    }
    );
    return total
}


module.exports = { getTotalOrder }
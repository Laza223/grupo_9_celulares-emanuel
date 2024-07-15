const { Op } = require('sequelize');
const db = require('../../db/models');
const { getOrderPending, getTotalOrder } = require('./utility/');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const [order, isCreate] = await getOrderPending(req)

        const existingProduct = await db.Orderproduct.findOne({
            where: {
                orderId: order.id,
                productId: id
            }
        })

        if (existingProduct) {

            existingProduct.quantity += 1
            await existingProduct.save()
        } else {

            await db.Orderproduct.create({
                orderId: order.id,
                productId: id,
                quantity: 1 
            })
        }

        await order.reload({
            include: [
                {
                    association: 'Products',
                    through: {
                        attributes: ['quantity']
                    }
                }
            ]
        })

        const total = getTotalOrder(order.products)
        order.total = total
        await order.save()


        res.status(201).json({
            ok: true,
            msg:" Producto agregado al carrito"
        })
    } catch (error) {
        console.error("Error al agregar el producto al carrito:", error)
    }
}

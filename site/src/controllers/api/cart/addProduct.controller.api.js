const { Op } = require('sequelize')
const db = require('../../../db/models')
const { getOrderPending } = require('../../utils')
const { getTotalOrder } = require('../../utils/getTotalOrder')

module.exports = async (req, res) => {

    try {
        const { id } = req.params

        let [order, isCreate] = await getOrderPending(req)

        db.Orderproduct.create({
            orderId: order.id,
            productId: id
        })

        await order.reload({
            include: [
                {
                    association: "products",
                    through: {
                        attributes: ["quantity"]
                    }
                }
            ]
        })

        const total = getTotalOrder(order.products)

        order.total = total
        await order.save()


        res.status(201).json({
            ok: true,
            msg: "Product add success"
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message
        })
    }

}
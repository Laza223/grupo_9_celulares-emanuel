const { Op } = require('sequelize')
const db = require('../../../db/models')
const { getOrderPending } = require("../../utils")

module.exports = async (req, res) => {

    try {
        const { id } = req.params

        const [order, isCreate] = await getOrderPending(req)

        db.Orderproduct.destroy({
            where:  {
                orderId: order.id,
                productId: id
            }
        })


        res.status(201).json({
            ok: true,
            msg: "Product remove success"
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message
        })
    }

}
const { Op } = require('sequelize')
const db = require('../../../db/models')
const { getOrderPending } = require("../../utils")

module.exports = async (req, res) => {

    try {

        const [order, isCreate] = await getOrderPending(req)

        let total = 0;

        order.products.forEach((product) => {
            const price = product.dataValues.price
            const quantity = product.dataValues.Orderproducts.dataValues.quantity
            total += price * quantity
        }
        );

        order.total = total
        await order.save()

        const statusCode = isCreate ? 201 : 200
        res.status(statusCode).json({
            ok: true,
            isCreate: isCreate,
            data: await order.reload({
                include: [
                    {
                        association: "products",
                        through: {
                            attributes: ["quantity"]
                        }
                    }
                ]
            })
        })




    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message
        })
    }

}
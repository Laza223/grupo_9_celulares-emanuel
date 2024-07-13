const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrderPending } = require('../../utils')

module.exports = async (req, res) => {

    try {
        const { id } = req.params
        const [order, isCreate] = await getOrderPending(req)

        const record = await db.Orderproduct.findOne({
            where: {
                [Op.and]: [
                    {
                        orderId: order.id
                    },
                    {
                      productId: id  
                    }
                ]
            }
        })

        record.quantity++;

        await record.save()


        res.status(200).json({
            ok: true,
            msg: "Cantidad aumentada con éxito"
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message
        })
    }
}
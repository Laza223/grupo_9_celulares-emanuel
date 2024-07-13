const { Op } = require('sequelize')
const db = require('../../db/models')

module.exports = async (req) => {

    const { userId } = req.query

    const dataOrder = await db.Order.findOrCreate({
        where: {
            [Op.and]: [
                {
                    userId: userId
                },
                {
                    state: "pending"
                }
            ]
        },
        defaults: {
            userId: userId
        },
        include: [
            {
                association: "products",
                through: {
                    attributes: ["quantity"]
                }
            }
        ]
    });
    return dataOrder
}
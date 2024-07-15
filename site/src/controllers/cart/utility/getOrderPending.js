const { Op } = require('sequelize')
const db = require('../../../db/models')

module.exports = async (req, res) => {

    if (!req.session.userLogin){
        console.log("Debes loguearte para poder agregar productos al carrito")
        res.redirect("/authentication")
    }
    const  userId  = req.session.userLogin

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
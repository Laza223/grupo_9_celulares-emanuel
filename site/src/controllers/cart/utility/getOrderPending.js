const { Op } = require('sequelize')
const db = require('../../../db/models')

module.exports = async (req, res) => {

  if(!req.session.userLogin){return console.log("Debes loguearte para poder sumar productos al carrito");}
  
    const  userId  = req.session.userLogin.id

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
            userId: userId,
            state: "pending"
        },
        include: [
            {
                association: "Products",
                through: {
                    attributes: ["quantity"]
                }
            }
        ]
    });
    return dataOrder
}
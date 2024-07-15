const db = require('../../db/models')
const { Op } = require('sequelize')

module.exports = async (req, res) => {
  try {
    if (!req.session.userLogin) {
      return res.redirect("/authentication")
    }

    const { id } = req.session.userLogin
    const user = await db.User.findByPk(id, {
      include: [
        {
          model: db.Address,
          as: "address",

        },
        {
          model: db.Product,
          as: "favorites",
          attributes: ["id", "name", "price", "image"]
        }
      ]})

      const order = await db.Order.findOne({where:{userId : id},
        include: [
            {
                model: db.Product,
                as:"Products"
            },
            {
                model: db.User,
                as:"user"
            }
        ]
    })
 



    const categories = await db.Category.findAll()

console.log(order.products)
    res.render("cart/productCart", { order, user, categories })

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error al buscar las órdenes del usuario ' + error
  });
  
  }

}
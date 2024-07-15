const db = require("../../db/models")

module.exports = async (req, res) => {
  try {
    let user = null

    if(req.session.userLogin){
         const { id } = req.session.userLogin
      user = await db.User.findByPk(id, {
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
        ]
      })
     
        }

    const products = await db.Product.findAll()
    const categories = await db.Category.findAll()

 
    if (req.session.userLogin) {
   
    }

    res.render("other/home", { user, products, categories })

  } catch (error) {
    console.error("Error al cargar el home:", error)
    res.status(500).send("Error interno del servidor")
  }
}

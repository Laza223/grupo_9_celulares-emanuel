const db = require("../../db/models");

module.exports = async (req, res) => {
  try {
    if (!req.session.userLogin) { return res.status(401).json({ message: "Usuario no autenticado" })  }

    const { id } = req.session.userLogin
    const productId = req.params.id


    const [userProduct, created] = await db.Userproducts.findOrCreate({
      where: { userId: id, productId: productId },
    })

    if (created) {
      res.status(201).json({ message: "Producto agregado a favoritos" })
    } else {
      res.status(200).json({ message: "El producto ya está en favoritos" })
    }
  } catch (error) {
    console.error("Error al agregar el producto a favoritos:", error)
    res.status(500).send("Error interno del servidor")
  }
}

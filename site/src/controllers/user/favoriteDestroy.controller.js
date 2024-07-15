const db = require("../../db/models");

module.exports = async (req, res) => {
  try {
    if (!req.session.userLogin) { return res.status(401).json({ message: "Usuario no autenticado" })  }

    const { id } = req.session.userLogin
    const productId = req.params.id


    const deleted = await db.Userproducts.destroy({
      where: { userId: id, productId: productId }, paranoid:false
    });

    if (deleted > 0) {
      res.status(200).json({ message: "Producto eliminado de favoritos" })
    } else {
      res.status(404).json({ message: "El producto no estaba en favoritos" })
    }
  } catch (error) {
    console.error("Error al eliminar el producto de favoritos:", error)
    res.status(500).send("Error interno del servidor")
  }
};

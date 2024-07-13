const db = require("../../db/models")

module.exports = async (req, res) => {
  try {
    const id = +req.params.id;
    const products = await db.Product.findAll({
      where: { categoryId: id }
    });
    const categories = await db.Category.findAll();

    let user = null;
    if (req.session.userLogin) {
      const { id } = req.session.userLogin;
      user = await db.User.findByPk(id, { include: "address" });
    }

    res.render("products/productsByCategory", { user, products, categories });

  } catch (error) {
    console.error("Error al cargar el home:", error);
    res.status(500).send("Error interno del servidor");
  }
}

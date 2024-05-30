const db = require("../../db/models")

module.exports = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      limit: 18
    });
    const categories = await db.Category.findAll();

    let user = null;
    if (req.session.userLogin) {
      const { id } = req.session.userLogin;
      user = await db.User.findByPk(id, { include: "address" });
    }

    res.render("other/home", { user, products, categories });

  } catch (error) {
    console.error("Error al cargar el home:", error);
    res.status(500).send("Error interno del servidor");
  }
}

const { where, Op } = require('sequelize');
const db = require('../../db/models');


module.exports = async (req, res) => {
    try {
        let id = +req.params.id;

        let product = await db.Product.findByPk(id, { include: "category" })

        const idCategory = product.categoryId

        const categories = await db.Category.findAll();

        const productsBotBar = await db.Product.findAll({
            where: {
                [Op.and]: [
                  { categoryId: idCategory },
                  { id: { [Op.not]: id } }
                ]
              },
            limit: 8
        })

        let user = null;
        if (req.session.userLogin) {
            const { id } = req.session.userLogin;
            user = await db.User.findByPk(id, { include: "address" });
        }

        res.render('./products/newDetailProduct.ejs', { user, product, categories, productsBotBar });

    } catch (error) {
        console.error("Error al cargar el home:", error);
        res.status(500).send("Error interno del servidor");
    }
}
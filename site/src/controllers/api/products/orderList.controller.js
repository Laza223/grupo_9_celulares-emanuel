const db = require("../../../db/models");

module.exports = async (req, res) => {
    try {
        const orders = await db.Order.findAll({
            include: [
                {
                    model: db.Product,
                    as: "products"
                },
                {
                    model: db.User,
                    as: "user"
                }
            ]
        });

        res.json(orders);
    } catch (error) {
        console.error("Error al obtener las órdenes:", error);
        res.status(500).send("Error interno del servidor.");
    }
};

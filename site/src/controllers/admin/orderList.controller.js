const db = require("../../db/models");

module.exports = async (req, res) => {
    try {
        const orders = await db.Order.findAll({
            include: "users"

          })
    console.log(orders)
        

        res.render("admin/listOrders", { orders : orders})
    } catch (error) {
        console.error("Error al obtener las órdenes:", error);
        res.status(500).send("Error interno del servidor.");
    }
};

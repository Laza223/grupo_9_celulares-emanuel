const db = require("../../db/models");

module.exports = async (req, res) => {
    try {

        const {id} = req.params
        const order = await db.Order.findByPk(id, {
          
        })
        console.log(order)
       return res.render("admin/detailOrder", { order})
    } catch (error) {
        console.error("Error al obtener la órden:", error);
        res.status(500).send("Error interno del servidor.");
    }
};

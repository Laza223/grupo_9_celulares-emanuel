const { Association } = require("sequelize");
const db = require("../../../db/models");

module.exports = async (req, res) => {
    try {

        const {id} = req.params
        const order = await db.Order.findByPk(id, {
            include: [
                {
                    model: db.Product,
                    as: "products",
                    through: {
                        model: db.Orderproduct,
                        as: "orderProducts"
                    }
                },
                {
                    model: db.User,
                    as: "user"
                }
            ]
        })
        
       return res.json(order)
    } catch (error) {
        console.error("Error al obtener la órden:", error);
        res.status(500).send("Error interno del servidor.");
    }
};

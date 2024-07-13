const db = require("../../../db/models")

module.exports = async (req, res) => {
    try {
        const id = +req.params.id
        await db.Product.destroy({ where: { id } })
        return res.status(200).json({ message: "Producto eliminado" })
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        })
    }
}
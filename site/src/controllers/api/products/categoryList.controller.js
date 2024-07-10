const db = require('../../../db/models')

module.exports = async (req, res) => {
    try {
        
        const categorys = await db.Category.findAll()

        return res.status(200).json({
            data: categorys
        });
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}
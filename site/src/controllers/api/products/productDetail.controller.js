const db = require('../../../db/models')
module.exports = async (req, res) => {
    try {
        
        const id = +req.params.id;
        const product =
            await db.Product
                .findByPk(id, {
                    include: ["category"]
                })

        if (!product) { return res.status(404).json({ error: "Producto no encontrado" }) }

        const imageURL = `http://localhost:3030/images/products/${product.image}`;

        return res.status(200).json({
            product,
            image: imageURL,
        });


    } catch (error) {

        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
};

const db = require('../../../db/models')
const fs = require('fs')
const path = require('path')

module.exports = async (req, res) => {
    try {
        const { name, price, categoryId, stock, description, image } = req.body

        const newProduct = await db.Product.create({
            name,
            price,
            categoryId,
            stock,
            description,
            image: req.file ? req.file.filename : "product-default.jpg"
        })

        if (req.file) {
            const imagePath = path.join(__dirname, '../../../public/images/products/', req.file.filename)
            fs.writeFileSync(imagePath, req.file.buffer)
        }

        return res.status(201).json({
            msg: 'Producto creado con éxito',
            product: newProduct
        })

    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}

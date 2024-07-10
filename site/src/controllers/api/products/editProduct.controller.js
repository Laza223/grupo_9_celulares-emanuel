const db = require('../../../db/models')
const fs = require('fs')
const path = require('path')

module.exports = async (req, res) => {
    try {

        const { name, price, categoryId, stock, description, id, image } = req.body
        const imageUpdate = req.file ? req.file.filename : "product-default.jpg";

        await db.Product.update(
            {
                name: name,
                price: price,
                categoryId: categoryId,
                stock: stock,
                image: imageUpdate != "product-default.jpg" ? imageUpdate : image,
                description: description
            },
            {
                where: { id: id }
            })

        const pathImage = path.join(__dirname, '../../../public/images/products/', image)

        if (imageUpdate != "product-default.jpg" && image != "product-default.jpg") {
            if (fs.existsSync(pathImage)) {
                fs.unlinkSync(pathImage)
                console.log("imagen eliminada correctamente");
            }
        }

        return res.status(200).json({
            msg: 'Success Upload'
        })

    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}
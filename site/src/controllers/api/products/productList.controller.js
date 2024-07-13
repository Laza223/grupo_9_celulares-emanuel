const db = require('../../../db/models')
const sequelize = require("sequelize")



module.exports = async (req, res) => {

    try {

        let offset = req.query.offset ? +req.query.offset : 1


        /*  //Dos consultas 
        const countByCategory = await db.Category.findAll({
            attributes: [
                'name',
                [sequelize.fn('COUNT', sequelize.col('products.id')), 'count']
            ],
            include: [{
                model: db.Product,
                as: 'products',
                attributes: []
            }],
            group: ['Category.id', 'Category.name']
        }); */

        const { docs, total, pages } =
            await db.Product
                .paginate({
                    attributes: [
                        "id",
                        "name",
                        "description",
                        "price",
                        "quantity",
                        "image",
                        [sequelize.fn("CONCAT", "http://localhost:3030/api/products/", sequelize.col("product.id")), "detail"]],
                    include: "category",
                    page: offset,
                    paginate: 100,
                    order: [['createdAt']]
                },)

        //Una consulta. Usar reduce?
        const categoryCounts = {};
        docs.forEach(product => {

            const categoryName = product.category.name

            if (!categoryCounts[categoryName]) {
                categoryCounts[categoryName] = 1
            } else {
                categoryCounts[categoryName]++
            }
        })

        const countByCategory = Object.keys(categoryCounts).map(categoryName => ({
            category: {
                name: categoryName,
                count: categoryCounts[categoryName]
            }
        }));

      

        return res.status(200).json({
            count: total,
            countByCategory,
            products: docs,
            next: offset < pages ? `http://localhost:3030/api/products?offset=${offset + 1}` : (pages === 1 ? "-" : "Last page"),
            previous: offset > 1 ? `http://localhost:3030/api/products?offset=${offset - 1}` : (pages === 1 ? "-" : "First page")
        })


    } catch (error) {

        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }


}
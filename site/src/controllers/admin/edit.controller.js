const db = require("../../db/models");

module.exports = async (req, res) => {
    try {
        
        const {id} = req.params
        const product =
           await 
                db.Product
                    .findByPk(id, {
                        include: [{
                            model: db.Category,
                            as: "category",
                        }]
                    }
                    )
           

        const categories = await db.Category.findAll()

       
        return res.render("admin/updateProduct", { product, categories });

    }
    catch (error) {
        console.error("Error al obtener producto y categorías:", error)
    };
}

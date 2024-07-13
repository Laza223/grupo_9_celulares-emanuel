const db = require("../../db/models");

module.exports = async (req, res) => {
    try {
        
        const { eliminados } = req.query;
        const paranoidOptions = eliminados === "true" ? false : true;
    
        const products = await db.Product.findAll({
                include: [{
                    model: db.Category,
                    as: "category",
                }],
                paranoid: paranoidOptions
            })
            
        console.log(products);
        res.render("admin/listProduct", { products, eliminados }); 
    } catch (error) {
        console.error("Error al obtener producto y categorías:", error);
        res.status(500).send("Error interno del servidor.");
    }
};


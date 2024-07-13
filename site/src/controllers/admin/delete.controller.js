const db = require("../../db/models");

module.exports = async (req, res) => {
try {
   
     const product = await db.Product.findByPk(req.params.id, {
            include: [{
                model: db.Category,
                as: "category",
            }]
        })
    
       
         return   res.render("admin/deleteProduct", { product });
}
        catch (error)  { console.log("Error al obtener producto:", error); }
}

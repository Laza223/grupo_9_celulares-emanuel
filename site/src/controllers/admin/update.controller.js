const db = require("../../db/models");
const { validationResult } = require("express-validator")

module.exports = async (req, res) => {
try{
    const errors = validationResult(req);

   if (errors.isEmpty()) { 
const {name, price, category, stock, description} = req.body
const image = req.file ? req.file.filename : "product-default.jpg";
   await db.Product.update(
        {
            name: name,
            price: price,
            categoryId: category, 
            stock: stock,
            image: image,
            description: description
        },
        {
            where: { id: req.params.id } 
        }
    )

      return  res.redirect("/admin/dashboard/productos")}
      else {
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

       
        return res.render("admin/updateProduct", { 
            old: req.body,
            errors: errors.mapped(),
            categories: categories,
            product: product
         });
      } 
}
    catch(error) {
        console.error("Error al actualizar el producto:", error);
    }
}

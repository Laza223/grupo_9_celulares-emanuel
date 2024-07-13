const db = require("../../db/models")
const { validationResult } = require("express-validator")

module.exports = async (req, res) => {

  try {
const errors = validationResult(req);

if (errors.isEmpty()) {
      const { name, price, description, category, stock } = req.body;
      const image = req.file.filename ? req.file.filename : "product-default.jpg"

      await db.Product
        .create({
          name: name.trim(),
          price: +price,
          categoryId: +category,
          stock: +stock,
          image: image,
          description: description.trim()
        })
    
      return res.redirect("/admin/dashboard/productos")

    } else {
      const categories = await db.Category.findAll()
      console.log(errors.mapped());
      return res.render("admin/createProduct", { 
        old: req.body,
        errors: errors.mapped(),
        categories: categories
      })
    }
  }

  catch (error) {
    res.send(error.message)
    console.log("error al intentar crear");
 
  }

}


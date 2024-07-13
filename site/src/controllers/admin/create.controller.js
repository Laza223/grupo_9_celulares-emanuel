const db = require("../../db/models")

module.exports = async (req, res) => {
  try {
    const categories = await db.Category.findAll()

    return res.render("admin/createProduct", { categories}) 
  } catch (error) {
      return res.render(error)

    }
  }

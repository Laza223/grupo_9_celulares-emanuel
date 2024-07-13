const db = require("../../db/models")

module.exports = async (req, res) => {
  const categories = await db.Category.findAll();
  res.render("authentication/login", {categories})
};

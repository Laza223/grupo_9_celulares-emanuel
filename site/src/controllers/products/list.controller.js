const productos = require("../../database/products.json")

module.exports = {
  list:(req, res) => {
    return res.render ('home', {productos});
  }
}
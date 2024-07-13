const db = require("../../db/models");

module.exports = async (req, res) => {

  try {
    if (!req.session.userLogin) { return res.redirect("/") }

    const id = req.session.userLogin.id;
    
    const categories = await db.Category.findAll();

    const user = await db.User.findByPk(id, { 
      include:[{ model: db.Address, as: "address" },
               { model: db.Role, as: "role" }],
      attributes: {
        exclude: ['password']
     }
    })

    if (!user) { return res.status(404).send("Usuario no encontrado") }

    return res.render("user/userEdit2", { user, categories });

  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).send("Error interno del servidor");
  }
}
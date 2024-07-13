const db = require("../../db/models")

module.exports = async (req, res) => {
    
   try {
    if (!req.session.userLogin) { return res.redirect("/") }
    const {id} = req.session.userLogin

    const categories = await db.Category.findAll();

    const user = await db.User.findByPk(id,{
        include: "address"
       
    })
    console.log(user.avatar)
    return res.render("user/userProfile",{user, categories})
   } catch(error){
    console.error("Error al cargar el usuario:", error);
    res.status(500).send("Error interno del servidor");
   }

   
}

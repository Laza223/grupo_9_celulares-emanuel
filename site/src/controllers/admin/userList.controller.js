const db = require("../../db/models")

module.exports = async (req, res) => {
    try {
        const users = await db.User.findAll({
            include : [{
                model : db.Role,
                as : "role"
            }]
        })

        return res.render("admin/listUsers", {users})
    }    catch (error)  { console.log("Error al obtener los usuarios:", error); }
}
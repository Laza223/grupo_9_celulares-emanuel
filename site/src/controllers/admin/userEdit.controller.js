const db = require("../../db/models")

module.exports = async (req, res) => {
    try {
        const { id } = req.params
        await db.User.update(
            { roleId: req.body.role }, { where: { id: id } }
        )

        const user = await db.User.findByPk(id, {

            include: [{
                model: db.Role,
                as: "role"
            },
            {
                model: db.Address,
                as: "address"
            }
            ]
        })

        const roles = await db.Role.findAll()

        if(user.roleId !== 2) {
            req.session.userLogin.roleAdmin = false
            console.log("No tenes permisos")
            res.redirect("/")
          }

        const message = `El rol del usuario se ha actualizado correctamente a "${user.role.name}" `
        return res.render("admin/userDetail", { message, user, roles })

    } catch (error) {

        console.log("Error al editar el usuario:", error)


        return res.redirect(`/admin/dashboard/usuarios/${req.params.id}`)
    }
}
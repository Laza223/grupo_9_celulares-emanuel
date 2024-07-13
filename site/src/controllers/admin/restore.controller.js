const db = require("../../db/models")

module.exports = async (req, res) => {

    try {

        const { id } = req.params

        await db.Product
            .restore({
                where: { id }
            })

        return res.redirect("/admin/dashboard/productos?eliminados=true")
    }

    catch (error) { res.send(error) }
}


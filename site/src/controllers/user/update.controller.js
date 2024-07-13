const db = require("../../db/models");
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            if (!req.session.userLogin) {
                return res.redirect("/");
            }

            const id = req.session.userLogin.id;
            const categories = await db.Category.findAll();
            const user = await db.User.findByPk(id, {
                include: [{ model: db.Address, as: "address" },
                          { model: db.Role, as: "role" }],
                attributes: {
                    exclude: ['password']
                }
            });

            return res.render("user/userEdit2", {
                errors: errors.mapped(),
                old: req.body,
                categories,
                user
            });
        } else {
            const id = req.session.userLogin.id;
            const { name, surname, phoneNumber } = req.body;

            await db.User.update({
                name: name,
                surname: surname,
                avatar: req.file?.filename,
                phoneNumber: phoneNumber
            }, { where: { id } });

            return res.redirect("/perfil");
        }
    } catch (error) {
        console.error("Error al editar el usuario:", error);
        res.redirect("/perfil");
    }
};

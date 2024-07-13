const db = require('../../../db/models')

module.exports = async (req, res) => {
    try {

        const id = +req.params.id;
        const user =
            await db.User
                .findByPk(id, {
                    attributes: [
                        "name",
                        "surname",
                        "email",
                        "avatar"]
                }
                );

        if (!user) { return res.status(404).json({ error: "Usuario no encontrado" }); };

        const avatarURL = `http://localhost:3030/images/users/${user.avatar}`;

        return res.status(200).json({
            user: user,
            avatar: avatarURL,
        });


    } catch (error) {

        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });

    }
};

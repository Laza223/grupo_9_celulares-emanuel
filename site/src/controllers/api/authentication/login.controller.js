const db = require("../../../db/models")
const jwt = require('jsonwebtoken')
const { compare } = require('bcryptjs')

module.exports = async (req, res) => {
    try {
        const userFind = await db.User.findOne({
            where: { email: req.body.email.toLowerCase() },
            include: "address"
        })

        if (userFind) { 
            
            const isValidPassword = await compare(req.body.password, userFind.password)

            if (isValidPassword) {
                const { id, name, surname, avatar, email, roleId } = userFind

                const payload = {
                    id: id,
                    name: name,
                    surname: surname,
                    avatar: avatar,
                    email: email,
                    roleId: roleId
                }

                const token = jwt.sign(payload, process.env.SECRET_HASH, {
                    expiresIn: '1h'
                })

                return res.status(200).json({
                    success: true,
                    token: token
                })
            } else {
                throw new Error("Credenciales inválidas")
            }
        } else {
            throw new Error("Email no encontrado")
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Error interno del servidor",
            message: error.message
        });
    }
}
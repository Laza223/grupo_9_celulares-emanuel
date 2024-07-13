const db = require("../../../db/models")
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {

    try {
        const token = req.headers["authorization"].split(" ")[1]

        console.log(token);

        const decoded = jwt.verify(token, process.env.SECRET_HASH)

        if(decoded){
            const user = await db.User.findByPk(decoded.id,{
                include: [{
                    model: db.Role,
                    as: "role",
                }]
            })

            if(user.role.name === "ADMIN") {
                 return res.status(200).json({
                    adminAccess: true
                })
            } else {
                return res.status(500).json({
                    adminAccess: false
                })
            }
        } else {
            return res.status(500).json({
                adminAccess: false
            })
        }
        // console.log(decoded);
        // console.log({ token: token, ok: "ok" });
    } catch (error) {
        return res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
};

const db = require('../../../db/models')
const sequelize = require("sequelize")

module.exports = async (req, res) => {

    try {

        let offset = req.query.offset ? +req.query.offset : 1

        const { docs, pages, total } =
            await db.User
                .paginate({
                    attributes: [
                        "id",
                        "name",
                        "surname",
                        "avatar",
                        "email",
                        "roleId",
                        [sequelize.fn("CONCAT", "http://localhost:3030/api/users/", sequelize.col("id")), "detail"] ],
                    page: offset,
                    paginate: 10,
                    order: [['createdAt']]
                })

        return res.status(200).send({
            ok: true,
            count: total,
            users: docs,
            page: offset ? offset : 1,
            next: offset < pages ? `http://localhost:3030/api/users?offset=${offset + 1}` : (pages === 1 ? "-" : "Last page"),
            previous: offset > 1 ? `http://localhost:3030/api/users?offset=${offset - 1}` : (pages === 1 ? "-" : "First page")
        })


    } catch (error) {

        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
};


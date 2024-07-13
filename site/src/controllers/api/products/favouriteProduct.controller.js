const db = require('../../../db/models')


module.exports = async (req, res) => {
    try {
        if(req.session.userLogin){
        const productId = req.params.id
        const userId = req.session.userLogin.id

        await db.Userproduct.create(
            {
                userId: userId,
                productId : productId
            }
        )

        return res.status(201).json({
            ok: true,
            msg: "Product add to favourite successfully"
        })
    }

    } catch (error) {

    }
}
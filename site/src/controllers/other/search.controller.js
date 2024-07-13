const db = require('../../db/models');
const { Op } = require('sequelize')

module.exports = async (req, res) => {

    let user = null

    if(req.session.userLogin){
        const {id} = req.session.userLogin

        user = await db.User.findByPk(id,{
            include: "address"
        })
    }
    const {productSearch} = req.query
    
    const categories = await db.Category.findAll();


    const products = await db.Product.findAll({
        where: {
            [ Op.or ]: {
                name: {
                    [Op.like] : `%${productSearch}%`
                },
                description: {
                    [Op.like] : `%${productSearch}%`
                }
            }
        }
    })
        return res.render("./other/search", {products, user, categories})
  
}
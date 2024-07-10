const path = require('path');

module.exports = (req, res) =>{
    const { image } = req.params;
    try {
        res.sendFile(
            path.join(__dirname,'../../../public/images/products/' + image)
        );
    }
    catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
        console.log(error);
    }
};
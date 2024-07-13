const db = require("../../db/models");

module.exports = async (req, res) => {
  const { id } = req.params

  try {

    const deletedProduct =
      await
        db.Product
          .destroy({

            where: { id },
            paranoid: true

          })

    if (deletedProduct) {
      res.status(200).json({ mensaje: 'Producto eliminado correctamente' })
    } else {
      res.status(404).json({ mensaje: 'No se encontró el producto para eliminar' })
    }

  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ mensaje: 'Hubo un problema al intentar eliminar el producto' })
  }
}
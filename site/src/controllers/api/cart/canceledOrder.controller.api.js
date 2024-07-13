const { getOrderPending } = require("../../utils")

module.exports = async (req, res) => {
    try {

        const [order, isCreate] = await getOrderPending(req)

        if (!isCreate) {
            order.state = "canceled"
            await order.save()
        }

        res.status(200).json({
            ok: true,
            msg: "Orden cancelada con éxito"
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message,
        });
    }
}
const mongoose = require("mongoose");

const pedidos = mongoose.model("pedidos");

module.exports = {
    async store(req, res) {

        const createPedidos = await pedidos.create(req.body);
        return res.json(createPedidos);
    },

}
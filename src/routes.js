const express = require("express");
const routes = express.Router();

const productsController = require("./controllers/productsController");
const pedidosController = require('./controllers/pedidosController')

routes.post("/pedidos",pedidosController.store);

routes.get("/products", productsController.index)
routes.get("/products/:id", productsController.show);
routes.post("/products", productsController.store,)
routes.put("/products/:id", productsController.update);
routes.delete("/products/:id", productsController.destroy);
module.exports = routes;

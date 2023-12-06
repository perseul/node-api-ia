const mongoose = require("mongoose");

const Products = require('../models/products')

//const Products = mongoose.model("products");

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Products.paginate({},{ page, limit: 10 });

        return res.json(products);
    },

    async show(req,res){
        const product = await Products.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        const product = await Products.create(req.body);

        return res.json(product);
    },
    
    async update (req,res){
        const product = await Products.findByIdAndUpdate(req.params.id, req.body,{ 
            new : true
            });

            return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }
};
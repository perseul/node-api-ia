const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }  
});

productsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productsSchema)
const mongoose = require("mongoose");

const pedidosSchema = new mongoose.Schema ({
    id: {
        type:String,
        required:true
    },
    adress_line_1: {
        type:String,
        required:true
    },    
    admin_area_1: {
        type:String,
        required:true
    },
    admin_area_2: {
        type:String,
        required:true
    },
    country_code: {
        type:String,
        required:true
    },
    postal_code: {
        type:String,
        required:true
        },
    given_name: {
        type:String,
        required:true
    },        
    surname: {
        type:String,
        required:true
    },
    email_adress: {
        type:String,
        required:true
    },
    payer_id: {
        type:String,
        required:true
    },
    phone_number: {
        type:String,
        required:true
    },
    currency_code: {
        type:String,
        required:true
    },
    value: {
        type:Number,
        required:true
    },                           
});


mongoose.model("pedidos",pedidosSchema);
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB

const DB_USER = 'perseul'
const DB_PASSWORD = encodeURIComponent('dQmJAkc4H5tIRfOL')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@nodeapi.vgc5rva.mongodb.net/?retryWrites=true&w=majority`,
    {useNewUrlParser: true}
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!')

        requireDir("./src/models")

        app.use('/api',require("./src/routes"))

        app.listen(3001)
    })
    .catch((err) => console.log(err))
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const http = require('http');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@nodeapi.vgc5rva.mongodb.net/?retryWrites=true&w=majority`,
    {useNewUrlParser: true}
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!')

        requireDir("./src/models")

        app.use('/api',require("./src/routes"))

        http.createServer(app).listen(3001)

    })
    .catch((err) => console.log(err))
    
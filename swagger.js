const swaggerAutoGen = require('swagger-autogen')({ openapi: '3.0.0'});

const doc = {
    info: {
        version: "1.0.0",
        title: "node-api IA",
        description: "Essa api tem como objetivo manipulação de produtos e pedidos"
    },
    servers: [
        {
            "url": "http://localhost:3001/api",
        }
    ],
    components: {
        schemas: {
            someBody: {
                $name: "Jhon Doe",
                $age: 29,
                about: ""
            },
            someResponse: {
                name: "Jhon Doe",
                age: 29,
                diplomas: [
                    {
                        school: "XYZ University",
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: "XYZ Company"
                        }
                    }
                ]
            },
            someEnum: {
                '@enum': [
                    "red",
                    "yellow",
                    "green"
                ]
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes.js']

swaggerAutoGen(outputFile, endpointsFiles)
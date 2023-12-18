var chai = require('chai')
let {expect, assert} = require('chai');

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('HTTP gorest', function() {

    //Testing products requests
    it('POST products', async function() {
        let res = await chai.request('http://localhost:3001/api')
        .post('/products')
        .send({ "title":"playstation 5 teste",
                "description":"playstation 5",
                "avatar":"https://images.kabum.com.br/produtos/fotos/sync_mirakl/181395/Console-Playstation-5-825GB-Leitor-Digital-PS5-_1658863170_g.jpg",
                "value":"50000",  
                "url":"https://pt.wikipedia.org/wiki/PlayStation_5"
            })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

        expect(res).to.have.status(200);
    });

    it('GET products', async function(){
        let res = await chai.request("http://localhost:3001/api")
        .get("/products")

        expect(res).to.have.status(200);
    });

    //Testing pedidos requests
    it('POST pedidos', async function(){
        let res = await chai.request('http://localhost:3001/api')
        .post('/pedidos')
        .send({ "id":"15hjk", 
                "adress_line_1": "example",
                "admin_area_1": "example2",
                "admin_area_2": "example",
                "country_code": "5",
                "postal_code": "4",
                "given_name": "example",
                "surname": "example",
                "email_adress": "example@address.com",
                "payer_id": "5",
                "phone_number": "5",
                "currency_code": "5",
                "value": "1000"})
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')

        expect(res).to.have.status(200); 
    });
})
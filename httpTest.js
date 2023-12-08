var chai = require('chai')
let {expect, assert} = require('chai');

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('HTTP gorest post', function() {

    it('POST', async function() {
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

    it('Get async', async function(){
        let res = await chai.request("http://localhost:3001/api")
        .get("/products")
    });
})
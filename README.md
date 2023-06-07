# ia product api
----------------

### Overview
A ia product api tem como objetivo controlar o fluxo de dados de um sistema com sistema de pedidos e produtos, utilizando um banco de dados não relacional (MongoDB) para o armazenamento.

### Tecnologia
* Node

### Como utilizar (how to)
`npm run dev`
obs: ter o server do mongo db devidamente configurado e no ar para realizar a conexão

### Models de request para os produtos:
utilize a api desenvolvida com node.js para realizar as requisições (ia-product-api) o link do repositorio se encontra na seção 'Links'
_recomendação utilizar o Insomnia (link para download na seção de link) para realizar as requisições [post, put, delete e get]:_
_request example json_
```
{
  "title":"playstation 5",
  "description":"playstation 5",
  "avatar":"https://images.kabum.com.br/produtos/fotos/sync_mirakl/181395/Console-Playstation-5-825GB-Leitor-Digital-PS5-_1658863170_g.jpg",
  "value":"50000",
  "url":""
}
```
### Links
* [akaitem-frontend:](https://github.com/perseul/akaitem)
* [Download Insomnia rest](https://insomnia.rest/download)
* [Download MongoDb](https://www.mongodb.com/try/download/community)
* [Como instalar e configurar o MongoDB](https://www.youtube.com/watch?v=skK5xj-CK-Q)

----------------
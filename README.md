# ia product api
----------------

### Overview
A ia product api tem como objetivo controlar o fluxo de dados de um sistema com sistema de pedidos e produtos, utilizando um banco de dados não relacional (MongoDB) para o armazenamento.

### Tecnologia
* Node

### Como utilizar (how to)
* _É necessario ter o Node.js instalado em sua maquina para executar os comandos npm no seu console (cmd)_ 

_digite o seguinte comando para instalar as dependecias do projeto (esse comando irá criar a pasta: node_modules no seu projeto, *obs utilizar o comando --force para não ter problemas com as dependencias, pode forçar que o aplicativo irá instalar corretamente):_
```
npm install --force
```
_com a pasta node_modules em seu projeto digite o seguinte comando para iniciar sua api em um servidor local que escuta a porta 3001 (http://localhost:3001/api/)_
```
npm run dev
```
_Para executar o arquivo de testes, primeiramente tenha o server já iniciado, para se certificar no console exibira uma mensagem "Conectado ao MongoDB", logo após inicia um novo terminal e execute o comando o seguinte comando para iniciar os testes com o mocha:_
```
npx mocha ./httpTest
```
![tests](https://github.com/perseul/node-api/assets/53841377/21ba7a31-9743-4e6e-b280-1ccd1210853c)

obs: ter o server do mongo db devidamente configurado e no ar para realizar a conexão, o connection string que está sendo utilizado é um banco criado por mim, mas se voce quiser criar o seu pode mudar as credenciais do banco dentro do arquivo server.js, no método mongoose.connect('user:password@banco').
eu ja criei o banco de dados, então pode iniciar a aplicação com npm run dev e a api já estará pronta para receber os requests do Insomnia. (cluster online atualmente pode usar o meu, liberei para ser acessado de qualquer IP)

### Models de request para os produtos:
utilize a api desenvolvida com node.js para realizar as requisições (ia-product-api) o link do repositorio se encontra na seção 'Links'
_recomendação utilizar o Insomnia (link para download na seção de link) para realizar as requisições [post, put, delete e get]:_

_request example json_
POST:http://localhost:3001/api/products (URI DE REQUEST)
```
{
  "title":"playstation 5 teste",
	"description":"playstation 5",				 
  "avatar":"https://images.kabum.com.br/produtos/fotos/sync_mirakl/181395/          Console-Playstation-5-825GB-Leitor-Digital-PS5-_1658863170_g.jpg",
	"value":"50000",  
	"url":"https://pt.wikipedia.org/wiki/PlayStation_5"
}
```
GET: http://localhost:3001/api/products (para listar todos produtos existentes no banco)

DELETE: http://localhost:3001/api/products/{id} (inserir id do produto a ser deletado)

_exemplo de request no Insomnia, no caso utilizei o seguinte url: http://localhost:3001/api/products porém voce também pode utilizar o seu endereço de ip:3001 exemplo: http://192.168.1.34:3001/api/products ({seu_ip}:3001/api/products)_
![Captura de tela_2023-06-13_11-58-40](https://github.com/perseul/node-api/assets/53841377/f05f71fc-9473-49df-bf20-97dc223e0906)

_Para acessar a documentação da API via interface Swagger, com o server iniciado digite o seguinte URL em seu navegador: http://localhost:3001/doc/_
![Swagger](https://github.com/perseul/node-api/assets/53841377/1902ec44-d419-4dd7-9e31-3b81ffdbe695)

### Links
* [akaitem-frontend:](https://github.com/perseul/akaitem)
* [Download Insomnia rest](https://insomnia.rest/download)
* [Wiki do projeto (How to: MongoDB, Insomnia, Node)](https://github.com/perseul/node-api/wiki)

----------------

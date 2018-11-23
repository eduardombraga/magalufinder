
# MagaluFinder
O magalufinder é uma aplicação desenvolvida para o desafio da Tribo Operações Comerciais.
Seu objetivo é ajudar os clientes do Magalu a encontrarem as lojas mais próximas que possuam o produto desejado.
Aqui está a [descrição completa do desafio](https://gist.github.com/luisfelipegodoi/03139e6e00b7db6d387369de6e7ffe4a).

## Requisitos

* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/get-npm)
* [MySql](https://www.mysql.com)
* [Postman](https://www.getpostman.com/)

## Instalação

``` bash
# clone o repositório
$ git clone https://github.com/luisfelipegodoi/magalufinder magalufinder-luis-felipe

# acesse o diretório da aplicação
$ cd magalufinder-luis-felipe

# instale as dependências da aplicação
$ npm install
```

### Antes de tudo

``` bash
# abra o arquivo 'knexfile.js' no diretório raiz do projeto.
# neste arquivo estão as configurações usadas para a base mysql local.
# caso seja divergente, necessario alterar no arquivo tambem (somente alterar o nó 'connection').
$ abra sua base mysql local e execute o  comando ```CREATE DATABASE magalufinder``` 
```

Após a criação da base local, já é possível executar as ```migrations``` e as ```seeds```.

``` bash
# instale o modulo knex globalmente
$ sudo npm install knex -g
```

``` bash
# executa o up 'criação' das migrations
$ knex migrate:latest
```

``` bash
# executa o down 'drop' das migrations
$ knex migrate:rollback
```

``` bash
# executa as seeds, respeitando a ordem numérica dos arquivos
$ knex seed:run
```

### Iniciando

``` bash
# o serviço será iniciado em: http://localhost:8000
$ npm start
```

Navegue até [http://localhost:8000](http://localhost:8000). A aplicação será carregada automaticamente após a execução do comando mencionado acima.

### Testando

```bash
# execute `test` para executar os testes unitários.
$ npm run test
```

## Estrutura do projeto

A aplicação está organizada da seguinte forma:

```
├── api/
│   ├── controllers/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── seeds/
│   ├── test/
│   ├── .babelrc
│   ├── .env
│   ├── .jshintrc
│   ├── .travis.yml
│   ├── .index.js
│   └── .package.json
│
├── front/
│   ├── public/
│   ├── src/
│   ├── .editorconfig
│   ├── .env
│   └── package.json
│
└── README.md
```
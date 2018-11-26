'use strict';

function ProductsStoresModel(knex) {
    this.db = knex;
};

ProductsStoresModel.prototype.getAllProductsStores = function() {
    return this.db('productsstores').select();
};

ProductsStoresModel.prototype.findProductStoreByProperty = function(prop, value) {
    return this.db('productsstores').select().where('productid', value);
};

ProductsStoresModel.prototype.getProductsStores = function(start, limit) {
    var productsstores = this.getAllProductsStores();

    return productsstores;
};

ProductsStoresModel.prototype.getProductStore = function(id) {
    var product = this.findProductStoreByProperty('productid', id);

    if (!product) {
        throw new Error('Product doesn\'t exists.');
    }

    return product;
};

ProductsStoresModel.prototype.addProductStore = function(productid, storeid) {

    return this.db('productsstores').insert({
        productid: productid,
        storeid: storeid
    }).then(function (data){
        return 'Produto x Loja criado com sucesso.';
    }).catch(function (err){
        return 'Falha ao criar produto x loja.';
    });
};

module.exports = ProductsStoresModel;
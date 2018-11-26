'use strict';

function ProductsStoresModel(knex) {
    this.db = knex;
};

ProductsStoresModel.prototype.getAllProductsStores = function() {
    return this.db('productsstores').select();
};

ProductsStoresModel.prototype.getProductsStores = function(start, limit) {
    var productsstores = this.getAllProductsStores();

    return productsstores;
};

module.exports = ProductsStoresModel;
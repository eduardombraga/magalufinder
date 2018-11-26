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

module.exports = ProductsStoresModel;
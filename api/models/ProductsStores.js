'use strict';

var crypto = require('crypto');

function ProductsStoresModel(database) {
    this.db = database;
};

ProductsStoresModel.prototype.getAllProductsStores = function() {
    return this.db.get('productsstores') || [];
};

ProductsStoresModel.prototype.getProductsStores = function(start, limit) {
    var products = this.getAllProductsStores();
    return products.slice(start, limit + 1);
};

module.exports = ProductsStoresModel;
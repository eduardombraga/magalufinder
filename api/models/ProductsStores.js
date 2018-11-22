'use strict';

var crypto = require('crypto');

function ProductsStoresModel(database) {
    this.db = database;
};

ProductsStoresModel.prototype.getAllProductsStores = function() {
    return this.db.get('productsstores') || [];
};

module.exports = ProductsStoresModel;
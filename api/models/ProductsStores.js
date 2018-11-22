'use strict';

var crypto = require('crypto');

function ProductsStoresModel(database) {
    this.db = database;
};

module.exports = ProductsStoresModel;
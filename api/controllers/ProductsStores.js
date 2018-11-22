'use strict';

var Boom = require('boom');
var ProductsStoresModel = require('../models/ProductsStores');

function ProductsStoresController(database) {
    this.productsstoresModel = new ProductsStoresModel(database);
};

// [GET] /productsstores
ProductsStoresController.prototype.index = function(request, reply) {
    var start = request.query.start;
    var limit = request.query.limit;

    if (start == null) {
        start = 0
    }

    if (limit == null) {
        limit = start + 9
    }

    reply(this.productsstoresModel.getProducts(start, limit));
};

module.exports = ProductsStoresController;
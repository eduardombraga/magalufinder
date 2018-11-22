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

// [GET] /productsstores/{id}
ProductsStoresController.prototype.show = function(request, reply) {
    try {
        var id = request.params.id;

        reply(this.productsstoresModel.getProduct(id));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [POST] /productsstores
ProductsStoresController.prototype.store = function(request, reply) {
    try {
        var value = request.payload.product;

        reply(this.productsstoresModel.addProduct(value))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

// [PUT] /productsstores/{id}
ProductsStoresController.prototype.update = function(request, reply) {
    try {
        var id = request.params.id;
        var product = request.payload.product;

        reply(this.productsstoresModel.updateProduct(id, product));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

module.exports = ProductsStoresController;
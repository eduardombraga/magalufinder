'use strict';

var Boom = require('boom');
var ProductsModel = require('../models/Products');

function ProductsController(database) {
    this.productsModel = new ProductsModel(database);
};

// [GET] /products
ProductsController.prototype.index = function(request, reply) {
    var start = request.query.start;
    var limit = request.query.limit;

    if (start == null) {
        start = 0
    }

    if (limit == null) {
        limit = start + 9
    }

    reply(this.productsModel.getProducts(start, limit));
};

// [GET] /products/{id}
ProductsController.prototype.show = function(request, reply) {
    try {
        var id = request.params.id;

        reply(this.productsModel.getProduct(id));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [POST] /products
ProductsController.prototype.store = function(request, reply) {
    try {
        var value = request.payload.product;

        reply(this.productsModel.addProduct(value))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

// [PUT] /products/{id}
ProductsController.prototype.update = function(request, reply) {
    try {
        var id = request.params.id;
        var product = request.payload.product;

        reply(this.productsModel.updateProduct(id, product));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [DELETE] /products/{id}
ProductsController.prototype.destroy = function(request, reply) {
    try {
        var id = request.params.id;

        this.productsModel.deleteProduct(id);
        reply().code(204);
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

module.exports = ProductsController;

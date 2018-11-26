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

    reply(this.productsstoresModel.getProductsStores(start, limit));
};

// [GET] /productsstores/{id}
ProductsStoresController.prototype.show = function(request, reply) {
    try {
        var id = request.params.id;

        reply(this.productsstoresModel.getProductStore(id));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [POST] /productsstores
ProductsStoresController.prototype.store = function(request, reply) {
    try {
        var productid = request.payload.productid;
        var storeid = request.payload.storeid;

        reply(this.productsstoresModel.addProductStore(productid, storeid))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

// [PUT] /productsstores/{id}
ProductsStoresController.prototype.update = function(request, reply) {
    try {
        var productidParam = request.params.productid;
        var storeidParam = request.params.storeid;
        var productid = request.payload.productid;
        var storeid = request.payload.storeid;

        reply(this.productsstoresModel.updateProduct(productidParam, storeidParam, productid, storeid));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [DELETE] /productsstores/{id}
ProductsStoresController.prototype.destroy = function(request, reply) {
    try {
        var productid = request.params.productid;
        var storeid = request.params.storeid;

        this.productsstoresModel.deleteProductStore(productid, storeid);
        reply().code(204);
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

module.exports = ProductsStoresController;
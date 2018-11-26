'use strict';

var Boom = require('boom');
var StoresModel = require('../models/Stores');

function StoresController(database) {
    this.storesModel = new StoresModel(database);
};

// [GET] /stores
StoresController.prototype.index = function(request, reply) {
    var start = request.query.start;
    var limit = request.query.limit;

    if (start == null) {
        start = 0
    }

    if (limit == null) {
        limit = start + 9
    }

    reply(this.storesModel.getStores(start, limit));
};

// [GET] /stores/{id}
StoresController.prototype.show = function(request, reply) {
    try {
        var id = request.params.id;

        reply(this.storesModel.getStore(id));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [POST] /stores
StoresController.prototype.store = function(request, reply) {
    try {
        var storeid = request.payload.storeid;
        var cep = request.payload.cep;
        var description = request.payload.description;

        reply(this.storesModel.addStore(storeid, cep, description))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

// [PUT] /stores/{id}
StoresController.prototype.update = function(request, reply) {
    try {
        var id = request.params.id;
        var store = request.payload.store;

        reply(this.storesModel.updateStore(id, store));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [DELETE] /stores/{id}
StoresController.prototype.destroy = function(request, reply) {
    try {
        var id = request.params.id;

        this.storesModel.deleteStore(id);
        reply().code(204);
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

module.exports = StoresController;

'use strict';

var Boom = require('boom');

// [GET] /findnearproducts
FindNearProductsController.prototype.index = function(request, reply) {
    var start = request.query.start;
    var limit = request.query.limit;

    if (start == null) {
        start = 0
    }

    if (limit == null) {
        limit = start + 9
    }

    reply('FindNearProducts');
};

module.exports = FindNearProductsController;
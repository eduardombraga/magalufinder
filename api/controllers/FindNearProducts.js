'use strict';

var Boom = require('boom');

// [GET] /findnearproducts
FindNearProductsController.prototype.index = function(request, reply) {
    
    reply('FindNearProducts');
};

module.exports = FindNearProductsController;
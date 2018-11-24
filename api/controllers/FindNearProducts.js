'use strict';

var Boom = require('boom');
var req = require('request');

function FindNearProductsController() {
};

// [GET] /findnearproducts
FindNearProductsController.prototype.index = function(request, reply) {

    try {
        req('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+request.params.originCep+'&destinations='+request.params.destinationCep+'&key='+process.env.GMAPS_TOKEN, function (error, response, body) {
            reply(body);
        });
    } catch (error) {
        reply(Boom.badRequest(error.message));
    }
};

module.exports = FindNearProductsController;
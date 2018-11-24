'use strict';

var Boom = require('boom');
var req = require('request');

function FindNearProductsController() {
};

// [GET] /findnearproducts/{originCep}/{destinationCep}
FindNearProductsController.prototype.index = function(request, reply) {

    try {
        req('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+request.params.originCep+'&destinations='+request.params.destinationCep+'&key='+process.env.GMAPS_TOKEN, function (error, response, body) { 
            var origin_addresses = JSON.parse(body).origin_addresses;    
            var destination_addresses = JSON.parse(body).destination_addresses;

            reply(JSON.parse(body).rows[0].elements);
        });
    } catch (error) {
        reply(Boom.badRequest(error.message));
    }
};

// [GET] /findnearproducts/{productid}/{originCep}/{destinationCep}
FindNearProductsController.prototype.findnearstores = function(request, reply) {

    try {
        req('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+request.params.originCep+'&destinations='+request.params.destinationCep+'&key='+process.env.GMAPS_TOKEN, function (error, response, body) { 
            var origin_addresses = JSON.parse(body).origin_addresses;    
            var destination_addresses = JSON.parse(body).destination_addresses;

            reply(JSON.parse(body).rows[0].elements);
        });
    } catch (error) {
        reply(Boom.badRequest(error.message));
    }
};

module.exports = FindNearProductsController;
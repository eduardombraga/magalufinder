'use strict';

var Boom = require('boom');
var req = require('request');

var options = {
    method: 'GET',
    json: true
}
var originCep = '14403-363';
var destinationCep = '14010-060';

function FindNearProductsController() {
};

// [GET] /findnearproducts
FindNearProductsController.prototype.index = function(request, reply) {

    try {
        req('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+originCep+'&destinations='+destinationCep+'&key='+process.env.GMAPS_TOKEN, function (error, response, body) {
            reply(body);
        });
    } catch (error) {
        reply(Boom.badRequest(error.message));
    }

    //reply('FindNearProducts');
};

module.exports = FindNearProductsController;
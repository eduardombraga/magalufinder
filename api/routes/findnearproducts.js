'use strict';

// FindNearProducts routes
var Joi = require('joi');
var FindNearProductsController = require('../controllers/FindNearProducts');
var StoresController = require('../controllers/Stores');

exports.register = function(server, options, next) {
    // Setup the controller
    var findnearproductsController = new FindNearProductsController(options.knex);

    // Binds all methods
    // similar to doing `findnearproductsController.index.bind(findnearproductsController);`
    // when declaring handlers
    server.bind(findnearproductsController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/distancebetweenceps/{originCep}/{destinationCep}',
            config: {
                handler: findnearproductsController.index,
                validate: {
                    params: {
                        originCep: Joi.string().required().min(1).max(10),
                        destinationCep: Joi.string().required().min(1).max(10)
                    }
                }
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'routes-findnearproductsController',
    version: '1.0.1'
};

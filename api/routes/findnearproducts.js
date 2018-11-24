'use strict';

// FindNearProducts routes
var Joi = require('joi');
var FindNearProductsController = require('../controllers/FindNearProducts');

exports.register = function(server, options, next) {
    // Setup the controller
    var findnearproductsController = new FindNearProductsController(options.database);

    // Binds all methods
    // similar to doing `findnearproductsController.index.bind(findnearproductsController);`
    // when declaring handlers
    server.bind(findnearproductsController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/findnearproducts',
            config: {
                handler: findnearproductsController.index,
                validate: {
                    query: Joi.object().keys({
                        start: Joi.number().min(0),
                        limit: Joi.number().min(1)
                    })
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

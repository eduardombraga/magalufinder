'use strict';

// ProductsStores routes
var Joi = require('joi');
var ProductsStoresController = require('../controllers/ProductsStores');

exports.register = function(server, options, next) {
    // Setup the controller
    var productsstoresController = new ProductsStoresController(options.database);

    // Binds all methods
    // similar to doing `productsstoresController.index.bind(productsstoresController);`
    // when declaring handlers
    server.bind(productsstoresController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/productsstores',
            config: {
                handler: productsstoresController.index,
                validate: {
                    query: Joi.object().keys({
                        start: Joi.number().min(0),
                        limit: Joi.number().min(1)
                    })
                }
            }
        },
        {
            method: 'GET',
            path: '/productsstores/{id}',
            config: {
                handler: productsstoresController.show,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    }
                }
            }
        },
        {
            method: 'POST',
            path: '/productsstores',
            config: {
                handler: productsstoresController.store,
                validate: {
                    payload: Joi.object().length(1).keys({
                        productname: Joi.string().required().min(1).max(50),
                        productvalue: Joi.number().required(),
                        description: Joi.string().required().min(1).max(100)
                    })
                }
            }
        },
        {
            method: 'PUT',
            path: '/productsstores/{id}',
            config: {
                handler: productsstoresController.update,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    },
                    payload: Joi.object().length(1).keys({
                        productname: Joi.string().required().min(1).max(50),
                        productvalue: Joi.number().required(),
                        description: Joi.string().required().min(1).max(100)
                    })
                }
            }
        },
        {
            method: 'DELETE',
            path: '/productsstores/{id}',
            config: {
                handler: productsstoresController.destroy,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    }
                }
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'routes-productsstores',
    version: '1.0.1'
};

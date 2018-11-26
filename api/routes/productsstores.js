'use strict';

// ProductsStores routes
var Joi = require('joi');
var ProductsStoresController = require('../controllers/ProductsStores');

exports.register = function(server, options, next) {
    // Setup the controller
    var productsstoresController = new ProductsStoresController(options.knex);

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
                        id: Joi.string().required().min(1).max(20)
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
                    payload: Joi.object().length(2).keys({
                        productid: Joi.number().required(),
                        storeid: Joi.number().required()
                    })
                }
            }
        },
        {
            method: 'PUT',
            path: '/productsstores/{productid}/{storeid}',
            config: {
                handler: productsstoresController.update,
                validate: {
                    params: {
                        productid: Joi.string().required().min(1).max(20),
                        storeid: Joi.string().required().min(1).max(20)
                    },
                    payload: Joi.object().length(2).keys({
                        productid: Joi.number().required(),
                        storeid: Joi.number().required()
                    })
                }
            }
        },
        {
            method: 'DELETE',
            path: '/productsstores/{productid}/{storeid}',
            config: {
                handler: productsstoresController.destroy,
                validate: {
                    params: {
                        productid: Joi.string().required().min(1).max(20),
                        storeid: Joi.string().required().min(1).max(20)
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

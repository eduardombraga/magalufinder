'use strict';

// Products routes
var Joi = require('joi');
var ProductsController = require('../controllers/Products');

exports.register = function(server, options, next) {
    // Setup the controller
    var productsController = new ProductsController(options.knex);

    // Binds all methods
    // similar to doing `productsController.index.bind(productsController);`
    // when declaring handlers
    server.bind(productsController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/products',
            config: {
                handler: productsController.index,
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
            path: '/products/{id}',
            config: {
                handler: productsController.show,
                validate: {
                    params: {
                        id: Joi.string().required().min(1).max(20)
                    }
                }
            }
        },
        {
            method: 'POST',
            path: '/products',
            config: {
                handler: productsController.store,
                validate: {
                    payload: Joi.object().length(3).keys({
                        productname: Joi.string().required().min(1).max(50),
                        productvalue: Joi.number().required(),
                        description: Joi.string().required().min(1).max(100)
                    })
                }
            }
        },
        {
            method: 'PUT',
            path: '/products/{id}',
            config: {
                handler: productsController.update,
                validate: {
                    params: {
                        id: Joi.string().required().min(1).max(20)
                    },
                    payload: Joi.object().length(3).keys({
                        productname: Joi.string().required().min(1).max(50),
                        productvalue: Joi.number().required(),
                        description: Joi.string().required().min(1).max(100)
                    })
                }
            }
        },
        {
            method: 'DELETE',
            path: '/products/{id}',
            config: {
                handler: productsController.destroy,
                validate: {
                    params: {
                        id: Joi.string().required().min(1).max(20)
                    }
                }
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'routes-products',
    version: '1.0.1'
};

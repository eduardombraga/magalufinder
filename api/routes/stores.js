'use strict';

// Stores routes
var Joi = require('joi');
var StoresController = require('../controllers/Stores');

exports.register = function(server, options, next) {
    // Setup the controller
    var storesController = new StoresController(options.database);

    // Binds all methods
    // similar to doing `storesController.index.bind(storesController);`
    // when declaring handlers
    server.bind(storesController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/stores',
            config: {
                handler: storesController.index,
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
            path: '/stores/{id}',
            config: {
                handler: storesController.show,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    }
                }
            }
        },
        {
            method: 'POST',
            path: '/stores',
            config: {
                handler: storesController.store,
                validate: {
                    payload: Joi.object().length(1).keys({
                        storeid: Joi.string().required().min(1).max(20),
                        cep: Joi.string().required().min(1).max(10),
                        description: Joi.string().required().min(1).max(100)
                    })
                }
            }
        },
        {
            method: 'PUT',
            path: '/stores/{id}',
            config: {
                handler: storesController.update,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    },
                    payload: Joi.object().length(1).keys({
                        storeid: Joi.string().required().min(1).max(20),
                        cep: Joi.string().required().min(1).max(10),
                        description: Joi.string().required().min(1).max(100)
                    })
                }
            }
        },
        {
            method: 'DELETE',
            path: '/stores/{id}',
            config: {
                handler: storesController.destroy,
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
    name: 'routes-stores',
    version: '1.0.1'
};

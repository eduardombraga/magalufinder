'use strict';

// Users routes
var Joi = require('joi');
var UsersController = require('../controllers/Users');

exports.register = function(server, options, next) {
    // Setup the controller
    var usersController = new UsersController(options.knex);

    // Binds all methods
    // similar to doing `usersController.index.bind(usersController);`
    // when declaring handlers
    server.bind(usersController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/users',
            config: {
                handler: usersController.index,
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
            path: '/users/{id}',
            config: {
                handler: usersController.show,
                validate: {
                    params: {
                        id: Joi.string().required().min(1).max(20)
                    }
                }
            }
        },
        {
            method: 'POST',
            path: '/users',
            config: {
                handler: usersController.store,
                validate: {
                    payload: Joi.object().length(3).keys({
                        username: Joi.string().required().min(1).max(20),
                        userpassword: Joi.string().required().min(1).max(50),
                        useradmin: Joi.bool().default(false)
                    })
                }
            }
        },
        {
            method: 'PUT',
            path: '/users/{id}',
            config: {
                handler: usersController.update,
                validate: {
                    params: {
                        id: Joi.string().required().min(1).max(20)
                    },
                    payload: Joi.object().length(3).keys({
                        username: Joi.string().required().min(1).max(20),
                        userpassword: Joi.string().required().min(1).max(50),
                        useradmin: Joi.bool()
                    })
                }
            }
        },
        {
            method: 'DELETE',
            path: '/users/{id}',
            config: {
                handler: usersController.destroy,
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
    name: 'routes-users',
    version: '1.0.1'
};

'use strict';

// Login routes
var Joi = require('joi');
var LoginController = require('../controllers/Login');

exports.register = function(server, options, next) {
    // Setup the controller
    var loginController = new LoginController(options.knex);

    // Binds all methods
    // similar to doing `loginController.index.bind(loginController);`
    // when declaring handlers
    server.bind(loginController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/login/{user}/{pass}',
            config: {
                handler: loginController.index,
                validate: {
                    params: {
                        user: Joi.string().required().min(1).max(20),
                        pass: Joi.string().required().min(1).max(50)
                    }
                }
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'routes-login',
    version: '1.0.1'
};

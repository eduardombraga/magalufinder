'use strict';

var Boom = require('boom');
var UsersModel = require('../models/Users');

function LoginController(knex) {
    this.usersModel = new UsersModel(knex);
};

// [GET] /users
LoginController.prototype.index = function(request, reply) {
    var user = request.params.user;
    var pass = request.params.pass;

    reply(this.usersModel.loginAuthUser(user, pass));
};

module.exports = LoginController;
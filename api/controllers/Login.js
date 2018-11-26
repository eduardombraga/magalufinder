'use strict';

var Boom = require('boom');
var UsersModel = require('../models/Users');

function LoginController(knex) {
    this.usersModel = new UsersModel(knex);
};

// [GET] /users
LoginController.prototype.index = function(request, reply) {
    var start = request.query.start;
    var limit = request.query.limit;

    if (start == null) {
        start = 0
    }

    if (limit == null) {
        limit = start + 9
    }

    reply(this.usersModel.getUsers(start, limit));
};

module.exports = LoginController;
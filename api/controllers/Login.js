'use strict';

var Boom = require('boom');
var UsersModel = require('../models/Users');

function UsersController(database) {
    this.usersModel = new UsersModel(database);
};

// [GET] /users
UsersController.prototype.index = function(request, reply) {
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

// [GET] /users/{id}
UsersController.prototype.show = function(request, reply) {
    try {
        var id = request.params.id;

        reply(this.usersModel.getUser(id));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [POST] /users
UsersController.prototype.store = function(request, reply) {
    try {
        var value = request.payload.user;

        reply(this.usersModel.addUser(value))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

module.exports = UsersController;
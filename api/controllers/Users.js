'use strict';

var Boom = require('boom');
var UsersModel = require('../models/Users');

function UsersController(knex) {
    this.usersModel = new UsersModel(knex);
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
        var username = request.payload.username;
        var userpassword = request.payload.userpassword;
        var useradmin = request.payload.useradmin;

        reply(this.usersModel.addUser(username, userpassword, useradmin))
            .created();
    } catch (e) {
        reply(Boom.badRequest(e.message));
    }
};

// [PUT] /users/{id}
UsersController.prototype.update = function(request, reply) {
    try {
        var id = request.params.id;
        var user = request.payload.user;

        reply(this.usersModel.updateUser(id, user));
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

// [DELETE] /users/{id}
UsersController.prototype.destroy = function(request, reply) {
    try {
        var id = request.params.id;

        this.usersModel.deleteUser(id);
        reply().code(204);
    } catch (e) {
        reply(Boom.notFound(e.message));
    }
};

module.exports = UsersController;

'use strict';

var Boom = require('boom');
var UsersModel = require('../models/Users');

function LoginController(knex) {
    this.usersModel = new UsersModel(knex);
};



module.exports = UsersController;
'use strict';

function UsersModel(knex) {
    this.db = knex;
};

UsersModel.prototype.getAllUsers = function() {
    //return this.db.select().from('users');
    return this.db('users').select();
};

UsersModel.prototype.findUserByProperty = function(prop, value) {

    return this.db('users').select().where('id', value);
};

UsersModel.prototype.getUsers = function(start, limit) {
    var users = this.getAllUsers();

    return users;
};

UsersModel.prototype.getUser = function(id) {
    var user = this.findUserByProperty('id', id);

    if (!user) {
        throw new Error('User doesn\'t exists.');
    }

    return user;
};

UsersModel.prototype.addUser = function(username, userpassword, useradmin) {

    var user = this.db('users').insert({
        username: username,
        userpassword: userpassword,
        useradmin: useradmin
    });

    return user;
};

UsersModel.prototype.updateUser = function(id, updatedUser) {
    updatedUser = updatedUser.trim();

    var user = this.findUserByProperty('id', id);

    if (!user) {
        throw new Error('User doesn\'t exists.');
    }

    user.value = updatedUser;

    return user;
};

UsersModel.prototype.deleteUser = function(id) {
    if (!this.findUserByProperty('id', id)) {
       throw new Error('User doesn\'t exists.');
    }

    this.db('users').where('id', id).del();
    console.log(id);
    return;
};

module.exports = UsersModel;

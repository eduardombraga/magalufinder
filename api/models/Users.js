'use strict';

function UsersModel(knex) {
    this.db = knex;
};

UsersModel.prototype.getAllUsers = function() {
    return this.db.select().from('users');
};

UsersModel.prototype.findUserByProperty = function(prop, value) {

    return this.db.select().from('users').where('id', value);
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

UsersModel.prototype.addUser = function(newUser) {

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

    var user, i, len;
    var users = this.getAllUsers();

    for (i = 0, len = users.length; i < len; i++) {
        user = users[i];
        if (user.id === id) {
            // Removes user
            users.splice(i, 1);
            this.db.set('users', users);
            return;
        }
    }
};

module.exports = UsersModel;

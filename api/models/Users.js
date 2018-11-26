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

UsersModel.prototype.updateUser = function(id, username, userpassword, useradmin) {
    
    var user = this.findUserByProperty('id', id);

    if (!user) {
        throw new Error('User doesn\'t exists.');
    }

    return this.db('users').where('id', id).update({
        username: username,
        userpassword: userpassword,
        useradmin: useradmin
    }).then(function (data){
        return 'Usuario atualizado com sucesso.';
    }).catch(function (err){
        return 'Falha ao atualizar usuário.';
    });
};

UsersModel.prototype.deleteUser = function(id) {
    if (!this.findUserByProperty('id', id)) {
       throw new Error('User doesn\'t exists.');
    }

    return this.db('users').where('id', id)
            .del()
            .then(function (data){
                return 'Usuario removido com sucesso.';
            })
            .catch(function (err){
                return 'Falha ao deletar usuário.';
            });
};

module.exports = UsersModel;

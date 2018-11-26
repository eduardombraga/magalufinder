'use strict';

function StoresModel(knex) {
    this.db = knex;
};

StoresModel.prototype.getAllStores = function() {
    return this.db('stores').select();
};

StoresModel.prototype.findStoreByProperty = function(prop, value) {
    return this.db('stores').select().where('storeid', value);
};

StoresModel.prototype.getStores = function(start, limit) {
    var stores = this.getAllStores();

    return stores;
};

StoresModel.prototype.getStore = function(id) {
    var store = this.findStoreByProperty('id', id);

    if (!store) {
        throw new Error('Store doesn\'t exists.');
    }

    return store;
};

StoresModel.prototype.addStore = function(storeid, cep, description) {

    return this.db('stores').insert({
        storeid: storeid,
        cep: cep,
        description: description
    }).then(function (data){
        return 'Filial criada com sucesso.';
    }).catch(function (err){
        return 'Falha ao criar filial.';
    });
};

StoresModel.prototype.updateStore = function(id, storeid, cep, description) {

    var store = this.findStoreByProperty('storeid', id);

    if (!store) {
        throw new Error('Store doesn\'t exists.');
    }

    return this.db('stores').where('storeid', id).update({
        storeid: storeid,
        cep: cep,
        description: description
    }).then(function (data){
        return 'Filial atualizada com sucesso.';
    }).catch(function (err){
        return 'Falha ao atualizar filial.';
    });
};

StoresModel.prototype.deleteStore = function(id) {
    if (!this.findStoreByProperty('id', id)) {
        throw new Error('Store doesn\'t exists.');
    }

    var store, i, len;
    var stores = this.getAllStores();

    for (i = 0, len = stores.length; i < len; i++) {
        store = stores[i];
        if (store.id === id) {
            // Removes store
            stores.splice(i, 1);
            this.db.set('stores', stores);
            return;
        }
    }
};

module.exports = StoresModel;

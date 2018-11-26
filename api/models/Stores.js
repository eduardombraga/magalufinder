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
    if (!this.findStoreByProperty('storeid', id)) {
        throw new Error('Store doesn\'t exists.');
    }

    return this.db('stores').where('storeid', id)
            .del()
            .then(function (data){
                return 'Filial removida com sucesso.';
            })
            .catch(function (err){
                return 'Falha ao deletar filial.';
            });
};

StoresModel.prototype.getStoresByProduct = function(productid) {

    return this.db('productsstores')
                .where('productsstores.productid', productid)
                .join('products', 'productsstores.productid', 'products.id')
                .join('stores', 'productsstores.storeid', 'stores.storeid');
};

StoresModel.prototype.getStoresByCeps = function(ceps) {

    return this.db('stores').whereIn('cep', ceps);
};

module.exports = StoresModel;

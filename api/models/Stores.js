'use strict';

function StoresModel(knex) {
    this.db = knex;
};

StoresModel.prototype.getAllStores = function() {
    return this.db('stores').select();
};

StoresModel.prototype.findStoreByProperty = function(prop, value) {
    var store, i, len;
    var stores = this.getAllStores();

    for (i = 0, len = stores.length; i < len; i++) {
        store = stores[i];
        if (store[prop] === value) {
            return store;
        }
    }

    return null;
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

StoresModel.prototype.addStore = function(newStore) {
    var stores = this.getAllStores();
    newStore = newStore.trim();

    // We don't want duplicates
    if (this.findStoreByProperty('value', newStore)) {
        throw new Error('Store already exists for id: ' + store.id);
    }

    var store = {
        // Collisions can happen but unlikely
        // 1 byte to hex turns into two characters
        id: crypto.randomBytes(8).toString('hex'),
        value: newStore
    }
    stores.push(store);

    this.db.set('stores', stores);

    return store;
};

StoresModel.prototype.updateStore = function(id, updatedStore) {
    updatedStore = updatedStore.trim();

    var store = this.findStoreByProperty('id', id);

    if (!store) {
        throw new Error('Store doesn\'t exists.');
    }

    store.value = updatedStore;

    return store;
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

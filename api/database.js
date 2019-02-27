'use strict';

module.exports = function() {
    var store = {};

    function Database() {};

    Database.prototype.get = function(key) {
        var value;
        return value = typeof store !== 'undefined' && store !== null ? store[key] : void 0;
    };

    Database.prototype.set = function(key, value) {
        store[key] = value;
        return store[key];
    };

    // Used in tests
    Database.prototype.clear = function() {
        store = {};
    };

    return new Database();
};

'use strict';

function ProductsModel(knex) {
    this.db = knex;
};

ProductsModel.prototype.getAllProducts = function() {
    return this.db('products').select();
};

ProductsModel.prototype.findProductByProperty = function(prop, value) {
    return this.db('products').select().where('id', value);
};

ProductsModel.prototype.getProducts = function(start, limit) {
    var products = this.getAllProducts();

    return products;
};

ProductsModel.prototype.getProduct = function(id) {
    var product = this.findProductByProperty('id', id);

    if (!product) {
        throw new Error('Product doesn\'t exists.');
    }

    return product;
};

ProductsModel.prototype.addProduct = function(newProduct) {
    var products = this.getAllProducts();
    newProduct = newProduct.trim();

    // We don't want duplicates
    if (this.findProductByProperty('value', newProduct)) {
        throw new Error('Product already exists for id: ' + product.id);
    }

    var product = {
        // Collisions can happen but unlikely
        // 1 byte to hex turns into two characters
        id: crypto.randomBytes(8).toString('hex'),
        value: newProduct
    }
    products.push(product);

    this.db.set('products', products);

    return product;
};

ProductsModel.prototype.updateProduct = function(id, updatedProduct) {
    updatedProduct = updatedProduct.trim();

    var product = this.findProductByProperty('id', id);

    if (!product) {
        throw new Error('Product doesn\'t exists.');
    }

    product.value = updatedProduct;

    return product;
};

ProductsModel.prototype.deleteProduct = function(id) {
    if (!this.findProductByProperty('id', id)) {
        throw new Error('Product doesn\'t exists.');
    }

    var product, i, len;
    var products = this.getAllProducts();

    for (i = 0, len = products.length; i < len; i++) {
        product = products[i];
        if (product.id === id) {
            // Removes product
            products.splice(i, 1);
            this.db.set('products', products);
            return;
        }
    }
};

module.exports = ProductsModel;

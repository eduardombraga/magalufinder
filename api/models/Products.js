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

ProductsModel.prototype.addProduct = function(productname, productvalue, description) {

    return this.db('products').insert({
        productname: productname,
        productvalue: productvalue,
        description: description
    }).then(function (data){
        return {userMessage: 'Produto criado com sucesso.'};
    }).catch(function (err){
        return {userMessage: 'Falha ao criar produto.'};
    });
};

ProductsModel.prototype.updateProduct = function(id, productname, productvalue, description) {

    var product = this.findProductByProperty('id', id);

    if (!product) {
        throw new Error('Product doesn\'t exists.');
    }

    return this.db('products').where('id', id).update({
        productname: productname,
        productvalue: productvalue,
        description: description
    }).then(function (data){
        return {userMessage: 'Produto atualizado com sucesso.'};
    }).catch(function (err){
        return {userMessage: 'Falha ao atualizar produto.'};
    });
};

ProductsModel.prototype.deleteProduct = function(id) {
    if (!this.findProductByProperty('id', id)) {
        throw new Error('Product doesn\'t exists.');
    }

    return this.db('products').where('id', id)
            .del()
            .then(function (data){
                return {userMessage: 'Produto removido com sucesso.'};
            })
            .catch(function (err){
                return {userMessage: 'Falha ao deletar produto.'};
            });
};

module.exports = ProductsModel;

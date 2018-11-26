'use strict';

function ProductsStoresModel(knex) {
    this.db = knex;
};

ProductsStoresModel.prototype.getAllProductsStores = function() {
    return this.db('productsstores').select();
};

ProductsStoresModel.prototype.findProductStoreByProperty = function(prop, value) {
    return this.db('productsstores').select().where('productid', value);
};

ProductsStoresModel.prototype.getProductsStores = function(start, limit) {
    var productsstores = this.getAllProductsStores();

    return productsstores;
};

ProductsStoresModel.prototype.getProductStore = function(id) {
    var product = this.findProductStoreByProperty('productid', id);

    if (!product) {
        throw new Error('Product doesn\'t exists.');
    }

    return product;
};

ProductsStoresModel.prototype.addProductStore = function(productid, storeid) {

    return this.db('productsstores').insert({
        productid: productid,
        storeid: storeid
    }).then(function (data){
        return 'Produto x Loja criado com sucesso.';
    }).catch(function (err){
        return 'Falha ao criar produto x loja.';
    });
};

ProductsStoresModel.prototype.updateProduct = function(productidParam, storeidParam, productid, storeid) {

    var product = this.findProductStoreByProperty('productid', productidParam);

    if (!product) {
        throw new Error('Product doesn\'t exists.');
    }
    console.log(productidParam + '  ' + storeidParam)
    return this.db('productsstores').where('productid', productidParam).andWhere('storeid', storeidParam).update({
        productid: productid,
        storeid: storeid
    }).then(function (data){
        return 'Produto x Loja atualizado com sucesso.';
    }).catch(function (err){
        return 'Falha ao atualizar produto x loja.';
    });
};

ProductsStoresModel.prototype.deleteProductStore = function(productid, storeid) {
    if (!this.findProductStoreByProperty('productid', productid)) {
        throw new Error('Product doesn\'t exists.');
    }

    return this.db('productsstores').where('productid', productid).andWhere('storeid', storeid)
            .del()
            .then(function (data){
                return 'Produto x Loja removido com sucesso.';
            })
            .catch(function (err){
                return 'Falha ao deletar produto x loja.';
            });
};

module.exports = ProductsStoresModel;
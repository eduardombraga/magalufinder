exports.seed = function(knex, Promise) {

    var productsStoreTable = 'productsstores';

    var rows = [

        {
            productid: 1,
            storeid: 1,
        },
        {
            productid: 1,
            storeid: 48,
        },
        {
            productid: 1,
            storeid: 3,
        },
        {
            productid: 2,
            storeid: 1,
        },
        {
            productid: 2,
            storeid: 4,
        },
        {
            productid: 3,
            storeid: 48,
        },
        {
            productid: 4,
            storeid: 1,
        },
        {
            productid: 4,
            storeid: 4,
        },
        {
            productid: 4,
            storeid: 3,
        },
        {
            productid: 5,
            storeid: 1,
        },
        {
            productid: 5,
            storeid: 48,
        },
        {
            productid: 5,
            storeid: 13,
        },
        {
            productid: 5,
            storeid: 4,
        },
        {
            productid: 5,
            storeid: 3,
        },
        {
            productid: 6,
            storeid: 13,
        },
        {
            productid: 6,
            storeid: 3,
        },
        {
            productid: 7,
            storeid: 1,
        },
        {
            productid: 7,
            storeid: 48,
        },
        {
            productid: 8,
            storeid: 48,
        },
        {
            productid: 9,
            storeid: 1,
        },
        {
            productid: 9,
            storeid: 4,
        },
        {
            productid: 9,
            storeid: 13,
        },
        {
            productid: 10,
            storeid: 1,
        },
        {
            productid: 10,
            storeid: 4,
        },
        {
            productid: 10,
            storeid: 3,
        },

    ];

    return knex(productsStoreTable)
            .del()
            .then(function(){
                return knex.insert(rows).into(productsStoreTable);
            });

};
